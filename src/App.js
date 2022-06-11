import './App.css';
import CharacterIdentityForm from './components/form/CharacterIdentityForm.jsx'
import CharacterScoresForm from './components/form/CharacterScoresForm.jsx'
import CharacterDescriptionForm from './components/form/CharacterDescriptionForm.jsx'
import CharacterEquipmentForm from './components/form/CharacterEquipmentForm.jsx'

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
