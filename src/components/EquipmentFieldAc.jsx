import {useState} from 'react';
import '../style/IdentityField.css';
import Autosuggest from 'react-autosuggest';
// import axios from 'axios';
// import TextField from '@mui/material/TextField';

import getWeapons from '../data/weapons.js'
import getArmor from '../data/armor.js'
import getTools from '../data/tools.js'
import getMagicItems from '../data/magic-items.js'

const EquipmentFieldAc = ({label, ...props}) => {
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
          placeholder: `Type a ${props.name}`,
          autoComplete: 'off',
          name: props.name,
          id: props.id,
          value: props.newItem,
          className: 'equipment-input',
          onChange: (_event, {newValue}) => {
            props.setNewItem(newValue);
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
              case 'weapons':
                result = getWeapons(value.toLowerCase());
                break;
              case 'armor':
                result = getArmor(value.toLowerCase());
                break;
              case 'tool':
                result = getTools(value.toLowerCase());
                break;
              case 'magicItem':
                result = getMagicItems(value.toLowerCase());
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
          props.setNewItem(suggestion.name);
        }}
        getSuggestionValue={suggestion => suggestion.name}
        renderSuggestion={(suggestion) => <div>{suggestion.name}</div>
        }
      />
    </div >
  );

}

export default EquipmentFieldAc;
