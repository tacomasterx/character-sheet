import {useField} from 'formik';
import '../style/IdentityField.css';
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

// const autoComplete = (args) => {
//   console.log(args);
// }

const IdentityField = ({label, id, suggestions, ...props}) => {
  const [field, meta] = useField(props);

  return (
    <div className='formik-fields'>
      <Autocomplete
        id={id}
        options={suggestions}
        getOptionLabel={option => option.name}
      />
      {meta.touched && meta.error ?
        <div className='formik-errors'>{meta.error}</div> :
        null}
    </div>
  );

}

export default IdentityField;
