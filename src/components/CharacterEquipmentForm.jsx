import {Formik, Form} from 'formik';
import '../style/CharacterEquipment.css'
import IdentityFieldAc from './IdentityFieldAc.jsx';
import EquipmentField from './EquipmentField.jsx';

const validate = (values) => {
  const errors = {};

  if (!values.class) {
    errors.class = 'Required.';
  }

  if (!values.background) {
    errors.background = 'Required.';
  }

  if (!values.race) {
    errors.race = 'Required.';
  }

  return errors;
}

function CharacterEquipmentForm() {

  return (
    <Formik initialValues={{
      weapons: '',
      armor: '',
      shield: '',
      tools: '',
    }}
      validate={validate}
      onSubmit={values => console.log(values)}
    >
      {({setFieldValue}) => (
        <Form className='identity-form'>
          <EquipmentField name='weapons' id='weapons' title='Weapons' setFieldValue={setFieldValue} />
          <IdentityFieldAc name='armor' label='Armor' id='armor' setFieldValue={setFieldValue} />
          <IdentityFieldAc label='Shield' name='shield' id='shield' setFieldValue={setFieldValue} />
          <IdentityFieldAc label='Tools' name='tools' id='tools' setFieldValue={setFieldValue} />
          <button type='submit'>Send</button>
        </Form>
      )}
    </Formik>
  );
}

export default CharacterEquipmentForm;
