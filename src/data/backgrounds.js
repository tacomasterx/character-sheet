const backgrounds = (string) => {
  const array = [{
    traits: {},
    name: "artisan",
    id: 4,
  }, {
    traits: {},
    name: "entertainer",
    id: 2
  }, {
    traits: {},
    name: "outlander",
    id: 1
  }, {
    traits: {},
    name: "acolyte",
    id: 3
  }, {
    traits: {},
    name: "soldier",
    id: 5
  }];
  return array.filter(element => element.name.substring(-1, string.length) === string);
}

export default backgrounds;
