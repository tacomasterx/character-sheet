import './App.css';
import {useState} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import Form from './components/form/Form.jsx';
import NotFound from './components/NotFound.jsx'
import Nav from './components/Nav.jsx'
import Home from './components/Home.jsx'
import CharacterIdentityForm from './components/form/CharacterIdentityForm.jsx';
import CharacterScoresForm from './components/form/CharacterScoresForm.jsx';
import CharacterDescriptionForm from './components/form/CharacterDescriptionForm.jsx';
import CharacterEquipmentForm from './components/form/CharacterEquipmentForm.jsx';

function App() {
    const [newChar, setNewChar] = useState(
        {
            identity:
            {
                playerName: '',
                characterName: ``,
                race: '',
                background: '',
                class: '',
                level: 1,
                alignment: '',
                experience: 1,
                url: '',
            },
            scores:
            {
                strength: 10,
                dexterity: 10,
                constitution: 10,
                intelligence: 10,
                wisdom: 10,
                charisma: 10,
                inspiration: false,

            },
            description: {
                age: '',
                eyes: '',
                height: '',
                weight: '',
                skin: '',
                hair: '',
                personalityTraits: '',
                ideals: '',
                bonds: '',
                flaws: '',
                appearance: '',
                backstory: '',
                alliesAndOrganizations: '',
                aditionalFeaturesAndTraits: '',
            },
            equipment: {
                weapons: [],
                armor: '',
                shield: '',
                tools: [],
                magicItems: [],
                treasure: [],
            }
        }
    );

    return (
        <div className="App">
            <div className='container-logo'>
            </div>
            <div className='container-nav'>
                <Nav></Nav>
            </div>
            <section>
                <div className="container-main">
                    <Routes>
                        <Route path='/' element={<Navigate to='/instructions' />} />
                        <Route path='/:character' element={<Home />} />
                        <Route path='/form/*' element={<Form />}>
                            <Route path='identity' element={<Navigate to='/instructions' />} />
                            <Route path='identity/:character' element={<CharacterIdentityForm newChar={newChar} setNewChar={setNewChar} />} />
                            <Route path='scores' element={<Navigate to='/instructions' />} />
                            <Route path='scores/:character' element={<CharacterScoresForm newChar={newChar} setNewChar={setNewChar} />} />
                            <Route path='description' element={<Navigate to='/instructions' />} />
                            <Route path='description/:character' element={<CharacterDescriptionForm newChar={newChar} setNewChar={setNewChar} />} />
                            <Route path='equipment' element={<Navigate to='/instructions' />} />
                            <Route path='equipment/:character' element={<CharacterEquipmentForm newChar={newChar} setNewChar={setNewChar} />} />
                        </Route>
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </div>
            </section>
        </div>
    );
}

export default App;
