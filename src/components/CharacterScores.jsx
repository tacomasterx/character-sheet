import { useFormik } from 'formik'
import '../style/CharacterScores.css'

const getModifier = (score) => {
  return (String( score%2 === 0 ? (score - 10)/2 : (score - 11)/2 ))
};

const validate = (values) => {
  const errors = {};

  if ( values.strength <= -1 || !values.strength || isNaN(values.strength) ){
    errors.strength = 'Please enter a non negative number.';
  }

  if ( values.dexterity <= -1 || !values.dexterity || isNaN(values.dexterity) ){
    errors.dexterity = 'Please enter a non negative number.';
  }

  if ( values.constitution <= -1 || !values.constitution || isNaN(values.constitution) ){
    errors.constitution = 'Please enter a non negative number.';
  }

  if ( values.intelligence <= -1 || !values.intelligence || isNaN(values.intelligence) ){
    errors.intelligence = 'Please enter a non negative number.';
  }

  if ( values.wisdom <= -1 || !values.wisdom || isNaN(values.wisdom) ){
    errors.wisdom = 'Please enter a non negative number.';
  }

  if ( values.charisma <= -1 || !values.charisma || isNaN(values.charisma) ){
    errors.charisma = 'Please enter a non negative number.';
  }

  return errors;
};

function CharacterScores() {

  const formik = useFormik({
    initialValues: {
      strength: 10,
      dexterity: 10,
      constitution: 10,
      intelligence: 10,
      wisdom: 10,
      charisma: 10,
      inspiration: false,
    },
    validate,
    onSubmit: values => console.log(values),
  });

  return (
    <div className='container-scores-form'>
      <form onSubmit={formik.handleSubmit}>
        <div className='formik-fields'>
          <label>Strength</label>
          <input 
            type='text' { ...formik.getFieldProps('strength') }
          />
          {formik.touched.strength && formik.errors.strength ? 
            <div className='formik-errors'>{formik.errors.strength}</div> :
              null}
            <div className='container-scores-modifier'>
              <span className='score-modifier'>{
                formik.errors.strength ? null : getModifier(formik.values.strength)
              }</span>
            </div>
        </div>
        <div className='formik-fields'>
          <label>Dexterity</label>
          <input 
            type='text' { ...formik.getFieldProps('dexterity') }
          />
          {formik.touched.dexterity && formik.errors.dexterity ? 
            <div className='formik-errors'>{formik.errors.dexterity}</div> :
              null}
            <div className='container-scores-modifier'>
              <span className='score-modifier'>{
                formik.errors.dexterity ? null : getModifier(formik.values.dexterity)
              }</span>
            </div>
        </div>
        <div className='formik-fields'>
          <label>Constitution</label>
          <input 
            type='text' { ...formik.getFieldProps('constitution') }
          />
          {formik.touched.constitution && formik.errors.constitution ? 
            <div className='formik-errors'>{formik.errors.constitution}</div> :
              null}
            <div className='container-scores-modifier'>
              <span className='score-modifier'>{
                formik.errors.constitution ? null : getModifier(formik.values.constitution)
              }</span>
            </div>
        </div>
        <div className='formik-fields'>
          <label>Intelligence</label>
          <input 
            type='text' { ...formik.getFieldProps('intelligence') }
          />
          {formik.touched.intelligence && formik.errors.intelligence ? 
            <div className='formik-errors'>{formik.errors.intelligence}</div> :
              null}
            <div className='container-scores-modifier'>
              <span className='score-modifier'>{
                formik.errors.intelligence ? null : getModifier(formik.values.intelligence)
              }</span>
            </div>
        </div>
        <div className='formik-fields'>
          <label>Wisdom</label>
          <input 
            type='text' { ...formik.getFieldProps('wisdom') }
          />
          {formik.touched.wisdom && formik.errors.wisdom ? 
            <div className='formik-errors'>{formik.errors.wisdom}</div> :
              null}
            <div className='container-scores-modifier'>
              <span className='score-modifier'>{
                formik.errors.wisdom ? null : getModifier(formik.values.wisdom)
              }</span>
            </div>
        </div>
        <div className='formik-fields'>
          <label>Charisma</label>
          <input 
            type='text' { ...formik.getFieldProps('charisma') }
          />
          {formik.touched.charisma && formik.errors.charisma ? 
            <div className='formik-errors'>{formik.errors.charisma}</div> :
              null}
            <div className='container-scores-modifier'>
              <span className='score-modifier'>{
                formik.errors.charisma ? null : getModifier(formik.values.charisma)
              }</span>
            </div>
        </div>
        <button type='submit'>Send</button>
      </form>
    </div>
  );
}

export default CharacterScores;
