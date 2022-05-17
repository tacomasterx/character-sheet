import './App.css';
import CharacterIdentity from './components/CharacterIdentity.jsx'
import CharacterScores from './components/CharacterScores.jsx'
import CharacterDescription from './components/CharacterDescription.jsx'

function App() {
  return (
    <div className="App">
      <div className='container-logo'>
      </div>
      <div className='container-main'>
        <CharacterIdentity />
        <CharacterScores />
        <CharacterDescription />
      </div>
    </div>
  );
}

export default App;
