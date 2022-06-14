import './App.css';
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
                            <Route path='identity' element={<CharacterIdentityForm />} />
                            <Route path='scores' element={<CharacterScoresForm />} />
                            <Route path='description' element={<CharacterDescriptionForm />} />
                            <Route path='equipment' element={<CharacterEquipmentForm />} />
                        </Route>
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </div>
            </section>
        </div>
    );
}

export default App;
