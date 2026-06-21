/* ============================================================================
   Virsa — scripts/fetch-gurbani.mjs   (SCAFFOLD — run locally/CI with Node)

   PURPOSE
   -------
   Virsa's #1 priority is accurate Gurbani. Rather than rely on hand-typed text,
   this script is designed to verify/refresh the Gurmukhi, transliteration, and
   translation of our Sri Guru Granth Sahib Ji (type: "ggs") entries against a
   peer-reviewed open database — the same data trusted by SikhiToTheMax and the
   live kirtan at Sri Harmandir Sahib:

     • Shabad OS database  (npm: @shabados/database, MIT code / public-domain text)
       https://github.com/shabados/database
     • BaniDB API          (Khalis Foundation, MIT)
       https://github.com/KhalisFoundation/banidb-api

   STATUS
   ------
   This is an intentional SCAFFOLD. It is NOT run in the build that produced the
   current site (the dev environment here has no Node). To use it:

     1) cd sikh-virsa
     2) npm init -y && npm install @shabados/database
     3) node scripts/fetch-gurbani.mjs --check     # report-only, no writes
     4) review the diff carefully WITH a Granthi before committing any changes

   Sacred text must never be auto-overwritten without human review. This script
   is a verification aid, not an unattended rewriter.

   APPROACH
   --------
   Each entry in assets/js/data-gurbani.js that is type "ggs" already cites its
   ang (e.g. "Ang 1") and links to its SearchGurbani ang. To map an entry to the
   exact verified line, give each ggs entry a stable identifier the database
   understands — preferably the Shabad OS line `id` (a short string) or the
   BaniDB `verseId`. Add it as `sourceId` on the entry, then this script can pull
   the canonical Gurmukhi/transliteration/translation and FLAG mismatches.
   ========================================================================== */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const reportOnly = process.argv.includes("--check");

async function loadShabadOs() {
  try {
    // Lazy import so the script gives a friendly message if the dep is missing.
    const mod = await import("@shabados/database");
    return mod.default || mod;
  } catch (e) {
    console.error("\n@shabados/database is not installed. Run:\n  npm install @shabados/database\n");
    process.exit(1);
  }
}

// Pull our gurbani entries out of the data file without executing app code.
function loadGurbaniEntries() {
  const file = path.join(root, "assets/js/data-gurbani.js");
  const src = fs.readFileSync(file, "utf8");
  const sandboxWindow = {};
  // eslint-disable-next-line no-new-func
  new Function("window", src)(sandboxWindow);
  return (sandboxWindow.VIRSA && sandboxWindow.VIRSA.gurbani) || [];
}

async function main() {
  const entries = loadGurbaniEntries();
  const ggs = entries.filter((e) => e.type === "ggs");
  console.log(`Found ${entries.length} gurbani entries (${ggs.length} from Sri Guru Granth Sahib Ji).`);

  const withSourceId = ggs.filter((e) => e.sourceId);
  if (withSourceId.length === 0) {
    console.log(
      "\nNo entries have a `sourceId` yet. Add the Shabad OS line id (or BaniDB verseId)\n" +
      "to each ggs entry, then re-run to verify the Gurmukhi/translation against the\n" +
      "canonical database. Until then, this script only reports coverage.\n"
    );
    return;
  }

  const db = await loadShabadOs();
  const Lines = db.Lines || (db.knex && db.knex("Lines"));
  let mismatches = 0;

  for (const e of withSourceId) {
    try {
      const line = await Lines.query().findById(e.sourceId).withGraphFetched("[translations.translationSource, transliterations]");
      if (!line) { console.warn(`! ${e.id}: sourceId "${e.sourceId}" not found in database`); continue; }
      const canonical = line.gurmukhi;
      if (e.gurmukhi && canonical && e.gurmukhi.trim() !== canonical.trim()) {
        mismatches++;
        console.warn(`~ ${e.id}: Gurmukhi differs from canonical (Ang ${line.shabad ? line.shabad.section : "?"}).`);
        console.warn(`    ours:      ${e.gurmukhi}`);
        console.warn(`    canonical: ${canonical}`);
        // In a future, reviewed step this is where we would update the entry.
      }
    } catch (err) {
      console.warn(`! ${e.id}: lookup failed — ${err.message}`);
    }
  }

  console.log(`\nDone. ${mismatches} entr${mismatches === 1 ? "y" : "ies"} differ from the canonical text.`);
  if (!reportOnly && mismatches > 0) {
    console.log("Writes are intentionally disabled in this scaffold. Review with a Granthi, then apply by hand.");
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
