import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dataFiles = [
  "assets/js/data-figures.js",
  "assets/js/data-stories.js",
  "assets/js/data-gurbani.js",
  "assets/js/data-paaths.js",
  "assets/js/data-fives.js",
  "assets/js/data-festivals.js",
  "assets/js/data-glossary.js",
  "assets/js/data-gurdwaras.js",
  "assets/js/data-timeline.js",
  "assets/js/data-ceremonies.js",
  "assets/js/data-1984.js"
];
const scriptFiles = ["assets/js/app.js", ...dataFiles];
const errors = [];

function fail(message) {
  errors.push(message);
}

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function requireFields(collectionName, records, fields) {
  records.forEach((record, index) => {
    fields.forEach((field) => {
      if (record[field] === undefined || record[field] === null || record[field] === "") {
        fail(`${collectionName}[${index}] is missing ${field}`);
      }
    });
  });
}

function requireUniqueIds(collectionName, records) {
  const seen = new Set();
  records.forEach((record, index) => {
    if (!record.id) {
      fail(`${collectionName}[${index}] is missing id`);
    } else if (seen.has(record.id)) {
      fail(`${collectionName} contains duplicate id "${record.id}"`);
    }
    seen.add(record.id);
  });
}

function findUrls(value, location = "VIRSA") {
  if (Array.isArray(value)) {
    value.forEach((item, index) => findUrls(item, `${location}[${index}]`));
  } else if (value && typeof value === "object") {
    Object.entries(value).forEach(([key, item]) => findUrls(item, `${location}.${key}`));
  } else if (typeof value === "string" && /^https?:\/\//.test(value) && !value.startsWith("https://")) {
    fail(`${location} must use HTTPS: ${value}`);
  }
}

scriptFiles.forEach((file) => {
  const source = read(file);
  try {
    new vm.Script(source, { filename: file });
  } catch (error) {
    fail(`${file} has invalid JavaScript: ${error.message}`);
  }
  if (/(\uFFFD|Ã|â€|à¨|ðŸ)/.test(source)) {
    fail(`${file} contains likely mojibake or replacement characters`);
  }
});

const context = vm.createContext({ window: {} });
dataFiles.forEach((file) => {
  try {
    new vm.Script(read(file), { filename: file }).runInContext(context);
  } catch (error) {
    fail(`${file} could not be loaded: ${error.message}`);
  }
});

const data = context.window.VIRSA || {};
const collections = {
  figures: data.figures || [],
  stories: data.stories || [],
  gurbani: data.gurbani || [],
  paaths: data.paaths || [],
  fives: data.fives || [],
  festivals: data.festivals || [],
  glossary: data.glossary || [],
  gurdwaras: data.gurdwaras || []
};

Object.entries(collections).forEach(([name, records]) => {
  if (!Array.isArray(records) || records.length === 0) {
    fail(`${name} must be a non-empty array`);
  }
});

["figures", "stories", "gurbani", "paaths", "fives", "festivals", "gurdwaras"].forEach((name) => {
  requireUniqueIds(name, collections[name]);
});

requireFields("figures", collections.figures, ["id", "type", "name", "relevance", "verifyUrl"]);
requireFields("stories", collections.stories, ["id", "figureId", "title", "status", "summary", "verifyUrl"]);
requireFields("gurbani", collections.gurbani, ["id", "type", "transliteration", "translation", "source", "author", "verifyUrl"]);
requireFields("paaths", collections.paaths, ["id", "name", "author", "time", "listenUrl"]);
requireFields("fives", collections.fives, ["id", "name", "meaning", "significance"]);
requireFields("festivals", collections.festivals, ["id", "name", "whenText", "commemorates"]);
requireFields("gurdwaras", collections.gurdwaras, ["id", "name", "place", "coords", "mapsQuery"]);
requireFields("glossary", collections.glossary, ["term", "cat", "def"]);

const figureIds = new Set(collections.figures.map((figure) => figure.id));
collections.stories.forEach((story) => {
  if (!["historical", "traditional"].includes(story.status)) {
    fail(`story "${story.id}" has unsupported status "${story.status}"`);
  }
  if (!figureIds.has(story.figureId)) {
    fail(`story "${story.id}" references missing figure "${story.figureId}"`);
  }
});

collections.gurbani.forEach((item) => {
  if (!["ggs", "ardas", "principle", "jaikara"].includes(item.type)) {
    fail(`gurbani item "${item.id}" has unsupported type "${item.type}"`);
  }
  if (item.type === "ggs") {
    if (!/Ang \d+/.test(item.source)) {
      fail(`SGGS item "${item.id}" must name its ang in source`);
    }
    if (!/^https:\/\/www\.searchgurbani\.com\/guru-granth-sahib\/ang\/\d+$/.test(item.verifyUrl)) {
      fail(`SGGS item "${item.id}" must link to its SearchGurbani ang`);
    }
  }
});

collections.gurdwaras.forEach((gurdwara) => {
  if (!Array.isArray(gurdwara.coords) || gurdwara.coords.length !== 2 || gurdwara.coords.some((value) => typeof value !== "number")) {
    fail(`gurdwara "${gurdwara.id}" must have numeric [latitude, longitude] coords`);
  }
});

findUrls(data);

if (errors.length) {
  console.error(`Content validation failed with ${errors.length} issue(s):`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exitCode = 1;
} else {
  const summary = Object.entries(collections)
    .map(([name, records]) => `${name}: ${records.length}`)
    .join(", ");
  console.log(`Content validation passed (${summary}).`);
}
