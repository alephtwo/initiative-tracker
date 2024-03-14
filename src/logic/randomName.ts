const names = [
  "Crazy Hassan",
  "Sir Bearington",
  "Old Man Henderson",
  "Yrag",
  "Bigby",
  "Rigby",
  "Zigby",
  "Felnorith",
  "Vram",
  "Vin",
  "Noh",
  "Punpun",
  "Omin Dran",
  "Binwin Bronzebottom",
  "Jim Darkmagic",
  "Viari",
  "Morgaen",
  "Aoefel",
  "Donaar Blit'zen",
  "Walnut Dankgrass",
  "Rosie Beestinger",
  "K'thriss Drow'b",
  "Vax'ildan",
  "Vex'ahlia",
  "Scanlan Shorthalt",
  "Taryon Darrington",
  "Keyleth",
  "Grog Strongjaw",
  "Pike Trickfoot",
  "Percival de Rolo",
  "Beauregard",
  "Caduceus Clay",
  "Caleb Widogast",
  "Fjord Stone",
  "Frumpkin",
  "Jester Lavorre",
  "Mollymauk Tealeaf",
  "Nott",
  "Yasha Nydoorin",
  "Shakäste",
  "Victoro Cassalanter",
  "Ammalia Cassalanter",
  "Vajra Safahr",
  "Renaer Neverember",
  "Laeral Silverhand",
  "Mordenkainen",
  "Qilué Veladorn",
  "Alustriel Silverhand",
  "The Simbul",
  "Elminster",
  "Harkle Harpell",
  "Storm Silverhand",
  "Syluné Silverhand",
  "Dove Falconhand",
  "Florin Falconhand",
  "Illistyl Elventree",
  "Jhessail Silventree",
  "Merith Strongbow",
  "Lanseril Snowmantle",
  "Artus Cimber",
  "Volothamp Geddarm",
  "Minsc and Boo",
  "Krydle",
  "Delina",
  "Vartan Hai Sylvar",
  "Priam Agrivar",
  "Ishi Barasume",
  "Minder",
  "Foxilon Cardluck",
  "Shandie",
  "Obaya Uday",
  "Manshoon",
  "Yoshimo",
  "The Nameless One",
  "Valygar Corthala",
  "Abdel Adrian",
  "Hexxat",
  "Pikel Bouldershoulder",
  "Ivan Bouldershoulder",
  "Cadderly Bonaduce",
  "Hrolf",
  "Drizzt Do’Urden",
  "Guenhwyvar",
  "Ruqiah",
  "Reginald Roundshield",
  "Krebbyg Masq’il’yr",
  "Spider Parrafin",
  "Arkhan the Cruel",
  "Tyril Tallguy",
  "Dagny Halvor",
  "Jamilah",
  "Hitch",
  "Dragonbait",
  "Brawlwin Chainminer",
  "Durnan",
  "Skip Brickard",
  "Evelyn Marthain",
  "Alias",
  "Akabar Bel Akash",
  "Olive Rustkettle",
  "Mirt",
  "The Black Viper",
  "Artemis Entreri",
  "Joppa",
  "Fel’rekt Lafeen",
  "Soluun Xibrindas",
  "Jarlaxle Baenre",
  "Danilo Thann",
  "Paultin Seppa",
  "Calliope",
  "Ziraj the Hunter",
  "Skeemo Weirdbottle",
  "Davil Starsong",
  "Tashlyn Yafeera",
  "Istrid Horn",
  "Nihiloor",
  "Noska Ur’gray",
  "Nar’l Xibrindas",
  "Ahmaergo",
  "Thorvin Twinbeard",
  "Ott Steeltoes",
  "Xanathar",
  "Matthew Mercer",
];

export default () => {
  const index = Math.floor(Math.random() * names.length);
  return names[index];
};
