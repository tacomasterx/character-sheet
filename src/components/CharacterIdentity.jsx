import { useFormik } from 'formik';
import '../style/CharacterIdentity.css'

const validate = (values) => {
  const errors = {};

  if( !values.playerName ){
    errors.playerName = 'Required.';
  }

  if ( !values.characterName ){
    errors.characterName = 'Required.';
  }

  if ( !values.class ){
    errors.class = 'Required.';
  }

  if ( !values.background ){
    errors.background = 'Required.';
  }

  if ( !values.race ){
    errors.race = 'Required.';
  }

  if ( values.level <= 0 || !values.level ){
    errors.level = 'Please enter a level greater than 0';
  }

  if ( values.experience <= -1 || !values.experience || isNaN(values.experience) ){
    errors.experience = 'Please enter a non negative number.';
  }

  return errors;
}

function CharacterIdentity() {

  const formik = useFormik({
    initialValues: {
      playerName: '',
      characterName: '',
      race: '',
      background: '',
      class: '',
      level: 1,
      alignment: '',
      experience: 0,
    },
    validate,
    onSubmit: values => console.log(values)
  });

  return (
    <div className='container-identity-form'>
      <form onSubmit={formik.handleSubmit}>
        <div className='formik-fields'>
          <label>Player name</label>
          <input 
            type='text' { ...formik.getFieldProps('playerName') }
          />
          {formik.touched.playerName && formik.errors.playerName ? 
            <div className='formik-errors'>{formik.errors.playerName}</div> :
              null}
        </div>
        <div className='formik-fields'>
          <label>Character name</label>
          <input 
            type='text' { ...formik.getFieldProps('characterName') }
          />
          {formik.touched.characterName && formik.errors.characterName ? 
            <div className='formik-errors'>{formik.errors.characterName}</div> :
              null}
        </div>
        <div className='formik-fields'>
          <label>Race</label>
          <input 
            type='text' { ...formik.getFieldProps('race') }
          />
          {formik.touched.race && formik.errors.race ? 
            <div className='formik-errors'>{formik.errors.race}</div> :
              null}
        </div>
        <div className='formik-fields'>
          <label>Background</label>
          <input 
            type='text' { ...formik.getFieldProps('background') }
          />
          {formik.touched.background && formik.errors.background ? 
            <div className='formik-errors'>{formik.errors.background}</div> :
              null}
        </div>
        <div className='formik-fields'>
          <label>Class</label>
          <input 
            type='text' { ...formik.getFieldProps('class') }
          />
          {formik.touched.class && formik.errors.class ? 
            <div className='formik-errors'>{formik.errors.class}</div> :
              null}
        </div>
        <div className='formik-fields'>
          <label>Level</label>
          <input 
            type='number' 
            { ...formik.getFieldProps('level') }
          />
          {formik.touched.level && formik.errors.level ? 
            <div className='formik-errors'>{formik.errors.level}</div> :
              null}
        </div>
        <div className='formik-fields'>
          <label>Alignment</label>
          <input 
            type='text' { ...formik.getFieldProps('alignment') }
          />
          {formik.errors.alignment ? 
            <div className='formik-errors'>{formik.errors.alignment}</div> :
              null}
        </div>
        <div className='formik-fields'>
          <label>Experience</label>
          <input 
            type='text' { ...formik.getFieldProps('experience') }
          />
          {formik.touched.experience && formik.errors.experience ? 
            <div className='formik-errors'>{formik.errors.experience}</div> :
              null}
        </div>
        <button type='submit'>Send</button>
      </form>
    </div> 
  );
}

export default CharacterIdentity;
