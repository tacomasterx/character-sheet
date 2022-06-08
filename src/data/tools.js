const tools = (string) => {
  const array = [
    {
      "index": "alchemists-supplies",
      "name": "Alchemist's Supplies",
      "url": "/api/equipment/alchemists-supplies"
    },
    {
      "index": "brewers-supplies",
      "name": "Brewer's Supplies",
      "url": "/api/equipment/brewers-supplies"
    },
    {
      "index": "calligraphers-supplies",
      "name": "Calligrapher's Supplies",
      "url": "/api/equipment/calligraphers-supplies"
    },
    {
      "index": "carpenters-tools",
      "name": "Carpenter's Tools",
      "url": "/api/equipment/carpenters-tools"
    },
    {
      "index": "cartographers-tools",
      "name": "Cartographer's Tools",
      "url": "/api/equipment/cartographers-tools"
    },
    {
      "index": "cobblers-tools",
      "name": "Cobbler's Tools",
      "url": "/api/equipment/cobblers-tools"
    },
    {
      "index": "cooks-utensils",
      "name": "Cook's utensils",
      "url": "/api/equipment/cooks-utensils"
    },
    {
      "index": "glassblowers-tools",
      "name": "Glassblower's Tools",
      "url": "/api/equipment/glassblowers-tools"
    },
    {
      "index": "jewelers-tools",
      "name": "Jeweler's Tools",
      "url": "/api/equipment/jewelers-tools"
    },
    {
      "index": "leatherworkers-tools",
      "name": "Leatherworker's Tools",
      "url": "/api/equipment/leatherworkers-tools"
    },
    {
      "index": "masons-tools",
      "name": "Mason's Tools",
      "url": "/api/equipment/masons-tools"
    },
    {
      "index": "painters-supplies",
      "name": "Painter's Supplies",
      "url": "/api/equipment/painters-supplies"
    },
    {
      "index": "potters-tools",
      "name": "Potter's Tools",
      "url": "/api/equipment/potters-tools"
    },
    {
      "index": "smiths-tools",
      "name": "Smith's Tools",
      "url": "/api/equipment/smiths-tools"
    },
    {
      "index": "tinkers-tools",
      "name": "Tinker's Tools",
      "url": "/api/equipment/tinkers-tools"
    },
    {
      "index": "weavers-tools",
      "name": "Weaver's Tools",
      "url": "/api/equipment/weavers-tools"
    },
    {
      "index": "woodcarvers-tools",
      "name": "Woodcarver's Tools",
      "url": "/api/equipment/woodcarvers-tools"
    },
    {
      "index": "dice-set",
      "name": "Dice Set",
      "url": "/api/equipment/dice-set"
    },
    {
      "index": "playing-card-set",
      "name": "Playing Card Set",
      "url": "/api/equipment/playing-card-set"
    },
    {
      "index": "bagpipes",
      "name": "Bagpipes",
      "url": "/api/equipment/bagpipes"
    },
    {
      "index": "drum",
      "name": "Drum",
      "url": "/api/equipment/drum"
    },
    {
      "index": "dulcimer",
      "name": "Dulcimer",
      "url": "/api/equipment/dulcimer"
    },
    {
      "index": "flute",
      "name": "Flute",
      "url": "/api/equipment/flute"
    },
    {
      "index": "lute",
      "name": "Lute",
      "url": "/api/equipment/lute"
    },
    {
      "index": "lyre",
      "name": "Lyre",
      "url": "/api/equipment/lyre"
    },
    {
      "index": "horn",
      "name": "Horn",
      "url": "/api/equipment/horn"
    },
    {
      "index": "pan-flute",
      "name": "Pan flute",
      "url": "/api/equipment/pan-flute"
    },
    {
      "index": "shawm",
      "name": "Shawm",
      "url": "/api/equipment/shawm"
    },
    {
      "index": "viol",
      "name": "Viol",
      "url": "/api/equipment/viol"
    },
    {
      "index": "navigators-tools",
      "name": "Navigator's Tools",
      "url": "/api/equipment/navigators-tools"
    },
    {
      "index": "thieves-tools",
      "name": "Thieves' Tools",
      "url": "/api/equipment/thieves-tools"
    }
  ];
  return array.filter(element => element.name.substring(-1, string.length).toLowerCase() === string);
}

export default tools;
