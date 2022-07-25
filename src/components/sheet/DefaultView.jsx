import '../../style/sheet/Default.css';

const getModifier = (score) => {
    return (String(score % 2 === 0 ? (score - 10) / 2 : (score - 11) / 2))
};

function DefaultView(props) {
    return (
        <div className='sheet-default-view'>
            <div className="char-identity-container">
                <div className='name-container'>
                    <h1>{props.character.identity.characterName}</h1>
                </div>
                <div className='identity-container'>
                    <p>{props.character.identity.class} level {props.character.identity.level}</p>
                    <p>{props.character.identity.background}</p>
                    <p>{props.character.identity.race}</p>
                    <p>{props.character.identity.alignment}</p>
                    <p>experience points: {props.character.identity.experience}</p>
                </div>
            </div>
            <div className="char-scores-container">
                <p>strength {props.character.scores.strength} modifier {getModifier(props.character.scores.strength)}</p>
                <p>dexterity {props.character.scores.dexterity} modifier {getModifier(props.character.scores.dexterity)}</p>
                <p>constitution {props.character.scores.constitution} modifier {getModifier(props.character.scores.constitution)}</p>
                <p>intelligence {props.character.scores.intelligence} modifier {getModifier(props.character.scores.intelligence)}</p>
                <p>wisdom {props.character.scores.wisdom} modifier {getModifier(props.character.scores.wisdom)}</p>
                <p>charisma {props.character.scores.charisma} modifier {getModifier(props.character.scores.charisma)}</p>
            </div>
        </div>
    );
}

export default DefaultView;
