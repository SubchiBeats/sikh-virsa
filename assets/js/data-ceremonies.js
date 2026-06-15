/* ============================================================================
   VIRSA — Sikh Heritage & Stories
   data-ceremonies.js  —  Sikh life ceremonies & what is expected (Maryada).

   These descriptions follow the spirit of the Sikh Rehat Maryada (the Sikh
   code of conduct). Practices can vary between families, regions, and
   traditions — always follow the guidance of your Gurdwara and Granthi, and
   the Rehat Maryada itself for authoritative detail.
   ========================================================================== */

window.VIRSA = window.VIRSA || {};

window.VIRSA.ceremoniesNote =
  "Sikh ceremonies are simple, equal, and centred on Sri Guru Granth Sahib Ji — never on caste, dowry, superstition, or ostentation. Details vary by family and tradition; the authoritative reference is the Sikh Rehat Maryada, and your local Gurdwara and Granthi.";

window.VIRSA.ceremoniesResource = {
  rehatMaryada: "https://www.sgpc.net/sikh-rehat-maryada-in-english/"
};

window.VIRSA.ceremonies = [
  {
    id: "naam-karan",
    name: "Naam Karan — Birth & Naming",
    gurmukhi: "ਨਾਮ ਕਰਨ",
    icon: "lotus",
    when: "Soon after a child is born, when the mother and child are able to attend the Gurdwara.",
    steps: [
      "The family brings the child before Sri Guru Granth Sahib Ji, with thanks for the gift of new life.",
      "After Ardas and the singing of joyful shabads, Sri Guru Granth Sahib Ji is opened at random for a Vaak (Hukam).",
      "The first letter of the first word of that hymn becomes the first letter of the child's name.",
      "A name is chosen beginning with that letter, and announced to the Sangat — with 'Singh' added for a boy and 'Kaur' for a girl.",
      "Karah Parshad is shared, and often Anand Sahib and the Mool Mantar are recited."
    ],
    expected:
      "A child is welcomed into the Sikh family with gratitude and a name carrying spiritual meaning. 'Singh' (lion) and 'Kaur' (princess/sovereign) replace caste surnames, expressing the equality of all Sikhs.",
    avoid:
      "Caste-based surnames used to imply rank, and superstitious birth rituals, are contrary to Sikh teaching.",
    forKids:
      "When a Sikh baby is born, the family thanks God and opens the holy Guru Granth Sahib Ji to a random page. The first letter on that page is the first letter of the baby's name! Boys get the name Singh and girls get the name Kaur."
  },
  {
    id: "raising-children",
    name: "Raising Children in Sikhi",
    gurmukhi: "ਬੱਚਿਆਂ ਦੀ ਪਰਵਰਿਸ਼",
    icon: "hands",
    when: "Throughout childhood — by loving example, not by force.",
    steps: [
      "Teaching the child to remember the Divine (Naam Japna) and to recite simple Gurbani, beginning with the Mool Mantar.",
      "Bringing children to the Gurdwara and the Langar, so they grow up in Sangat and in seva.",
      "Living the three pillars — Kirat Karo (honest work), Naam Japo (remembrance), Vand Chhako (sharing) — so children learn by example.",
      "Encouraging Gurmukhi and the stories of the Gurus, and the values of honesty, courage, humility, and respect for all people.",
      "Honouring Kesh (uncut hair) and the dastaar; and, when grown and ready, the personal choice to receive Amrit and join the Khalsa."
    ],
    expected:
      "Children are raised to love the Guru, serve others, treat everyone as equal, and live with honesty and Chardi Kala. Faith is nurtured with love and example — never imposed by fear.",
    avoid:
      "Teaching superiority of caste, gender, or background; or forcing practice without love and understanding.",
    forKids:
      "Sikh children learn to remember God, be honest, help others, and treat everyone as equal. Families take them to the Gurdwara, share in the free kitchen (Langar), and tell them the brave, kind stories of the Gurus."
  },
  {
    id: "anand-karaj",
    name: "Anand Karaj — Marriage",
    gurmukhi: "ਅਨੰਦ ਕਾਰਜ",
    icon: "lotus",
    when: "When two consenting adults choose to marry and walk the path of the Guru together.",
    steps: [
      "The ceremony takes place in the presence of Sri Guru Granth Sahib Ji, before the Sangat, usually in the morning.",
      "After Ardas and the consent of the couple, the four Laavan — the marriage hymns of Guru Ram Das Ji — are read and sung.",
      "As each Laav is sung, the couple walks slowly and respectfully around Sri Guru Granth Sahib Ji, vowing to journey through life together toward the Divine.",
      "The ceremony concludes with Anand Sahib, Ardas, a Hukamnama, and Karah Parshad."
    ],
    expected:
      "Marriage is an equal spiritual partnership — 'one light in two bodies' — built on love, respect, and shared devotion, not on dowry, caste, or status. Both partners join freely and as equals.",
    avoid:
      "Dowry, caste barriers, astrology, alcohol, extravagance, and any ritual contrary to Sikh principles. The Anand Karaj is meant to be simple and sacred.",
    forKids:
      "At a Sikh wedding, the couple walks gently around Sri Guru Granth Sahib Ji four times while the special wedding hymns are sung. It promises that they will support each other and walk through life together as equals."
  },
  {
    id: "antam-sanskar",
    name: "Antam Sanskar — Last Rites",
    gurmukhi: "ਅੰਤਮ ਸੰਸਕਾਰ",
    icon: "leaf",
    when: "After a person passes from this world.",
    steps: [
      "The body is bathed and dressed with respect — including the Five Ks for those who took Amrit.",
      "Kirtan Sohila and Ardas are recited, and the body is cremated, traditionally as soon as is practicable.",
      "During the days of mourning, the family reads (or has read) a complete recitation of Sri Guru Granth Sahib Ji — a Sehaj Paath or Akhand Paath.",
      "This concludes, often around the tenth day, with the Bhog ceremony: Anand Sahib, Ardas, a Hukamnama, and Karah Parshad.",
      "The ashes are respectfully immersed in flowing water; no monument or gravestone is raised."
    ],
    expected:
      "Death is accepted as the Divine Will (Bhana / Hukam). Mourning is met with remembrance (Simran) and Chardi Kala — honouring the soul's journey rather than fearing it. Grief is natural; despair and superstition are gently set aside.",
    avoid:
      "Excessive wailing, displays of grief for show, gravestones or shrines to the dead, and superstitious or caste-based rites — all are discouraged in Sikh teaching.",
    forKids:
      "When someone dies, Sikhs believe their soul returns to God. The family says special prayers, and the body is cremated. Instead of being only sad, Sikhs try to remember the person with love and to keep their spirits up (Chardi Kala), trusting in God's plan."
  }
];
