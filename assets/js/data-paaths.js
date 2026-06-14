/* ============================================================================
   VIRSA — Sikh Heritage & Stories
   data-paaths.js  —  The daily Nitnem banis, with audio and a streak tracker.

   A NOTE ON MARYADA (TRADITION)
   ------------------------------
   The exact set of banis in one's daily Nitnem can vary between individuals,
   families, and traditions (maryada). The banis below are those most widely
   recited. They are grouped by the traditional time of day. This app is a
   helpful companion — it is not a religious authority; please follow the
   guidance of your family and Gurdwara.

   AUDIO SOURCES
   --------------
   - 'listenUrl'  : SikhNet Play — a large, free, mainstream library of
                    recordings (streaming + download). This is the primary,
                    always-available source for every bani.
   - 'inAppAudio' : an optional direct recording (Internet Archive) that plays
                    inside this app for convenience. The reciter is credited in
                    'inAppReciter'. You can replace this URL with any preferred
                    reciter's direct audio file. If it ever fails to load, the
                    player automatically points the listener to SikhNet.
   ========================================================================== */

window.VIRSA = window.VIRSA || {};

window.VIRSA.paaths = [
  {
    id: "japji-sahib",
    name: "Japji Sahib",
    gurmukhi: "ਜਪੁਜੀ ਸਾਹਿਬ",
    author: "Guru Nanak Dev Ji",
    time: "Amrit Vela (pre-dawn morning)",
    order: 1,
    lengthApprox: "~20–25 min",
    description:
      "The foundational morning prayer and the very first composition in Sri Guru Granth Sahib Ji. It opens with the Mool Mantar and unfolds the essence of Sikh belief — the nature of the One, the path of truth, and life lived in the Divine Will.",
    whenToRead:
      "Recited in the early morning (Amrit Vela), ideally after rising and bathing, to begin the day with reflection.",
    inAppAudio: "https://archive.org/download/japji/japji.mp3",
    inAppReciter: "Recital via the Internet Archive — Master Darshan Singh",
    listenUrl: "https://play.sikhnet.com/track/1-japji-sahib-slow",
    tags: ["morning", "foundational"]
  },
  {
    id: "jaap-sahib",
    name: "Jaap Sahib",
    gurmukhi: "ਜਾਪੁ ਸਾਹਿਬ",
    author: "Guru Gobind Singh Ji",
    time: "Amrit Vela (pre-dawn morning)",
    order: 2,
    lengthApprox: "~20–25 min",
    description:
      "A majestic morning composition of Guru Gobind Singh Ji in praise of the Divine, describing the One through countless attributes — and equally through what the One is beyond. Part of the Dasam Granth.",
    whenToRead: "Recited in the morning, traditionally after Japji Sahib.",
    inAppAudio: null,
    inAppReciter: null,
    listenUrl: "https://play.sikhnet.com/track/1-jaap-sahib-slow",
    tags: ["morning"]
  },
  {
    id: "tav-prasad-savaiye",
    name: "Tav Prasad Savaiye",
    gurmukhi: "ਤ੍ਵ ਪ੍ਰਸਾਦਿ ਸਵੈਯੇ",
    author: "Guru Gobind Singh Ji",
    time: "Amrit Vela (pre-dawn morning)",
    order: 3,
    lengthApprox: "~5–7 min",
    description:
      "A set of savaiye (verses) by Guru Gobind Singh Ji teaching that outward rituals and shows of piety are empty without sincere love and remembrance of the One.",
    whenToRead: "Recited in the morning as part of the daily Nitnem.",
    inAppAudio: null,
    inAppReciter: null,
    listenUrl: "https://play.sikhnet.com/search?q=Tav%20Prasad%20Savaiye",
    tags: ["morning"]
  },
  {
    id: "chaupai-sahib",
    name: "Benti Chaupai Sahib",
    gurmukhi: "ਬੇਨਤੀ ਚੌਪਈ ਸਾਹਿਬ",
    author: "Guru Gobind Singh Ji",
    time: "Morning & Evening",
    order: 4,
    lengthApprox: "~7–10 min",
    description:
      "A beloved prayer of protection and humble petition (benti) by Guru Gobind Singh Ji, asking for the Divine's shelter, strength, and grace. Recited both in the morning Nitnem and within Rehras Sahib in the evening.",
    whenToRead:
      "Recited in the morning and again as part of Rehras Sahib in the evening.",
    inAppAudio: null,
    inAppReciter: null,
    listenUrl: "https://play.sikhnet.com/track/1-chaupai-sahib",
    tags: ["morning", "evening", "protection"]
  },
  {
    id: "anand-sahib",
    name: "Anand Sahib",
    gurmukhi: "ਅਨੰਦੁ ਸਾਹਿਬ",
    author: "Guru Amar Das Ji",
    time: "Morning & on happy occasions",
    order: 5,
    lengthApprox: "varies (short or full)",
    description:
      "The 'Song of Bliss' by Guru Amar Das Ji, describing the joy of union with the Divine. Recited daily and at every Sikh celebration and ceremony; often the first five and final pauris are read in shorter Nitnem.",
    whenToRead:
      "Recited in the morning Nitnem and at the conclusion of ceremonies and happy occasions.",
    inAppAudio: null,
    inAppReciter: null,
    listenUrl: "https://play.sikhnet.com/search?q=Anand%20Sahib",
    tags: ["morning", "celebration", "bliss"]
  },
  {
    id: "rehras-sahib",
    name: "Rehras Sahib",
    gurmukhi: "ਰਹਿਰਾਸ ਸਾਹਿਬ",
    author: "Guru Nanak Dev Ji, Guru Amar Das Ji, Guru Ram Das Ji, Guru Arjan Dev Ji & Guru Gobind Singh Ji",
    time: "Evening (sunset)",
    order: 6,
    lengthApprox: "~15–20 min",
    description:
      "The evening prayer, a collection of hymns by several Gurus offering thanks and seeking strength at the close of the day. It includes portions of Chaupai Sahib and Anand Sahib.",
    whenToRead: "Recited in the evening, around sunset.",
    inAppAudio: null,
    inAppReciter: null,
    listenUrl: "https://play.sikhnet.com/track/rehras-sahib-13",
    tags: ["evening", "gratitude"]
  },
  {
    id: "kirtan-sohila",
    name: "Kirtan Sohila",
    gurmukhi: "ਕੀਰਤਨ ਸੋਹਿਲਾ",
    author: "Guru Nanak Dev Ji, Guru Ram Das Ji & Guru Arjan Dev Ji",
    time: "Night (before sleep)",
    order: 7,
    lengthApprox: "~5–7 min",
    description:
      "The night-time prayer, recited before sleep. A short, deeply peaceful composition of five hymns reflecting on the Divine, the journey of the soul, and surrender — bringing the day to a serene close.",
    whenToRead: "Recited at night, just before going to sleep.",
    inAppAudio: "https://archive.org/download/10KirtanSohila/10KirtanSohila.mp3",
    inAppReciter: "Recital via the Internet Archive — Master Darshan Singh",
    listenUrl: "https://play.sikhnet.com/track/1-kirtan-sohila",
    tags: ["night", "peace"]
  }
];

/* A general, always-available resource for the full text, translations, and
   many more recordings of every bani. */
window.VIRSA.paathResources = {
  sikhnetNitnem: "https://play.sikhnet.com/search?q=Nitnem",
  readText: "https://www.searchgurbani.com/",
  sikhitothemax: "https://www.sikhitothemax.org/"
};
