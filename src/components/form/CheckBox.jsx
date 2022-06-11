import { useField } from 'formik';

const CheckBox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });

  return (
    <div className='formik-fields'>
      <label className='inspiration-label'>
        <input type='checkbox' className='inspiration-input' {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? 
        <div className='formik-errors'>{meta.error}</div> :
          null}
    </div>
  );

}

export default CheckBox;
