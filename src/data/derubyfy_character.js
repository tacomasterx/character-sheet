function derubyfyCharacter(obj) {
	let buff = {
		identity: {
			playerName: '',
			characterName: '',
			race: '',
			background: '',
			class: '',
			level: 0,
			alignment: '',
			experience: 0,
			url: '',
		},
		scores: {
			strength: 0,
			dexterity: 0,
			constitution: 0,
			intelligence: 0,
			wisdom: 0,
			charisma: 0,
			inspiration: false,
		},
		description: {},
		equipment: {},
	};

	if (obj.player_name != null) {
		buff.identity.playerName = obj.player_name;
	}

	if (obj.character_name != null) {
		buff.identity.characterName = obj.character_name;
	}

	if (obj.race != null) {
		buff.identity.race = obj.race;
	}

	if (obj.background != null) {
		buff.identity.background = obj.background;
	}

	if (obj.character_class != null) {
		buff.identity.class = obj.character_class;
	}

	if (obj.level != null) {
		buff.identity.level = obj.level;
	}

	if (obj.alignment != null) {
		buff.identity.alignment = obj.alignment;
	}

	if (obj.experience != null) {
		buff.identity.experience = obj.experience;
	}

	if (obj.url != null) {
		buff.identity.url = obj.url;
	}

	if (obj.strength != null) {
		buff.scores.strength = obj.strength;
	}

	if (obj.dexterity != null) {
		buff.scores.dexterity = obj.dexterity;
	}

	if (obj.constitution != null) {
		buff.scores.constitution = obj.constitution;
	}

	if (obj.intelligence != null) {
		buff.scores.intelligence = obj.intelligence;
	}

	if (obj.wisdom != null) {
		buff.scores.wisdom = obj.wisdom;
	}

	if (obj.charisma != null) {
		buff.scores.charisma = obj.charisma;
	}

	if (obj.inspiration != null) {
		buff.scores.inspiration = obj.inspiration;
	}

	if (obj.description != null && typeof (obj.description === 'string')) {
		buff.description = JSON.parse(obj.description);
	}

	if (obj.equipment != null) {
		buff.equipment = JSON.parse(obj.equipment);
	}

	return buff;
}

export default derubyfyCharacter;
