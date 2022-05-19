import {useState} from 'react';
import {useField} from 'formik';
import '../style/IdentityField.css';
import Autosuggest from 'react-autosuggest';
// import axios from 'axios';
// import TextField from '@mui/material/TextField';

import getRaces from '../data/races.js'
import getClasses from '../data/classes.js'
import getBackgrounds from '../data/backgrounds.js'

const IdentityFieldAc = ({label, id, ...props}) => {
  const [field, meta] = useField(props);
  // const [country, setCountry] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  return (
    <div className='formik-fields'>
      <label htmlFor={field.name} className='identity-label'>{label}</label>
      <Autosuggest
        inputProps={{
          placeholder: `Type a sddfskj...`,
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
                result = getRaces(value);
                break;
              case 'background':
                result = getBackgrounds(value);
                break;
              case 'class':
                result = getClasses(value);
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
