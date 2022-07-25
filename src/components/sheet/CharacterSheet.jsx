import '../../style/sheet/Default.css';
import {Route, Routes, useParams, Navigate} from 'react-router-dom'
import DefaultView from './DefaultView.jsx';

function CharacterSheet(props) {
    return (
        <section>
            <div className='character-sheet'>
                <Routes>
                    <Route path='/' element={<DefaultView character={props.character} />} />
                </Routes>
            </div>
        </section>
    );
}

export default CharacterSheet;
