import {useState} from 'react';
import '../style/IdentityField.css';
import Autosuggest from 'react-autosuggest';
// import axios from 'axios';
// import TextField from '@mui/material/TextField';

import getRaces from '../data/races.js'
import getWeapons from '../data/weapons.js'
import getClasses from '../data/classes.js'
import getBackgrounds from '../data/backgrounds.js'

const EquipmentFieldAc = ({label, id, ...props}) => {
  const [suggestions, setSuggestions] = useState([]);

  return (
    <div className='formik-propss'>
      {
        label !== null ?
          <label htmlFor={props.name} className='identity-label'>{label}</label> :
          null
      }
      <Autosuggest
        inputProps={{
          placeholder: `Type a sddfskj...`,
          autoComplete: 'off',
          name: props.name,
          id: id,
          value: props.value,
          className: 'identity-input',
          onChange: (_event, {newValue}) => {
            props.setValue(newValue);
          }
        }}
        suggestions={suggestions}
        onSuggestionsFetchRequested={async ({value}) => {
          if (!value) {
            setSuggestions([]);
            return;
          }

          // try {
          //   const result = await axios.get()
          //   console.log(result.data)
          // } catch (error) {
          //   setSuggestions([]);
          //   console.log(error);
          // }

          setSuggestions(() => {
            let result = [];
            switch (props.name) {
              case 'race':
                result = getRaces(value.toLowerCase());
                break;
              case 'weapons':
                result = getWeapons(value.toLowerCase());
                break;
              case 'background':
                result = getBackgrounds(value.toLowerCase());
                break;
              case 'class':
                result = getClasses(value.toLowerCase());
                break;
              default:
                break;
            }
            return (result);
          })

        }}
        onSuggestionsClearRequested={() => {
          setSuggestions([]);
        }}
        onSuggestionSelected={(event, {suggestion, method}) => {
          if (method === 'enter') {
            event.preventDefault();
          }
          props.setValue(suggestion.name);
        }}
        getSuggestionValue={suggestion => suggestion.name}
        renderSuggestion={(suggestion) => <div>{suggestion.name}</div>
        }
      />
    </div >
  );

}

export default EquipmentFieldAc;
