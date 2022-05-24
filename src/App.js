import './App.css';
import CharacterIdentityForm from './components/CharacterIdentityForm.jsx'
import CharacterScoresForm from './components/CharacterScoresForm.jsx'
import CharacterDescriptionForm from './components/CharacterDescriptionForm.jsx'
import CharacterEquipmentForm from './components/CharacterEquipmentForm.jsx'

function App() {
  return (
    <div className="App">
      <div className='container-logo'>
      </div>
      <div className='container-main'>
        <CharacterIdentityForm />
        <CharacterScoresForm />
        <CharacterDescriptionForm />
        <CharacterEquipmentForm />
      </div>
    </div>
  );
}

export default App;
