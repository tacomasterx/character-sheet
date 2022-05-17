import {Formik, Form} from 'formik';
import '../style/CharacterIdentity.css'
import IdentityField from './IdentityField.jsx'
// import IdentityFieldAc from './IdentityFieldAc.jsx'
import SelectField from './SelectField.jsx'

// import {races} from '../data/races.js'

const validate = (values) => {
  const errors = {};

  if (!values.playerName) {
    errors.playerName = 'Required.';
  }

  if (!values.characterName) {
    errors.characterName = 'Required.';
  }

  if (!values.class) {
    errors.class = 'Required.';
  }

  if (!values.background) {
    errors.background = 'Required.';
  }

  if (!values.race) {
    errors.race = 'Required.';
  }

  if (values.level <= 0 || !values.level || isNaN(values.level)) {
    errors.level = 'Please enter a level greater than 0';
  }

  if (!values.experience || isNaN(values.experience)) {
    errors.experience = 'Please enter a number.';
  }

  return errors;
}

function CharacterIdentity() {

  const races = ['elf', 'human', 'dwarf', 'halfling'];
  const backgrounds = ['artisan', 'entertainer', 'outlander', 'soldier'];
  const classes = ['bard', 'cleric', 'fighter', 'wizard'];
  const alignments = ['lawful good', 'lawful neutral', 'lawful evil',
    'neutral good', 'neutral', 'neutral evil',
    'chaotic good', 'chaotic neutral', 'chaotic evil'
  ];

  return (
    <Formik initialValues={{
      playerName: '',
      characterName: '',
      race: '',
      background: '',
      class: '',
      level: 1,
      alignment: '',
      experience: 1,
    }}
      validate={validate}
      onSubmit={values => console.log(values)}
    >
      <Form className='identity-form'>
        <IdentityField name='playerName' label='Player Name' />
        <IdentityField name='characterName' label='Character Name' />
        <IdentityField name='race' label='Race' id='race' />
        <SelectField label='Character race' name='race'>
          <option value=''>Select a race</option>
          {races.map((arace) => <option value={arace} key={arace}>{arace}</option>)}
        </SelectField>
        <SelectField label='Character background' name='background'>
          <option value=''>Select a background</option>
          {backgrounds.map((bg) => <option value={bg} key={bg}>{bg}</option>)}
        </SelectField>
        <SelectField label='Character class' name='class'>
          <option value=''>Select a class</option>
          {classes.map((cclass) => <option value={cclass} key={cclass}>{cclass}</option>)}
        </SelectField>
        <IdentityField name='level' label='Level' />
        <SelectField label='Character alignment' name='alignment'>
          <option value=''>Select an alignment</option>
          {alignments.map((alignm) => <option value={alignm} key={alignm}>{alignm}</option>)}
        </SelectField>
        <IdentityField name='experience' label='Experience points' />
        <button type='submit'>Send</button>
      </Form>
    </Formik>
  );
}

export default CharacterIdentity;
