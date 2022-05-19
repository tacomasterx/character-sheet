const classes = (string) => {
  const array = [{
    traits: {},
    name: "bard",
    id: 4,
  }, {
    traits: {},
    name: "cleric",
    id: 2
  }, {
    traits: {},
    name: "fighter",
    id: 1
  }, {
    traits: {},
    name: "wizard",
    id: 3
  }, {
    traits: {},
    name: "rogue",
    id: 5
  }];
  return array.filter(element => element.name.substring(-1, string.length) === string);
}

export default classes;
