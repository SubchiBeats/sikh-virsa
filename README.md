# Virsa — Sikh Heritage & Stories

Virsa is a mobile-friendly, accuracy-first guide to Sikh history, traditional
accounts, Gurbani, Sikh teachings, and daily Nitnem practice.

**Live website:** https://subchibeats.github.io/sikh-virsa/

> **ੴ Virsa** (ਵਿਰਸਾ) means *heritage / inheritance* — our roots, passed on.

## What is inside

| Section | What it does |
|---|---|
| **Home** | A daily reflection, practice streak, and the Ten Gurus at a glance. |
| **Gurus & Figures** | The Ten Gurus, Sri Guru Granth Sahib Ji, and key historical figures. |
| **Stories** | Historical events and traditional accounts, labelled separately. |
| **Wisdom** | Gurbani lines, Ardas, teachings, and jaikara, each labelled by type and source. |
| **Nitnem** | Seven commonly recited banis, listening links, and a local practice tracker. |
| **More** | Festivals, the Five Ks, a glossary, historical Gurdwaras, and source notes. |

Kids mode, light/dark themes, keyboard access, and responsive layouts are built
in. The core app is static and has no project backend or analytics.

Optional Google Fonts, maps, audio, and external references use the network.
Nitnem progress and settings stay in the browser's local storage.

## Accuracy approach

Virsa is a doorway, not an authority.

- SGGS lines link to the relevant ang for reading in context.
- Ardas, jaikara, and Sikh principles are never labelled as SGGS verses.
- Stories distinguish historical events from traditional accounts.
- Disputed chronology is shown rather than hidden.
- Historical links are further-reading starting points, not proof by themselves.
- Translations and historical interpretations remain open to correction.

Read [CONTENT-NOTES.md](CONTENT-NOTES.md) before changing or publishing content.
Corrections supported by strong sources are welcome; see
[CONTRIBUTING.md](CONTRIBUTING.md).

## Run locally

There is no build step and no package dependency.

```powershell
python -m http.server 8125
```

Then open `http://localhost:8125`.

## Validate content

The validator uses Node.js built-ins only:

```powershell
node scripts/validate-content.mjs
```

It checks syntax, IDs, relationships, supported evidence/type labels, required
fields, HTTPS source links, and SGGS ang references. GitHub Actions runs it on
every push and pull request.

## Content structure

All content lives in plain JavaScript data files:

```text
assets/js/
  data-figures.js
  data-stories.js
  data-gurbani.js
  data-paaths.js
  data-fives.js
  data-festivals.js
  data-glossary.js
  data-gurdwaras.js
```

The interface is in `assets/js/app.js` and `assets/css/styles.css`.

## Deploy

The repository can be served by any static host, including GitHub Pages or
Netlify. No server-side configuration is required.
