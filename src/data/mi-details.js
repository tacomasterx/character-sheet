const magicItemsDetails = (string) => {
  const array = [
    {
      "index": "",
      "name": "",
      "equipment_category": {
        "index": "",
        "name": "",
        "url": ""
      },
      "rarity": {
        "name": ""
      },
      "variants": [],
      "variant": false,
      "desc": [
        "",
        ""
      ],
      "url": ""
    }, {
      "index": "amulet-of-health",
      "name": "Amulet of Health",
      "equipment_category": {
        "index": "wondrous-items",
        "name": "Wondrous Items",
        "url": "/api/equipment-categories/wondrous-items"
      },
      "rarity": {
        "name": "Rare"
      },
      "variants": [],
      "variant": false,
      "desc": [
        "Wondrous item, rare (requires attunement)",
        "Your Constitution score is 19 while you wear this amulet. It has no effect on you if your Constitution is already 19 or higher"
      ],
      "url": "/api/magic-items/amulet-of-health"
    },
  ];
  return array.filter(element => element.name.substring(-1, string.length).toLowerCase() === string);
}

export default magicItemsDetails;
