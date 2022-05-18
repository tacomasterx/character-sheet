import {useField} from 'formik';
import '../style/IdentityField.css';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

// const autoComplete = (args) => {
//   console.log(args);
// }

const IdentityField = ({label, id, suggestions, ...props}) => {
  const [field, meta] = useField(props);

  return (
    <div className='formik-fields'>
      <Autocomplete
        disablePortal
        id={id}
        options={suggestions}
        getOptionLabel={option => option.name}
        onChange={(e, value) => {
          console.log(e + ' - ' + value.name);
          props.setFieldValue(
            String(id),
            value !== null ? value.name : props.initialValues.race
          );
        }}
        renderInput={(params) => <TextField {...params} label={label} />}
      />
      {meta.touched && meta.error ?
        <div className='formik-errors'>{meta.error}</div> :
        null}
    </div>
  );

}

export default IdentityField;
