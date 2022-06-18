import {useParams} from "react-router-dom";
import characterFind from '../data/characters.js';

const Home = () => {
    const params = useParams();
    if (params.character === 'instructions') {
        return (
            <>
                <h1>Character Sheet</h1>
                <h3>Instructions:</h3>
                <p className="character-instructions">
                    Add your character name at the end of the url.
                </p>
                <p className="character-instructions">
                    Example: <span>character-sheet.com/Orcbolg</span>
                </p>
                <p className="character-instructions">
                    If you need to use spaces for surname or multiple names use <span>%20</span> instead
                </p>
                <p className="character-instructions">
                    Example: <span>character-sheet.com/Rufus%20Stonebreaker</span>
                </p>
            </>
        );
    }
    if (characterFind(params.character).length !== 0) {
        console.log(characterFind(params.character))
        return (
            <>
                <h1>{params.character}'s home</h1>
            </>
        );
    }

    return (
        <>
            <h1>Character not found</h1>
        </>
    );
}

export default Home;
