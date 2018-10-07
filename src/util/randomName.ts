const names = [
  'Crazy Hassan',
  'Sir Bearington',
  'Old Man Henderson',
  "Drizzt Do'urden",
  'Elminster',
  'Noh',
  'Punpun',
  'Omin Dran',
  'Binwin Bronzebottom',
  'Jim Darkmagic',
  'Viari',
  'Morgaen',
  'Aoefel',
  "Donaar Blit'zen",
  'Walnut Dankgrass',
  'Rosie Beestinger',
  "K'thriss Drow'b"
]

export default () => {
  const index = Math.floor(Math.random() * names.length)
  return names[index]
}
