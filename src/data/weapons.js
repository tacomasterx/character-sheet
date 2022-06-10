const weapons = (string) => {
  const array = [
    {
      "index": "club",
      "name": "Club",
      "url": "/api/equipment/club"
    },
    {
      "index": "dagger",
      "name": "Dagger",
      "url": "/api/equipment/dagger"
    },
    {
      "index": "greatclub",
      "name": "Greatclub",
      "url": "/api/equipment/greatclub"
    },
    {
      "index": "handaxe",
      "name": "Handaxe",
      "url": "/api/equipment/handaxe"
    },
    {
      "index": "javelin",
      "name": "Javelin",
      "url": "/api/equipment/javelin"
    },
    {
      "index": "light-hammer",
      "name": "Light hammer",
      "url": "/api/equipment/light-hammer"
    },
    {
      "index": "mace",
      "name": "Mace",
      "url": "/api/equipment/mace"
    },
    {
      "index": "quarterstaff",
      "name": "Quarterstaff",
      "url": "/api/equipment/quarterstaff"
    },
    {
      "index": "sickle",
      "name": "Sickle",
      "url": "/api/equipment/sickle"
    },
    {
      "index": "spear",
      "name": "Spear",
      "url": "/api/equipment/spear"
    },
    {
      "index": "crossbow-light",
      "name": "Crossbow, light",
      "url": "/api/equipment/crossbow-light"
    },
    {
      "index": "dart",
      "name": "Dart",
      "url": "/api/equipment/dart"
    },
    {
      "index": "shortbow",
      "name": "Shortbow",
      "url": "/api/equipment/shortbow"
    },
    {
      "index": "sling",
      "name": "Sling",
      "url": "/api/equipment/sling"
    },
    {
      "index": "battleaxe",
      "name": "Battleaxe",
      "url": "/api/equipment/battleaxe"
    },
    {
      "index": "flail",
      "name": "Flail",
      "url": "/api/equipment/flail"
    },
    {
      "index": "glaive",
      "name": "Glaive",
      "url": "/api/equipment/glaive"
    },
    {
      "index": "greataxe",
      "name": "Greataxe",
      "url": "/api/equipment/greataxe"
    },
    {
      "index": "greatsword",
      "name": "Greatsword",
      "url": "/api/equipment/greatsword"
    },
    {
      "index": "halberd",
      "name": "Halberd",
      "url": "/api/equipment/halberd"
    },
    {
      "index": "lance",
      "name": "Lance",
      "url": "/api/equipment/lance"
    },
    {
      "index": "longsword",
      "name": "Longsword",
      "url": "/api/equipment/longsword"
    },
    {
      "index": "maul",
      "name": "Maul",
      "url": "/api/equipment/maul"
    },
    {
      "index": "morningstar",
      "name": "Morningstar",
      "url": "/api/equipment/morningstar"
    },
    {
      "index": "pike",
      "name": "Pike",
      "url": "/api/equipment/pike"
    },
    {
      "index": "rapier",
      "name": "Rapier",
      "url": "/api/equipment/rapier"
    },
    {
      "index": "scimitar",
      "name": "Scimitar",
      "url": "/api/equipment/scimitar"
    },
    {
      "index": "shortsword",
      "name": "Shortsword",
      "url": "/api/equipment/shortsword"
    },
    {
      "index": "trident",
      "name": "Trident",
      "url": "/api/equipment/trident"
    },
    {
      "index": "war-pick",
      "name": "War pick",
      "url": "/api/equipment/war-pick"
    },
    {
      "index": "warhammer",
      "name": "Warhammer",
      "url": "/api/equipment/warhammer"
    },
    {
      "index": "whip",
      "name": "Whip",
      "url": "/api/equipment/whip"
    },
    {
      "index": "blowgun",
      "name": "Blowgun",
      "url": "/api/equipment/blowgun"
    },
    {
      "index": "crossbow-hand",
      "name": "Crossbow, hand",
      "url": "/api/equipment/crossbow-hand"
    },
    {
      "index": "crossbow-heavy",
      "name": "Crossbow, heavy",
      "url": "/api/equipment/crossbow-heavy"
    },
    {
      "index": "longbow",
      "name": "Longbow",
      "url": "/api/equipment/longbow"
    },
    {
      "index": "net",
      "name": "Net",
      "url": "/api/equipment/net"
    },
    {
      "index": "berserker-axe",
      "name": "Berserker Axe",
      "url": "/api/magic-items/berserker-axe"
    },
    {
      "index": "dagger-of-venom",
      "name": "Dagger of Venom",
      "url": "/api/magic-items/dagger-of-venom"
    },
    {
      "index": "dancing-sword",
      "name": "Dancing Sword",
      "url": "/api/magic-items/dancing-sword"
    },
    {
      "index": "defender",
      "name": "Defender",
      "url": "/api/magic-items/defender"
    },
    {
      "index": "dragon-slayer",
      "name": "Dragon Slayer",
      "url": "/api/magic-items/dragon-slayer"
    },
    {
      "index": "dwarven-thrower",
      "name": "Dwarven Thrower",
      "url": "/api/magic-items/dwarven-thrower"
    },
    {
      "index": "flame-tongue",
      "name": "Flame Tongue",
      "url": "/api/magic-items/flame-tongue"
    },
    {
      "index": "frost-brand",
      "name": "Frost Brand",
      "url": "/api/magic-items/frost-brand"
    },
    {
      "index": "giant-slayer",
      "name": "Giant Slayer",
      "url": "/api/magic-items/giant-slayer"
    },
    {
      "index": "hammer-of-thunderbolts",
      "name": "Hammer of Thunderbolts",
      "url": "/api/magic-items/hammer-of-thunderbolts"
    },
    {
      "index": "holy-avenger",
      "name": "Holy Avenger",
      "url": "/api/magic-items/holy-avenger"
    },
    {
      "index": "javelin-of-lightning",
      "name": "Javelin of Lightning",
      "url": "/api/magic-items/javelin-of-lightning"
    },
    {
      "index": "luck-blade",
      "name": "Luck Blade",
      "url": "/api/magic-items/luck-blade"
    },
    {
      "index": "mace-of-disruption",
      "name": "Mace of Disruption",
      "url": "/api/magic-items/mace-of-disruption"
    },
    {
      "index": "mace-of-smiting",
      "name": "Mace of Smiting",
      "url": "/api/magic-items/mace-of-smiting"
    },
    {
      "index": "mace-of-terror",
      "name": "Mace of Terror",
      "url": "/api/magic-items/mace-of-terror"
    },
    {
      "index": "nine-lives-stealer",
      "name": "Nine Lives Stealer",
      "url": "/api/magic-items/nine-lives-stealer"
    },
    {
      "index": "oathbow",
      "name": "Oathbow",
      "url": "/api/magic-items/oathbow"
    },
    {
      "index": "scimitar-of-speed",
      "name": "Scimitar of Speed",
      "url": "/api/magic-items/scimitar-of-speed"
    },
    {
      "index": "sun-blade",
      "name": "Sun Blade",
      "url": "/api/magic-items/sun-blade"
    },
    {
      "index": "sword-of-life-stealing",
      "name": "Sword of Life Stealing",
      "url": "/api/magic-items/sword-of-life-stealing"
    },
    {
      "index": "sword-of-sharpness",
      "name": "Sword of Sharpness",
      "url": "/api/magic-items/sword-of-sharpness"
    },
    {
      "index": "sword-of-wounding",
      "name": "Sword of Wounding",
      "url": "/api/magic-items/sword-of-wounding"
    },
    {
      "index": "trident-of-fish-command",
      "name": "Trident of Fish Command",
      "url": "/api/magic-items/trident-of-fish-command"
    },
    {
      "index": "vicious-weapon",
      "name": "Vicious Weapon",
      "url": "/api/magic-items/vicious-weapon"
    },
    {
      "index": "vorpal-sword",
      "name": "Vorpal Sword",
      "url": "/api/magic-items/vorpal-sword"
    }
  ];
  return array.filter(element => element.name.substring(-1, string.length).toLowerCase() === string);
}

export default weapons;
