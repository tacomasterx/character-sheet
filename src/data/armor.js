const armour = (string) => {
	const array = [
		{
			"index": "padded-armor",
			"name": "Padded Armor",
			"url": "/api/equipment/padded-armor"
		},
		{
			"index": "leather-armor",
			"name": "Leather Armor",
			"url": "/api/equipment/leather-armor"
		},
		{
			"index": "studded-leather-armor",
			"name": "Studded Leather Armor",
			"url": "/api/equipment/studded-leather-armor"
		},
		{
			"index": "hide-armor",
			"name": "Hide Armor",
			"url": "/api/equipment/hide-armor"
		},
		{
			"index": "chain-shirt",
			"name": "Chain Shirt",
			"url": "/api/equipment/chain-shirt"
		},
		{
			"index": "scale-mail",
			"name": "Scale Mail",
			"url": "/api/equipment/scale-mail"
		},
		{
			"index": "breastplate",
			"name": "Breastplate",
			"url": "/api/equipment/breastplate"
		},
		{
			"index": "half-plate-armor",
			"name": "Half Plate Armor",
			"url": "/api/equipment/half-plate-armor"
		},
		{
			"index": "ring-mail",
			"name": "Ring Mail",
			"url": "/api/equipment/ring-mail"
		},
		{
			"index": "chain-mail",
			"name": "Chain Mail",
			"url": "/api/equipment/chain-mail"
		},
		{
			"index": "splint-armor",
			"name": "Splint Armor",
			"url": "/api/equipment/splint-armor"
		},
		{
			"index": "plate-armor",
			"name": "Plate Armor",
			"url": "/api/equipment/plate-armor"
		},
		{
			"index": "shield",
			"name": "Shield",
			"url": "/api/equipment/shield"
		},
		{
			"index": "adamantine-armor",
			"name": "Adamantine Armor",
			"url": "/api/magic-items/adamantine-armor"
		},
		{
			"index": "animated-shield",
			"name": "Animated Shield",
			"url": "/api/magic-items/animated-shield"
		},
		{
			"index": "armor",
			"name": "Armor, +1, +2, or +3",
			"url": "/api/magic-items/armor"
		},
		{
			"index": "armor-of-invulnerability",
			"name": "Armor of Invulnerability",
			"url": "/api/magic-items/armor-of-invulnerability"
		},
		{
			"index": "armor-of-resistance",
			"name": "Armor of Resistance",
			"url": "/api/magic-items/armor-of-resistance"
		},
		{
			"index": "armor-of-vulnerability",
			"name": "Armor of Vulnerability",
			"url": "/api/magic-items/armor-of-vulnerability"
		},
		{
			"index": "arrow-catching-shield",
			"name": "Arrow-Catching Shield",
			"url": "/api/magic-items/arrow-catching-shield"
		},
		{
			"index": "demon-armor",
			"name": "Demon Armor",
			"url": "/api/magic-items/demon-armor"
		},
		{
			"index": "dragon-scale-mail",
			"name": "Dragon Scale Mail",
			"url": "/api/magic-items/dragon-scale-mail"
		},
		{
			"index": "dwarven-plate",
			"name": "Dwarven Plate",
			"url": "/api/magic-items/dwarven-plate"
		},
		{
			"index": "elven-chain",
			"name": "Elven Chain",
			"url": "/api/magic-items/elven-chain"
		},
		{
			"index": "glamoured-studded-leather-armor",
			"name": "Glamoured Studded Leather Armor",
			"url": "/api/magic-items/glamoured-studded-leather-armor"
		},
		{
			"index": "mithral-armor",
			"name": "Mithral Armor",
			"url": "/api/magic-items/mithral-armor"
		},
		{
			"index": "plate-armor-of-etherealness",
			"name": "Plate Armor of Etherealness",
			"url": "/api/magic-items/plate-armor-of-etherealness"
		},
		{
			"index": "shield-of-missile-attraction",
			"name": "Shield of Missile Attraction",
			"url": "/api/magic-items/shield-of-missile-attraction"
		},
		{
			"index": "spellguard-shield",
			"name": "Spellguard Shield",
			"url": "/api/magic-items/spellguard-shield"
		},
		{
			"index": "armor-1",
			"name": "Armor, +1",
			"url": "/api/magic-items/armor-1"
		},
		{
			"index": "armor-2",
			"name": "Armor, +2",
			"url": "/api/magic-items/armor-2"
		},
		{
			"index": "armor-3",
			"name": "Armor, +3",
			"url": "/api/magic-items/armor-3"
		},
		{
			"index": "dragon-scale-mail-black",
			"name": "Black Dragon Scale Mail",
			"url": "/api/magic-items/dragon-scale-mail-black"
		},
		{
			"index": "dragon-scale-mail-blue",
			"name": "Blue Dragon Scale Mail",
			"url": "/api/magic-items/dragon-scale-mail-blue"
		},
		{
			"index": "dragon-scale-mail-brass",
			"name": "Brass Dragon Scale Mail",
			"url": "/api/magic-items/dragon-scale-mail-brass"
		},
		{
			"index": "dragon-scale-mail-bronze",
			"name": "Bronze Dragon Scale Mail",
			"url": "/api/magic-items/dragon-scale-mail-bronze"
		},
		{
			"index": "dragon-scale-mail-copper",
			"name": "Copper Dragon Scale Mail",
			"url": "/api/magic-items/dragon-scale-mail-copper"
		},
		{
			"index": "dragon-scale-mail-gold",
			"name": "Gold Dragon Scale Mail",
			"url": "/api/magic-items/dragon-scale-mail-gold"
		},
		{
			"index": "dragon-scale-mail-green",
			"name": "Green Dragon Scale Mail",
			"url": "/api/magic-items/dragon-scale-mail-green"
		},
		{
			"index": "dragon-scale-mail-red",
			"name": "Red Dragon Scale Mail",
			"url": "/api/magic-items/dragon-scale-mail-red"
		},
		{
			"index": "dragon-scale-mail-silver",
			"name": "Silver Dragon Scale Mail",
			"url": "/api/magic-items/dragon-scale-mail-silver"
		},
		{
			"index": "dragon-scale-mail-white",
			"name": "White Dragon Scale Mail",
			"url": "/api/magic-items/dragon-scale-mail-white"
		}
	];
	return array.filter(element => element.name.substring(-1, string.length).toLowerCase() === string);
}

export default armour;
