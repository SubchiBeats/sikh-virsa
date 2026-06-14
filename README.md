# Virsa — Sikh Heritage & Stories

A mobile-friendly web app that makes Sikh history, the lives of the Gurus,
timeless Sakhis, daily Gurbani, and the Nitnem accessible to a new
generation — built with care for **accuracy** above all.

> **ੴ Virsa** (ਵਿਰਸਾ) means *heritage / inheritance* — our roots, passed on.

---

## What's inside

| Section | What it does |
|---|---|
| **Home** | A daily Gurbani verse, your Nitnem streak, and the Ten Gurus at a glance. |
| **Gurus & Figures** | The Ten Gurus, Sri Guru Granth Sahib Ji (the eternal Guru), and key devotees, warriors, and family — with searchable, filterable cards. |
| **Stories** | Sakhis and historical events, each clearly labelled **Documented history** or **Traditional Sakhi**, with the teaching it carries. |
| **Daily Gurbani** | A rotating verse with a practical life-reflection, plus the full collection — every quote labelled by source. |
| **Nitnem** | The daily banis with in-app audio, links to more recordings, and a **day-streak tracker** saved privately on the device. |
| **About** | How accuracy is protected, the decision on images, trusted resources, and data controls. |

Extra touches added on top of the brief: **Kids mode** (a simple retelling for
younger readers on every figure & story), **light/dark themes**, full keyboard
accessibility, and an **offline-friendly** build (no server, no tracking).

---

## Run it locally

It's a static site — no build step, no dependencies. Any static server works.

```powershell
# From this folder:
python -m http.server 8125
# then open http://localhost:8125
```

You can also just open `index.html` in a browser (audio + streak still work).

## Deploy it (free)

Because it's fully static, it drops straight onto **GitHub Pages** or **Netlify**:

- **GitHub Pages:** push this folder to a repo → Settings → Pages → deploy from
  the `main` branch root. Done.
- **Netlify:** drag-and-drop this folder onto the Netlify dashboard.

---

## How the content is structured (easy to edit & grow)

All content lives in plain data files — **no code knowledge needed** to add or
correct entries. Just edit the arrays:

```
assets/js/
  data-figures.js   ← the Gurus & people
  data-stories.js   ← Sakhis & events (each tagged "documented" or "traditional")
  data-gurbani.js   ← daily verses (each tagged ggs / ardas / principle / jaikara)
  data-paaths.js    ← Nitnem banis + audio links
```

To **add a story**, copy an existing object in `data-stories.js`, change the
fields, and save. To **fix a fact**, edit that object. The app picks it up on
reload. See `CONTENT-NOTES.md` for the accuracy policy and the fields each
object uses.

---

## A word on accuracy

This app is a **doorway**, not an authority. Stories are labelled by type,
translations are interpretive, and every entry links out to a trusted source
(SikhiToTheMax, SearchGurbani, SikhNet, SikhiWiki, SriGranth). **Please have a
Granthi or knowledgeable reader review the content before publishing it widely.**
See `CONTENT-NOTES.md`.

🙏 *Simran · Seva · Chardi Kala*
