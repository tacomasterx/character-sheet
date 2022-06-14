const characterFind = (string) => {
	const array = [{
		abilityScores: {str: 1, dex: 1, con: 1, int: 1, wis: 1, cha: 1},
		name: "Olaf Battleborn",
		class: "fighter",
		id: 4,
	}, {
		abilityScores: {str: 1, dex: 1, con: 1, int: 1, wis: 1, cha: 1},
		name: "Chidorimon",
		class: "cleric",
		id: 3,
	}, {
		abilityScores: {str: 1, dex: 1, con: 1, int: 1, wis: 1, cha: 1},
		name: "Osaka Shizucc",
		class: "bard",
		id: 1,
	}, {
		abilityScores: {str: 1, dex: 1, con: 1, int: 1, wis: 1, cha: 1},
		name: "Inigo Montoya",
		class: "rogue",
		id: 2,
	}];
	return array.filter(element => element.name.substring(-1, string.length) === string);
}

export default characterFind;
