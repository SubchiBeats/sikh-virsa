# Content, Sources & Accuracy Notes

This file documents how Virsa's content is sourced and labelled, and — most
importantly — **what should be reviewed by a Granthi or scholar before the app
is published widely.** Accuracy is the project's first priority; this is the
honest record of how that priority is upheld and where human review is needed.

---

## The labelling system (this is the heart of it)

**Stories** (`data-stories.js`) carry a `status`:
- `"documented"` — a well-documented historical event (e.g., the martyrdom of
  Guru Arjan Dev Ji 1606, Guru Tegh Bahadur Ji 1675, Vaisakhi 1699, the
  Sahibzade December 1705, the eternal Guruship 1708).
- `"traditional"` — a **Sakhi / Janamsakhi**: a cherished account carried in the
  Sikh tradition. These hold deep meaning and may blend history with devotional
  teaching; they are shown as tradition, **not** as court-recorded fact.

**Gurbani** (`data-gurbani.js`) carries a `type`, so nothing is misattributed:
- `"ggs"` — a verse from **Sri Guru Granth Sahib Ji**.
- `"ardas"` — a line of the **Ardas** (e.g., *"Nanak Naam Chardi Kala…"*) — this
  is **not** a verse of SGGS, and is labelled as such in the app.
- `"principle"` — a core teaching/phrase (e.g., *Kirat Karo · Naam Japo · Vand
  Chhako*, *Chardi Kala*, *Seva*) — a summary of Sikh living, not a single verse.
- `"jaikara"` — a Sikh call of praise (e.g., *Jo Bole So Nihaal · Sat Sri Akaal*)
  — **not** scripture.

This distinction matters because conflating Ardas lines, slogans, or principles
with SGGS verses is a common and avoidable error. The app shows the correct
label on every quote.

---

## An important clarification built into the app

**Sri Guru Granth Sahib Ji is not a book of historical narratives.** It is
spiritual and devotional wisdom (Bani) — guidance on how to live and how to
remember the Divine. So when the app says a figure or story has a *"connection
to Gurbani"*, it means **the values the story reflects, or the hymns a Guru
composed** — never that SGGS "tells the story" of an event. This is stated
explicitly in the Sri Guru Granth Sahib Ji entry and the About page.

---

## On images (a deliberate decision)

The app uses **dignified symbols and calligraphy (ੴ, the Khanda, etc.), not
imagined portraits.** This respects the widely-held Sikh tradition that the
Gurus should not be depicted, and it removes any risk of showing the wrong
person — directly addressing the brief's concern. If you ever decide to add
historical imagery (e.g., photographs of Gurdwaras, manuscripts, or battle
sites), prefer verifiable, properly-licensed sources and avoid any depiction of
the Gurus or the Panj Pyare.

---

## ✅ Please have a knowledgeable reviewer check these before publishing

The historical backbone (order of Gurus, principal dates, major events) is
well-established. The items most worth a careful second pair of eyes:

1. **Gurmukhi spelling & diacritics** in `data-gurbani.js` and the `gurmukhi`
   name fields. Diacritics matter; each verse links to SikhiToTheMax so the
   exact original can be compared. Where exact Gurmukhi was not certain, the
   field is left `null` and only transliteration + translation are shown.
2. **Translations** — all translations of Gurbani are interpretive. Confirm they
   read faithfully for your audience.
3. **Dates** — given as commonly-cited Gregorian years. A few vary slightly
   across scholarly sources; confirm against your preferred references.
4. **Nitnem set & maryada** — the banis included reflect the most widely-recited
   set; the app states that traditions vary. Confirm it matches the maryada you
   wish to present.
5. **The audio recordings** (see below).

---

## Audio sources

- **Primary (always available):** every bani links to **SikhNet Play**
  (`play.sikhnet.com`), a large free library of mainstream recordings that can
  be streamed and downloaded. This is the recommended listening experience.
- **In-app convenience player:** for **Japji Sahib** and **Kirtan Sohila**, a
  direct recording from the **Internet Archive** plays inside the app. Both URLs
  were verified to load. The reciter (Master Darshan Singh, via archive.org) is
  **credited on screen**. The *words* are standard Gurbani; if you would prefer a
  different reciter, simply replace the `inAppAudio` URL in `data-paaths.js` with
  any direct audio file. If an in-app file ever fails to load, the player
  automatically points the listener to SikhNet.
- The other banis use the SikhNet link only (no in-app file is hard-coded for
  them yet — you can add `inAppAudio` URLs the same way if you wish).

---

## Trusted resources linked throughout

- **SikhiToTheMax** — https://www.sikhitothemax.org/ (Gurbani search & text)
- **SearchGurbani** — https://www.searchgurbani.com/
- **SriGranth** — https://www.srigranth.org/
- **SikhNet** — https://www.sikhnet.com/ (audio, articles)
- **SikhiWiki** — https://www.sikhiwiki.org/ (figure & event references)

---

## Coverage in this first release

- **19** figures (10 Gurus + Sri Guru Granth Sahib Ji + 8 key figures)
- **14** stories (Sakhis & documented events), each labelled
- **15** Gurbani verses/teachings with reflections, each labelled by source
- **7** Nitnem banis with audio and a streak tracker

This is intentionally an *extensible foundation*, not a finished encyclopedia —
the data files are built so content can keep growing for years.
