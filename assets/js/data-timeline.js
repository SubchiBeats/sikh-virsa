/* ============================================================================
   VIRSA — Sikh Heritage & Stories
   data-timeline.js  —  An interactive timeline of Sikh history.

   Dates are commonly-cited years; a few are approximate or debated across
   sources and are marked ("c." = circa). The timeline runs from the birth of
   Guru Nanak Dev Ji to the global Sikh community of today.
   ========================================================================== */

window.VIRSA = window.VIRSA || {};

window.VIRSA.timelineEras = [
  { id: "guru", label: "The Guru Era", range: "1469–1708" },
  { id: "18c", label: "The 18th Century", range: "1708–1799" },
  { id: "empire", label: "The Sikh Empire", range: "1799–1849" },
  { id: "modern", label: "Modern Era", range: "1849–today" }
];

window.VIRSA.timeline = [
  {
    id: "tl-1469", year: "1469", era: "guru",
    title: "Birth of Guru Nanak Dev Ji",
    text: "The founder of Sikhi is born at Rai Bhoi di Talwandi (now Nankana Sahib, Pakistan).",
    more: "From a young age he taught that there is One Creator present in all, and that truth is realised through honest living, remembrance of the Divine, and selfless sharing."
  },
  {
    id: "tl-travels", year: "c. 1500–1524", era: "guru",
    title: "The Udasis — Guru Nanak's great journeys",
    text: "Guru Nanak Dev Ji travels far and wide with Bhai Mardana, carrying a message of one humanity.",
    more: "His journeys are remembered as reaching across South Asia and beyond, meeting people of many faiths and challenging empty ritual and the divisions of caste and creed."
  },
  {
    id: "tl-1539", year: "1539", era: "guru",
    title: "Guru Angad Dev Ji & the Gurmukhi script",
    text: "Guru Nanak Dev Ji merges in the Divine Light (Joti Jot); Guru Angad Dev Ji becomes the Second Guru.",
    more: "Guru Angad Dev Ji standardised and spread the Gurmukhi script, giving the community a written form in which Gurbani could be faithfully preserved."
  },
  {
    id: "tl-amritsar", year: "c. 1577", era: "guru",
    title: "The founding of Amritsar",
    text: "Guru Ram Das Ji founds the town that grows into Amritsar and begins its sacred sarovar.",
    more: "The work was continued by Guru Arjan Dev Ji, who completed Harmandir Sahib at its centre — the most revered Gurdwara in Sikhi."
  },
  {
    id: "tl-1604", year: "1604", era: "guru",
    title: "The Adi Granth is compiled",
    text: "Guru Arjan Dev Ji compiles the Adi Granth and installs it at Harmandir Sahib.",
    more: "It gathered the hymns of the Gurus with the bani of Hindu and Muslim Bhagats — one truth shared across communities — and became the foundation of Sri Guru Granth Sahib Ji."
  },
  {
    id: "tl-1606", year: "1606", era: "guru",
    title: "Martyrdom of Guru Arjan Dev Ji · Miri-Piri",
    text: "The first Sikh martyr gives his life; Guru Hargobind Ji takes up Miri-Piri and builds the Akal Takht.",
    more: "Guru Hargobind Ji wore two swords — temporal and spiritual authority — teaching that a life of faith must also stand against injustice."
  },
  {
    id: "tl-1675", year: "1675", era: "guru",
    title: "Martyrdom of Guru Tegh Bahadur Ji",
    text: "Guru Tegh Bahadur Ji is martyred in Delhi for defending freedom of conscience — 'Hind di Chadar'.",
    more: "He gave his life so that others — people of a different faith — could worship freely. The site is now Gurdwara Sis Ganj Sahib."
  },
  {
    id: "tl-1699", year: "1699", era: "guru",
    title: "The founding of the Khalsa",
    text: "On Vaisakhi at Anandpur Sahib, Guru Gobind Singh Ji founds the Khalsa and initiates the Panj Pyare.",
    more: "He gave the Khalsa the shared names Singh and Kaur and the articles of faith, and then asked the Five to initiate him in turn — Guru and Khalsa as one."
  },
  {
    id: "tl-sahibzade", year: "1704–1705", era: "guru",
    title: "The sacrifice of the Sahibzade",
    text: "In a bitter December, all four sons of Guru Gobind Singh Ji are martyred (chronology debated across sources).",
    more: "The elder Sahibzade fell in battle at Chamkaur; the younger, just children, were martyred at Sirhind, refusing to abandon their faith. Mata Gujri Ji's strength is honoured alongside them."
  },
  {
    id: "tl-1708", year: "1708", era: "guru",
    title: "Sri Guru Granth Sahib Ji — the eternal Guru",
    text: "At Nanded, Guru Gobind Singh Ji ends human Guruship and confers it eternally on Sri Guru Granth Sahib Ji.",
    more: "From that day, Sikhs look to the wisdom within its pages as their living Guru for all time."
  },
  {
    id: "tl-1710", year: "1710", era: "18c",
    title: "Banda Singh Bahadur establishes Sikh rule",
    text: "Leading the Khalsa, Baba Banda Singh Bahadur wins the Battle of Chappar Chiri and takes Sirhind.",
    more: "He struck coins in the name of the Gurus and introduced reforms granting land rights to those who tilled it."
  },
  {
    id: "tl-1716", year: "1716", era: "18c",
    title: "Martyrdom of Banda Singh Bahadur",
    text: "Captured by Mughal forces, Baba Banda Singh Bahadur is martyred, steadfast to the end.",
    more: "A period of intense persecution of Sikhs followed, met with extraordinary resilience."
  },
  {
    id: "tl-1746", year: "1746", era: "18c",
    title: "The Chhota Ghallughara (Smaller Holocaust)",
    text: "Thousands of Sikhs are killed in a massacre during a campaign of persecution.",
    more: "It is remembered as the 'Chhota Ghallughara' — the smaller of the two great massacres the Sikhs endured in the 18th century."
  },
  {
    id: "tl-1757", year: "1757", era: "18c",
    title: "Martyrdom of Baba Deep Singh Ji",
    text: "The revered scholar-warrior gives his life defending the honour of Sri Harmandir Sahib.",
    more: "His courage in defence of the holiest shrine remains one of the most cherished memories of Sikh devotion."
  },
  {
    id: "tl-1762", year: "1762", era: "18c",
    title: "The Vadda Ghallughara (Greater Holocaust)",
    text: "In a single day, tens of thousands of Sikhs — including many women and children — are killed.",
    more: "The 'Vadda Ghallughara' is among the gravest tragedies in Sikh history. Yet the Sikhs regrouped, and within decades rose to sovereignty."
  },
  {
    id: "tl-misls", year: "Late 1700s", era: "18c",
    title: "The rise of the Misls",
    text: "Sikh confederacies (misls) establish power across Punjab, paving the way for Sikh sovereignty.",
    more: "Leaders such as Jassa Singh Ahluwalia, given the title 'Sultan-ul-Qaum', helped unite the Khalsa in this era."
  },
  {
    id: "tl-1799", year: "1799", era: "empire",
    title: "Ranjit Singh captures Lahore",
    text: "The young Ranjit Singh takes Lahore, the first step toward a united Sikh state.",
    more: "Within two years he would be proclaimed Maharaja, founding the Sikh Empire."
  },
  {
    id: "tl-1801", year: "1801", era: "empire",
    title: "The Sikh Empire (Sarkar-e-Khalsa)",
    text: "Maharaja Ranjit Singh is proclaimed sovereign, founding a powerful, diverse Sikh state from Lahore.",
    more: "His rule is remembered for a strong army, religious tolerance, and patronage — including adorning Harmandir Sahib with gold and marble."
  },
  {
    id: "tl-1839", year: "1839", era: "empire",
    title: "Death of Maharaja Ranjit Singh",
    text: "The 'Lion of Punjab' passes away after four decades of Sikh sovereignty.",
    more: "His death was followed by instability, and within a decade the empire would fall to the British."
  },
  {
    id: "tl-anglosikh", year: "1845–1849", era: "empire",
    title: "The Anglo-Sikh Wars & annexation",
    text: "After two hard-fought wars, the British annex Punjab in 1849; the Koh-i-Noor is taken.",
    more: "The fall of the Sikh Empire brought Punjab under British rule and the young Maharaja Duleep Singh into exile."
  },
  {
    id: "tl-1919", year: "1919", era: "modern",
    title: "The Jallianwala Bagh massacre",
    text: "British troops fire on a peaceful gathering in Amritsar, killing hundreds — many of them Sikhs.",
    more: "The massacre at Jallianwala Bagh, beside Harmandir Sahib, became a turning point in the struggle against colonial rule."
  },
  {
    id: "tl-sgpc", year: "1920–1925", era: "modern",
    title: "The Gurdwara Reform Movement",
    text: "The peaceful Akali movement restores Gurdwaras to community control; the SGPC is formed.",
    more: "Through great sacrifice and non-violent struggle, the management of historic Gurdwaras was reformed and entrusted to the Shiromani Gurdwara Parbandhak Committee."
  },
  {
    id: "tl-1947", year: "1947", era: "modern",
    title: "The Partition of Punjab",
    text: "Partition tears Punjab in two; Sikhs suffer immense loss, displacement, and the abandonment of historic shrines.",
    more: "Millions were uprooted and countless lives lost. Many of Sikhi's holiest sites — including Nankana Sahib and Kartarpur — fell on the Pakistani side of the new border."
  },
  {
    id: "tl-1984", year: "1984", era: "modern",
    title: "Operation Blue Star & the November pogroms",
    text: "The army assault on Darbar Sahib in June, and the organised massacre of Sikhs in November, mark one of the darkest chapters in Sikh history.",
    more: "These tragedies are remembered in detail in this app's dedicated 1984 Remembrance section.",
    link: { href: "#/remembrance", label: "Open the 1984 Remembrance section →" }
  },
  {
    id: "tl-today", year: "Today", era: "modern",
    title: "A global Sikh community",
    text: "Around 25–30 million Sikhs live on every continent, carrying the Gurus' message of oneness, equality, and seva.",
    more: "From Punjab to the wider world, Sikhs continue to serve — through Langar, disaster relief, and everyday seva — while seeking truth, justice, and dignity for all."
  }
];
