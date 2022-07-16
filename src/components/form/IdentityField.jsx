import {useField} from 'formik';
import '../../style/IdentityField.css'

const IdentityField = ({label, suggestions, ...props}) => {
  const [field, meta] = useField(props);
  return (
    <div className='formik-fields'>
      <label className='identity-label'>{label}</label>
      <input className='identity-input' {...field} />
      {meta.touched && meta.error ?
        <div className='formik-errors'>{meta.error}</div> :
        null}
    </div>
  );

}

export default IdentityField;
