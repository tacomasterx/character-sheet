const weaponDetails = (string) => {
  const array = [{
    "desc": [],
    "special": [],
    "index": "",
    "name": "",
    "equipment_category": {
      "index": "",
      "name": "",
      "url": ""
    },
    "weapon_category": "",
    "weapon_range": "",
    "category_range": "",
    "cost": {
      "quantity": 0,
      "unit": ""
    },
    "damage": {
      "damage_dice": "",
      "damage_type": {
        "index": "",
        "name": "",
        "url": ""
      }
    },
    "range": {
      "normal": 0
    },
    "weight": 0,
    "properties": [
      {
        "index": "",
        "name": "",
        "url": ""
      },
      {
        "index": "",
        "name": "",
        "url": ""
      }
    ],
    "url": "",
    "contents": []
  }, {
    "desc": [],
    "special": [],
    "index": "club",
    "name": "Club",
    "equipment_category": {
      "index": "weapon",
      "name": "Weapon",
      "url": "/api/equipment-categories/weapon"
    },
    "weapon_category": "Simple",
    "weapon_range": "Melee",
    "category_range": "Simple Melee",
    "cost": {
      "quantity": 1,
      "unit": "sp"
    },
    "damage": {
      "damage_dice": "1d4",
      "damage_type": {
        "index": "bludgeoning",
        "name": "Bludgeoning",
        "url": "/api/damage-types/bludgeoning"
      }
    },
    "range": {
      "normal": 5
    },
    "weight": 2,
    "properties": [
      {
        "index": "light",
        "name": "Light",
        "url": "/api/weapon-properties/light"
      },
      {
        "index": "monk",
        "name": "Monk",
        "url": "/api/weapon-properties/monk"
      }
    ],
    "url": "/api/equipment/club",
    "contents": []
  },
  {
    "desc": [],
    "special": [],
    "index": "longsword",
    "name": "Longsword",
    "equipment_category": {
      "index": "weapon",
      "name": "Weapon",
      "url": "/api/equipment-categories/weapon"
    },
    "weapon_category": "Martial",
    "weapon_range": "Melee",
    "category_range": "Martial Melee",
    "cost": {
      "quantity": 15,
      "unit": "gp"
    },
    "damage": {
      "damage_dice": "1d8",
      "damage_type": {
        "index": "slashing",
        "name": "Slashing",
        "url": "/api/damage-types/slashing"
      }
    },
    "range": {
      "normal": 5
    },
    "weight": 3,
    "properties": [
      {
        "index": "versatile",
        "name": "Versatile",
        "url": "/api/weapon-properties/versatile"
      }
    ],
    "two_handed_damage": {
      "damage_dice": "1d10",
      "damage_type": {
        "index": "slashing",
        "name": "Slashing",
        "url": "/api/damage-types/slashing"
      }
    },
    "url": "/api/equipment/longsword",
    "contents": []
  },
  {
    "desc": [],
    "special": [],
    "index": "shortbow",
    "name": "Shortbow",
    "equipment_category": {
      "index": "weapon",
      "name": "Weapon",
      "url": "/api/equipment-categories/weapon"
    },
    "weapon_category": "Simple",
    "weapon_range": "Ranged",
    "category_range": "Simple Ranged",
    "cost": {
      "quantity": 25,
      "unit": "gp"
    },
    "damage": {
      "damage_dice": "1d6",
      "damage_type": {
        "index": "piercing",
        "name": "Piercing",
        "url": "/api/damage-types/piercing"
      }
    },
    "range": {
      "normal": 80,
      "long": 320
    },
    "weight": 2,
    "properties": [
      {
        "index": "ammunition",
        "name": "Ammunition",
        "url": "/api/weapon-properties/ammunition"
      },
      {
        "index": "two-handed",
        "name": "Two-Handed",
        "url": "/api/weapon-properties/two-handed"
      }
    ],
    "url": "/api/equipment/shortbow",
    "contents": []
  }
  ];
  return array.filter(element => element.name.substring(-1, string.length) === string);
}

export default weaponDetails;
