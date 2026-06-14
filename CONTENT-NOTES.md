# Content, Sources & Accuracy Notes

Virsa is an accuracy-first educational companion. It is not a religious
authority, a substitute for Sri Guru Granth Sahib Ji or the Sangat, or a
scholarly peer-reviewed history.

Accuracy here means:

- clearly separating Gurbani from Ardas, jaikara, and modern summaries;
- distinguishing historical events from traditional accounts;
- marking disputed chronology instead of choosing false precision;
- linking SGGS quotations to the exact ang for reading in context;
- treating translations and historical interpretations as revisable; and
- inviting corrections supported by strong sources.

No responsible project can promise that every sentence is perfect. The project
therefore makes uncertainty visible and keeps the content easy to correct.

## Story labels

Stories in `assets/js/data-stories.js` use one of two labels:

- `"historical"`: the core event is historically attested. This does **not**
  mean every narrative detail is independently documented. Sikh tradition,
  later sources, and historians can differ on details and interpretation.
- `"traditional"`: a Sakhi, Janamsakhi account, or other cherished narrative
  carried in Sikh tradition. These accounts hold spiritual meaning but are not
  presented as independently established history.

This two-part model is deliberately cautious. The previous label,
`"documented"`, was removed because it implied more certainty than a short app
entry and a single further-reading link could support.

## Gurbani and other teachings

Items in `assets/js/data-gurbani.js` carry a `type`:

- `"ggs"`: a line from Sri Guru Granth Sahib Ji.
- `"ardas"`: a line from Ardas, not an SGGS verse.
- `"principle"`: a Sikh teaching or commonly used summary, not a single verse.
- `"jaikara"`: a Sikh call of praise, not scripture.

Only `"ggs"` items are described as Gurbani in their type label. Each SGGS item
links to the relevant ang on SearchGurbani so the line can be read in context.
Translations remain interpretive and should be checked against the Gurmukhi.

During review, a popular couplet beginning "Kabeeraa, Jab Ham Paidaa Hue" was
removed because it had been incorrectly labelled as a verse from Sri Guru
Granth Sahib Ji.

## Source hierarchy

Different claims need different kinds of sources:

1. **Gurbani text and attribution:** read the relevant ang and cross-check using
   SearchGurbani, SikhiToTheMax, or SriGranth.
2. **Panthic practice and maryada:** consult the Sikh Rehat Maryada and the
   guidance of a knowledgeable Granthi, Gurdwara, or chosen tradition. Practices
   and recensions can differ.
3. **Historical claims:** compare reputable histories and, where possible,
   primary or near-contemporary sources. A community-edited reference is a
   useful starting point, not final proof.
4. **Traditional accounts:** preserve the tradition label and avoid presenting
   devotional detail as independently documented fact.

The current figure and story links are further-reading starting points. They do
not, by themselves, verify every sentence in an entry.

## Dates and chronology

Dates are commonly cited Gregorian years. Converting older Bikrami dates and
reconciling historical sources creates real disagreement. In particular:

- the evacuation of Anandpur, Chamkaur, the martyrdom of the younger Sahibzade,
  and Mata Gujri Ji are dated 1704 or 1705 in different chronologies;
- the Battle of Muktsar is dated 1705 or 1706 in different chronologies; and
- festival observance dates can vary by calendar and community.

Virsa marks these differences rather than choosing one date without warning.

## Nitnem and maryada

The Nitnem section presents seven commonly recited banis grouped by time of day.
The precise daily set and the form of some banis can differ by maryada and
tradition. The app is a practice companion, not an authority on maryada.

A practice streak counts when the user checks at least one bani they actually
recited. The app does not mark every listed bani complete on the user's behalf.

## Images

Virsa uses symbols and calligraphy rather than imagined portraits. No verified
contemporary likeness exists for most Gurus, and Sikh views on depiction differ.
The app avoids presenting an artistic interpretation as a historical likeness.

## Audio, network use, and privacy

- Direct in-app audio for Japji Sahib and Kirtan Sohila is served by the
  Internet Archive and credited in the interface.
- Other listening links open SikhNet Play.
- The optional map loads Leaflet from unpkg and tiles from OpenStreetMap.
- Google Fonts are requested when online.
- Nitnem progress and settings are stored in the browser's local storage and are
  not sent by Virsa to a project backend.

The core content is static and has no project backend, but optional fonts, maps,
audio, and external references do use the network. Virsa does not claim to be a
fully offline app.

## Review priorities

The most valuable next review is by a knowledgeable Granthi, Sikh historian, or
Punjabi/Gurmukhi reader who can check:

1. exact Gurmukhi spelling and transliteration;
2. interpretive English translations;
3. maryada-sensitive wording;
4. historical claims against stronger sources; and
5. date conventions used by the intended audience.

See `CONTRIBUTING.md` for the correction standard.

## Coverage in this release

- 19 figures: the Ten Gurus, Sri Guru Granth Sahib Ji, and 8 key figures
- 14 stories, each labelled historical or traditional
- 14 Gurbani lines and clearly labelled Sikh teachings
- 7 commonly recited Nitnem banis
- festivals, the Five Ks, a glossary, and historical Gurdwaras
