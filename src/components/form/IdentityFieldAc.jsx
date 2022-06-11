import {useState} from 'react';
import {useField} from 'formik';
import '../../style/IdentityField.css';
import Autosuggest from 'react-autosuggest';
// import axios from 'axios';
// import TextField from '@mui/material/TextField';

import getRaces from '../../data/races.js'
import getClasses from '../../data/classes.js'
import getBackgrounds from '../../data/backgrounds.js'
import getArmor from '../../data/armor.js'

const IdentityFieldAc = ({label, id, ...props}) => {
  const [field, meta] = useField(props);
  // const [country, setCountry] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  return (
    <div className='formik-fields'>
      {
        label !== null ?
          <label htmlFor={field.name} className='identity-label'>{label}</label> :
          null
      }
      <Autosuggest
        inputProps={{
          placeholder: `Type a ${field.name}`,
          autoComplete: 'off',
          name: field.name,
          id: id,
          value: field.value,
          className: 'identity-input',
          onChange: (_event, {newValue}) => {
            props.setFieldValue(field.name, newValue);
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
            switch (field.name) {
              case 'race':
                result = getRaces(value.toLowerCase());
                break;
              case 'background':
                result = getBackgrounds(value.toLowerCase());
                break;
              case 'armor':
                result = getArmor(value.toLowerCase());
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
          props.setFieldValue(field.name, suggestion.name);
        }}
        getSuggestionValue={suggestion => suggestion.name}
        renderSuggestion={(suggestion) => <div>{suggestion.name}</div>
        }
      />
      {
        meta.touched && meta.error ?
          <div
            className='formik-errors'>{meta.error}</div> :
          null
      }
    </div >
  );

}

export default IdentityFieldAc;
