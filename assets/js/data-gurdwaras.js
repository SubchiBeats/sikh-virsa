/* ============================================================================
   VIRSA — Sikh Heritage & Stories
   data-gurdwaras.js  —  Major historical Gurdwaras, for the map & list.

   NOTE ON COORDINATES
   --------------------
   The 'coords' [latitude, longitude] are approximate — good enough to place a
   marker on the map. For the precise location and directions, each entry has a
   verified 'mapsQuery' that opens the place by name in your map app. The five
   Takhts (the highest seats of Sikh authority) are marked with takht:true.
   ========================================================================== */

window.VIRSA = window.VIRSA || {};

window.VIRSA.gurdwaras = [
  {
    id: "harmandir-sahib",
    name: "Sri Harmandir Sahib (Sri Darbar Sahib)",
    place: "Amritsar, Punjab, India",
    coords: [31.6200, 74.8765],
    takht: false,
    significance:
      "The most revered Gurdwara in Sikhi — also known as the Golden Temple. Its foundation and completion are linked to Guru Arjan Dev Ji, who installed the Adi Granth here in 1604. Its four doors welcome people from every direction and background.",
    mapsQuery: "Golden Temple Amritsar"
  },
  {
    id: "akal-takht",
    name: "Sri Akal Takht Sahib",
    place: "Amritsar, Punjab, India",
    coords: [31.6206, 74.8763],
    takht: true,
    significance:
      "The 'Throne of the Timeless', built by Guru Hargobind Ji facing Harmandir Sahib — the highest seat of temporal authority for the Sikhs, embodying the principle of Miri-Piri.",
    mapsQuery: "Akal Takht Amritsar"
  },
  {
    id: "keshgarh-sahib",
    name: "Takht Sri Keshgarh Sahib",
    place: "Anandpur Sahib, Punjab, India",
    coords: [31.2369, 76.5026],
    takht: true,
    significance:
      "The birthplace of the Khalsa, where Guru Gobind Singh Ji initiated the Panj Pyare on Vaisakhi 1699. One of the five Takhts.",
    mapsQuery: "Takht Sri Keshgarh Sahib Anandpur Sahib"
  },
  {
    id: "patna-sahib",
    name: "Takht Sri Patna Sahib (Sri Harmandir Ji)",
    place: "Patna, Bihar, India",
    coords: [25.5950, 85.2300],
    takht: true,
    significance:
      "The birthplace of Guru Gobind Singh Ji (1666). One of the five Takhts.",
    mapsQuery: "Takht Sri Patna Sahib"
  },
  {
    id: "hazur-sahib",
    name: "Takht Sri Hazur Sahib (Sachkhand)",
    place: "Nanded, Maharashtra, India",
    coords: [19.1540, 77.3200],
    takht: true,
    significance:
      "Where Guru Gobind Singh Ji conferred the eternal Guruship upon Sri Guru Granth Sahib Ji and departed this world in 1708. One of the five Takhts.",
    mapsQuery: "Takht Sri Hazur Sahib Nanded"
  },
  {
    id: "damdama-sahib",
    name: "Takht Sri Damdama Sahib",
    place: "Talwandi Sabo, Punjab, India",
    coords: [29.9780, 75.0840],
    takht: true,
    significance:
      "Where Guru Gobind Singh Ji paused ('damdama' — a place of rest) and where the definitive recension of Sri Guru Granth Sahib Ji is associated. A seat of Sikh learning and one of the five Takhts.",
    mapsQuery: "Takht Sri Damdama Sahib Talwandi Sabo"
  },
  {
    id: "nankana-sahib",
    name: "Gurdwara Janam Asthan, Nankana Sahib",
    place: "Nankana Sahib, Pakistan",
    coords: [31.4490, 73.7060],
    takht: false,
    significance:
      "The birthplace of Guru Nanak Dev Ji (1469), one of the holiest sites in Sikhi.",
    mapsQuery: "Gurdwara Janam Asthan Nankana Sahib"
  },
  {
    id: "kartarpur-sahib",
    name: "Gurdwara Darbar Sahib, Kartarpur",
    place: "Kartarpur, Narowal, Pakistan",
    coords: [32.0560, 74.9560],
    takht: false,
    significance:
      "Where Guru Nanak Dev Ji settled and spent the final years of his life, establishing a community of honest work, worship, and sharing. Reached via the Kartarpur Corridor.",
    mapsQuery: "Gurdwara Darbar Sahib Kartarpur"
  },
  {
    id: "ber-sahib",
    name: "Gurdwara Ber Sahib",
    place: "Sultanpur Lodhi, Punjab, India",
    coords: [31.2150, 75.1980],
    takht: false,
    significance:
      "Associated with Guru Nanak Dev Ji's time at Sultanpur and his profound experience by the river Bein, after which he taught 'na koi Hindu, na koi Musalman'.",
    mapsQuery: "Gurdwara Ber Sahib Sultanpur Lodhi"
  },
  {
    id: "goindwal-sahib",
    name: "Gurdwara Sri Goindwal Sahib (Baoli Sahib)",
    place: "Goindwal, Punjab, India",
    coords: [31.3630, 75.1330],
    takht: false,
    significance:
      "The centre established by Guru Amar Das Ji, home to the Baoli Sahib (sacred stepwell) and an early hub of the growing Sikh community.",
    mapsQuery: "Gurdwara Goindwal Sahib Baoli"
  },
  {
    id: "khadur-sahib",
    name: "Gurdwara Sri Khadur Sahib",
    place: "Khadur Sahib, Punjab, India",
    coords: [31.4300, 75.0700],
    takht: false,
    significance:
      "Associated with Guru Angad Dev Ji, who advanced the Gurmukhi script and the institution of Langar here.",
    mapsQuery: "Gurdwara Khadur Sahib"
  },
  {
    id: "sis-ganj-sahib",
    name: "Gurdwara Sis Ganj Sahib",
    place: "Chandni Chowk, Delhi, India",
    coords: [28.6562, 77.2300],
    takht: false,
    significance:
      "The site of the martyrdom of Guru Tegh Bahadur Ji in 1675, who gave his life defending freedom of conscience.",
    mapsQuery: "Gurdwara Sis Ganj Sahib Chandni Chowk Delhi"
  },
  {
    id: "bangla-sahib",
    name: "Gurdwara Bangla Sahib",
    place: "New Delhi, India",
    coords: [28.6260, 77.2090],
    takht: false,
    significance:
      "Associated with Guru Har Krishan Ji and his care for the sick during an epidemic in Delhi. Its sarovar water is revered.",
    mapsQuery: "Gurdwara Bangla Sahib New Delhi"
  },
  {
    id: "fatehgarh-sahib",
    name: "Gurdwara Sri Fatehgarh Sahib",
    place: "Sirhind, Punjab, India",
    coords: [30.6450, 76.3910],
    takht: false,
    significance:
      "The place of martyrdom of the younger Sahibzade — Baba Zorawar Singh Ji and Baba Fateh Singh Ji — during the winter events dated 1704 or 1705 by different chronologies.",
    mapsQuery: "Gurdwara Fatehgarh Sahib Sirhind"
  },
  {
    id: "chamkaur-sahib",
    name: "Gurdwara Sri Chamkaur Sahib (Katalgarh)",
    place: "Chamkaur Sahib, Punjab, India",
    coords: [30.8980, 76.4200],
    takht: false,
    significance:
      "The site of the Battle of Chamkaur, where the elder Sahibzade — Baba Ajit Singh Ji and Baba Jujhar Singh Ji — fell; chronologies date these events to 1704 or 1705.",
    mapsQuery: "Gurdwara Chamkaur Sahib"
  },
  {
    id: "muktsar-sahib",
    name: "Gurdwara Sri Darbar Sahib, Muktsar",
    place: "Sri Muktsar Sahib, Punjab, India",
    coords: [30.4760, 74.5160],
    takht: false,
    significance:
      "Linked to the Battle of Muktsar, the Forty Liberated Ones (Chali Mukte), and the courage of Mai Bhago Ji. Chronologies date the battle to 1705 or 1706.",
    mapsQuery: "Gurdwara Darbar Sahib Sri Muktsar Sahib"
  },
  {
    id: "paonta-sahib",
    name: "Gurdwara Sri Paonta Sahib",
    place: "Paonta Sahib, Himachal Pradesh, India",
    coords: [30.4380, 77.6230],
    takht: false,
    significance:
      "Founded by Guru Gobind Singh Ji on the banks of the Yamuna, where he spent several years and composed much of his writing.",
    mapsQuery: "Gurdwara Paonta Sahib"
  },
  {
    id: "hemkund-sahib",
    name: "Gurdwara Sri Hemkund Sahib",
    place: "Uttarakhand, India",
    coords: [30.7050, 79.6090],
    takht: false,
    significance:
      "A high-altitude Gurdwara beside a glacial lake, associated by tradition with the meditation of Guru Gobind Singh Ji. One of the most remote and striking Sikh pilgrimage sites.",
    mapsQuery: "Gurdwara Hemkund Sahib"
  }
];
