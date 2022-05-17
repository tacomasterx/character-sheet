import { useField } from 'formik'
import '../style/SelectField.css'

const SelectField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className='formik-fields'>
      <label className='identity-label'></label>
      <select {...field} {...props} className='identity-select'/>
      {meta.touched && meta.error
        ? <div className='formik-errors'>{meta.error}</div>
        : null}
    </div>
  );
}

export default SelectField;
