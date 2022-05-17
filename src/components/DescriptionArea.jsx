import { useField } from 'formik';
import '../style/DescriptionArea.css'

const DescriptionArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className='formik-fields'>
      <label className='description-label'>{label}</label>
      <textarea className='description-input' {...field}></textarea>
      {meta.touched && meta.error ? 
        <div className='formik-errors'>{meta.error}</div> :
          null}
    </div>
  );

}

export default DescriptionArea;
