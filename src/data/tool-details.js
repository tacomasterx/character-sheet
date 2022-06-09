const toolDetails = (string) => {
  const array = [
    {
      "special": [],
      "index": "",
      "name": "",
      "equipment_category": {
        "index": "",
        "name": "",
        "url": ""
      },
      "tool_category": "",
      "cost": {
        "quantity": 0,
        "unit": ""
      },
      "weight": 0,
      "desc": [
        ""
      ],
      "url": "",
      "contents": [],
      "properties": []
    }, {
      "special": [],
      "index": "alchemists-supplies",
      "name": "Alchemist's Supplies",
      "equipment_category": {
        "index": "tools",
        "name": "Tools",
        "url": "/api/equipment-categories/tools"
      },
      "tool_category": "Artisan's Tools",
      "cost": {
        "quantity": 50,
        "unit": "gp"
      },
      "weight": 8,
      "desc": [
        "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency."
      ],
      "url": "/api/equipment/alchemists-supplies",
      "contents": [],
      "properties": []
    }, {
      "special": [],
      "index": "brewers-supplies",
      "name": "Brewer's Supplies",
      "equipment_category": {
        "index": "tools",
        "name": "Tools",
        "url": "/api/equipment-categories/tools"
      },
      "tool_category": "Artisan's Tools",
      "cost": {
        "quantity": 20,
        "unit": "gp"
      },
      "weight": 9,
      "desc": [
        "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency."
      ],
      "url": "/api/equipment/brewers-supplies",
      "contents": [],
      "properties": []
    }, {
      "special": [],
      "index": "calligraphers-supplies",
      "name": "Calligrapher's Supplies",
      "equipment_category": {
        "index": "tools",
        "name": "Tools",
        "url": "/api/equipment-categories/tools"
      },
      "tool_category": "Artisan's Tools",
      "cost": {
        "quantity": 10,
        "unit": "gp"
      },
      "weight": 5,
      "desc": [
        "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency."
      ],
      "url": "/api/equipment/calligraphers-supplies",
      "contents": [],
      "properties": []
    },
  ];
  return array.filter(element => element.name.substring(-1, string.length).toLowerCase() === string);
}

export default toolDetails;

