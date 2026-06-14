/* ============================================================================
   VIRSA — Sikh Heritage & Stories
   data-festivals.js  —  Festivals, Gurpurabs & days of remembrance.

   IMPORTANT — DATES SHIFT EVERY YEAR
   -----------------------------------
   Many Sikh days are reckoned by the Nanakshahi calendar or by the lunar
   (Puranmashi) calendar, so their Gregorian date changes from year to year, and
   different communities sometimes observe them on different days. To avoid
   spreading an incorrect date, this app gives the season and the traditional
   reckoning, the event being remembered, and the year it occurred — and asks
   you to confirm the exact date each year against the Nanakshahi calendar or
   your local Gurdwara / the SGPC. ('whenText' below is approximate by design.)
   ========================================================================== */

window.VIRSA = window.VIRSA || {};

window.VIRSA.festivalsNote =
  "Sikh dates follow the Nanakshahi and lunar calendars, so the exact day shifts each year. The timings below are approximate and traditional — always confirm the precise date for the current year with your Gurdwara or the Nanakshahi calendar.";

window.VIRSA.festivals = [
  {
    id: "hola-mohalla",
    name: "Hola Mohalla",
    gurmukhi: "ਹੋਲਾ ਮਹੱਲਾ",
    kind: "Mela (gathering)",
    whenText: "Spring — the day after Holi (month of Chet; lunar, varies)",
    commemorates:
      "Established by Guru Gobind Singh Ji at Anandpur Sahib (around 1701) as a gathering for mock battles, martial training, and displays of valour.",
    observance:
      "Today it is marked at Anandpur Sahib with Gatka (martial arts), horsemanship, kirtan, kavishri (poetry), and the traditions of the Nihang Singhs, alongside vast Langars.",
    significance:
      "A celebration of courage, discipline, readiness, and Chardi Kala — channelling strength toward the service and protection of others."
  },
  {
    id: "vaisakhi",
    name: "Vaisakhi",
    gurmukhi: "ਵਿਸਾਖੀ",
    kind: "Gurpurab & Mela",
    whenText: "Around 14 April (solar; nearly fixed each year)",
    commemorates:
      "The founding of the Khalsa Panth by Guru Gobind Singh Ji in 1699, when the Panj Pyare were initiated with Amrit. It is also a spring harvest festival in Punjab.",
    observance:
      "Nagar Kirtans (processions), Amrit Sanchar, kirtan, and celebration in Gurdwaras around the world. A day of great joy and renewal of commitment.",
    significance:
      "The birth of the Khalsa and the Sikh identity of equality, courage, and devotion — one of the most important days in the Sikh year."
  },
  {
    id: "shaheedi-arjan",
    name: "Shaheedi of Guru Arjan Dev Ji",
    gurmukhi: "ਸ਼ਹੀਦੀ ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ",
    kind: "Shaheedi (martyrdom)",
    whenText: "Height of summer (month of Jeth; ~late May / June, varies)",
    commemorates:
      "The martyrdom of Guru Arjan Dev Ji in 1606 — the first Sikh martyr, who gave his life with serene acceptance of the Divine Will.",
    observance:
      "Sikhs set up chhabeel — stalls offering cold, sweet drinks to passers-by — a gesture tied to the summer heat of his martyrdom, and an act of seva. Kirtan and reflection in Gurdwaras.",
    significance:
      "Remembering the courage to remain at peace and faithful even through suffering — without hatred."
  },
  {
    id: "first-parkash-ggs",
    name: "First Parkash of Sri Guru Granth Sahib Ji",
    gurmukhi: "ਪਹਿਲਾ ਪ੍ਰਕਾਸ਼ ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ",
    kind: "Gurpurab",
    whenText: "Late summer (month of Bhadon; ~September, varies)",
    commemorates:
      "The first installation of the Adi Granth at Sri Harmandir Sahib in 1604 by Guru Arjan Dev Ji.",
    observance:
      "Kirtan and reflection on the gift of Gurbani and the central place of Sri Guru Granth Sahib Ji in Sikh life.",
    significance:
      "Honouring the sacred scripture that would become the eternal Guru of the Sikhs."
  },
  {
    id: "gurta-gaddi-ggs",
    name: "Gurta Gaddi Divas of Sri Guru Granth Sahib Ji",
    gurmukhi: "ਗੁਰਤਾ ਗੱਦੀ ਦਿਵਸ",
    kind: "Gurpurab",
    whenText: "Autumn (month of Katak; ~October, varies)",
    commemorates:
      "The day in 1708 at Nanded when Guru Gobind Singh Ji conferred the eternal Guruship upon Sri Guru Granth Sahib Ji, ending the line of human Gurus.",
    observance:
      "Special diwans and kirtan, particularly at Takht Sri Hazur Sahib, Nanded.",
    significance:
      "Marking Sri Guru Granth Sahib Ji as the eternal, living Guru of the Sikhs for all time."
  },
  {
    id: "bandi-chhor",
    name: "Bandi Chhor Divas",
    gurmukhi: "ਬੰਦੀ ਛੋੜ ਦਿਵਸ",
    kind: "Gurpurab",
    whenText: "Autumn — coincides with Diwali (month of Katak; lunar, varies)",
    commemorates:
      "The return of Guru Hargobind Ji to Amritsar after securing his own release from Gwalior Fort together with 52 imprisoned princes.",
    observance:
      "Sri Harmandir Sahib and Gurdwaras are illuminated with lamps and lights; kirtan and joyful gatherings. (Sikhs observe Bandi Chhor Divas — 'the day of liberation' — which falls at the same time as Diwali.)",
    significance:
      "A celebration of freedom and justice — that true liberation is shared, never kept for oneself alone."
  },
  {
    id: "gurpurab-nanak",
    name: "Parkash Purab of Guru Nanak Dev Ji",
    gurmukhi: "ਗੁਰਪੁਰਬ — ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ",
    kind: "Gurpurab",
    whenText: "Full moon of Katak (Kartik Puranmashi; ~November, varies)",
    commemorates:
      "The birth (Parkash) of Guru Nanak Dev Ji, the founder of Sikhi, in 1469.",
    observance:
      "Akhand Paath in the days before, Nagar Kirtan, Prabhat Pheris (early-morning processions), and great Langars. One of the most widely-celebrated Gurpurabs.",
    significance:
      "Honouring the arrival of the first Guru and the dawn of his message of oneness, honesty, and sharing."
  },
  {
    id: "shaheedi-teghbahadur",
    name: "Shaheedi of Guru Tegh Bahadur Ji",
    gurmukhi: "ਸ਼ਹੀਦੀ ਗੁਰੂ ਤੇਗ਼ ਬਹਾਦਰ ਜੀ",
    kind: "Shaheedi (martyrdom)",
    whenText: "Late autumn (month of Maghar; ~late November, varies)",
    commemorates:
      "The martyrdom of Guru Tegh Bahadur Ji in 1675 in Delhi, for defending the religious freedom of others — 'Hind di Chadar'.",
    observance:
      "Kirtan, reflection, and remembrance at Gurdwara Sis Ganj Sahib (Delhi) and around the world.",
    significance:
      "Honouring the supreme stand for freedom of conscience — giving one's life so that others could worship in their own way."
  },
  {
    id: "shaheedi-sahibzade",
    name: "Shaheedi of the Sahibzade & Mata Gujri Ji",
    gurmukhi: "ਸ਼ਹੀਦੀ ਸਾਹਿਬਜ਼ਾਦੇ",
    kind: "Shaheedi (martyrdom)",
    whenText: "Late December (month of Poh)",
    commemorates:
      "The martyrdom of the four Sahibzade and Mata Gujri Ji in December 1705 — the elder Sahibzade at Chamkaur and the younger at Sirhind.",
    observance:
      "Days of solemn remembrance, with the Jor Mela at Gurdwara Fatehgarh Sahib, kirtan, and katha recalling their sacrifice.",
    significance:
      "Among the most reverently-remembered days — the supreme courage of the young and the strength of Mata Gujri Ji in the face of unimaginable hardship."
  },
  {
    id: "gurpurab-gobindsingh",
    name: "Parkash Purab of Guru Gobind Singh Ji",
    gurmukhi: "ਗੁਰਪੁਰਬ — ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ",
    kind: "Gurpurab",
    whenText: "Winter (month of Poh; ~December / January, varies)",
    commemorates:
      "The birth (Parkash) of Guru Gobind Singh Ji, the tenth Guru and founder of the Khalsa, in 1666 at Patna.",
    observance:
      "Akhand Paath, Nagar Kirtan, and celebration in Gurdwaras, especially Takht Sri Patna Sahib.",
    significance:
      "Honouring the Guru who shaped the Khalsa and gave the Sikhs their distinct identity, courage, and code of honour."
  },
  {
    id: "maghi",
    name: "Maghi (Mela Maghi)",
    gurmukhi: "ਮਾਘੀ",
    kind: "Shaheedi & Mela",
    whenText: "Around 14 January (start of the month of Magh; nearly fixed)",
    commemorates:
      "The Forty Liberated Ones (Chali Mukte) who gave their lives at the Battle of Muktsar in 1705, and the courage of Mai Bhago Ji.",
    observance:
      "A great mela at Gurdwara Sri Muktsar Sahib, with kirtan, processions, and remembrance of the Forty.",
    significance:
      "Honouring sacrifice, return to the right path, and the redemption of the Forty Mukte."
  },
  {
    id: "sangrand",
    name: "Sangrand",
    gurmukhi: "ਸੰਗਰਾਂਦ",
    kind: "Monthly observance",
    whenText: "The first day of each month of the Nanakshahi calendar",
    commemorates:
      "Not a single event, but the beginning of each new month — a moment to pause, give thanks, and renew one's spiritual resolve.",
    observance:
      "The Gurdwara reads the shabad of Barah Maha ('the twelve months') relating to the new month, and the Sangat gathers to reflect.",
    significance:
      "A regular rhythm of remembrance and gratitude woven through the year."
  }
];
