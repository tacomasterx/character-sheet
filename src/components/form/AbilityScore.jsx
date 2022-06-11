import { useField } from 'formik';

const getModifier = (score) => {
  return (String( score%2 === 0 ? (score - 10)/2 : (score - 11)/2 ))
};

const AbilityScore = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className='formik-fields'>
      <label className='score-label'>{label}</label>
      <input className='score-input' {...field} />
      {meta.touched && meta.error ? 
        <div className='formik-errors'>{meta.error}</div> :
          null}
      <div className='container-scores-modifier'>
        <span className='score-modifier'>{
          meta.error ? null : getModifier(field.value)
          }</span>
      </div>
    </div>
  );

}

export default AbilityScore;
