import {useState, useEffect} from 'react'
import {useParams, useNavigate} from "react-router-dom";
import characterFind from '../data/characters.js'

const Home = () => {
    const [character, setCharacter] = useState({})
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        let mounted = true;
        characterFind(params.character).then((items) => {
            if (mounted) {
                setCharacter(items.length !== 0 ? items[0] : {});
            }
        });
        return () => (mounted = false);
    }, []);

    if (params.character === 'instructions') {
        return (
            <>
                <h1 className='character-sheet-title'>Character Sheet</h1>
                <h3>Instructions:</h3>
                <p className="character-instructions">
                    Add your character name or some unique set of characters at the end of the url.
                </p>
                <p className="character-instructions">
                    Example: <span>character-sheet.com/SomeRandomUrl</span>
                </p>
                <p className="character-instructions">
                    If you need to use spaces for surname or multiple names use <span>%20</span> instead.
                </p>
                <p className="character-instructions">
                    Example: <span>character-sheet.com/Rufus%20Stonebreaker</span>
                </p>
            </>
        );
    }

    if (character.url != null) {
        return (
            <>
                <h1 className="character-sheet-title">{character.character_name}'s home</h1>
            </>
        );
    }

    return (
        <>
            <h1 className="character-sheet-title">Character not found</h1>
            <p className="character-sheet-patagraph">Do you want to create a new character?</p>
            <button className="character-create" type="button" onClick={() => navigate(`/form/identity/${params.character}`)}>Create character</button>
        </>
    );
}

export default Home;
