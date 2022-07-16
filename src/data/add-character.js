import axios from 'axios'

const API_URL = "http://localhost:3000/api/v1/characters";

const addCharacter = (char) => {
	let errors = [];

	axios
		.post(API_URL, {
			player_name: char.identity.playerName,
			character_name: char.identity.characterName,
			race: char.identity.race,
			background: char.identity.background,
			character_class: char.identity.class,
			level: char.identity.level,
			alignment: char.identity.alignment,
			experience: char.identity.experience,
			url: char.identity.url,
			strength: char.scores.strength,
			dexterity: char.scores.dexterity,
			constitution: char.scores.constitution,
			intelligence: char.scores.intelligence,
			wisdom: char.scores.wisdom,
			charisma: char.scores.charisma,
			inspiration: char.scores.inspiration,
			description: JSON.stringify(char.description),
			equipment: JSON.stringify(char.equipment),
		})
		.then((response) => {
			errors.push(response.data);
		});

	return errors;
}

export default addCharacter;
