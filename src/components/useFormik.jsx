import '../style/CharacterEquipment.css'
import {Formik, Form} from 'formik';
import IdentityFieldAc from './IdentityFieldAc.jsx';
import EquipmentField from './EquipmentField.jsx';

const validate = (values) => {
  const errors = {};

  if (!values.armor) {
    errors.armor = 'Required.';
  }

  // if (!values.shield || isNaN(values.shield)) {
  //   errors.shield = 'Please enter a number.';
  // }

  return errors;
}

function CharacterEquipmentForm() {

  return (
    <Formik initialValues={{
      // weapons: [],
      armor: '',
      shield: '',
      magicItems: '',
      tools: '',
      treasure: '',
    }}
      validate={validate}
      onSubmit={values => console.log(values)}
    >
      {({setFieldValue}) => (
        <Form className='equipment-form'>
          {/* <EquipmentField name='weapons' label='Weapons' setFieldValue={setFieldValue} /> */}
          <IdentityFieldAc name='armor' label='Armor' setFieldValue={setFieldValue} />
          <IdentityFieldAc name='Shield' label='shield' id='race' setFieldValue={setFieldValue} />
          <IdentityFieldAc label='Magic Items' name='magicItems' setFieldValue={setFieldValue} />
          <IdentityFieldAc label='Tools' name='tools' setFieldValue={setFieldValue} />
          <IdentityFieldAc name='treasure' label='Treasure' setFieldValue={setFieldValue} />
          <button type='submit'>Send</button>
        </Form>
      )}
    </Formik>
  );
}

export default CharacterEquipmentForm;
