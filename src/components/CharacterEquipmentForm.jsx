import {Formik, Form, FieldArray, Field} from 'formik';
import '../style/CharacterEquipment.css'
import IdentityFieldAc from './IdentityFieldAc.jsx';
import EquipmentField from './EquipmentField.jsx';
// import {AiOutlineCloseCircle} from 'react-icons/ai'

import weaponDetails from '../data/weapon-details.js';

const validate = (values) => {
  const errors = {};

  // if (!values.class) {
  //   errors.class = 'Required.';
  // }

  // if (!values.background) {
  //   errors.background = 'Required.';
  // }

  // if (!values.race) {
  //   errors.race = 'Required.';
  // }

  return errors;
}

function CharacterEquipmentForm() {

  return (
    <Formik initialValues={{
      weapons: [],//weaponDetails(),
      armor: '',
      shield: '',
      tools: '',
    }}
      validate={validate}
      onSubmit={values => console.log(values)}
    >
      {({values, setFieldValue}) => (
        <Form className='character-equipment-form'>
          <label className="container-label">Weapons</label>
          <EquipmentField name={`weapons`} id='weapons' setFieldValue={setFieldValue} />
          <FieldArray
            name='weapons'
            render={arrayHelpers => (
              <div className='weapon-list-container'>
                {values.weapons.map((_weapon, index) => (
                  <div key={index} className='weapon-list-element'>
                    {/** both these conventions do the same */}
                    <Field name={`weapons[${index}].name`} />
                    <Field name={`weapons[${index}].damage.damage_dice`} />
                    <Field name={`weapons.${index}.weapon_category`} />
                    <Field name={`weapons[${index}].weapon_range`} />
                    <Field name={`weapons.${index}.weight`} />
                    <button
                      type="button"
                      className='equipment-remove'
                      onClick={() => arrayHelpers.remove(index)}
                    >
                      {/* <AiOutlineCloseCircle className='weapon-icon' /> */}
                      -
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className='equipment-add'
                  onClick={() => {
                    const weaponSpecs = weaponDetails(
                      document.getElementById('weapons').value
                    );
                    console.log(weaponSpecs);
                    if (weaponSpecs.length !== 0) {
                      arrayHelpers.push({
                        name: (weaponSpecs[0].name),
                        damage: {damage_dice: weaponSpecs[0].damage.damage_dice},
                        weapon_category: weaponSpecs[0].weapon_category,
                        weapon_range: weaponSpecs[0].weapon_range,
                        weight: weaponSpecs[0].weight
                      })
                    } else {
                      arrayHelpers.push({
                        name: '',
                        damage: {damage_dice: ''},
                        weapon_category: '',
                        weapon_range: '',
                        weight: ''
                      })
                    }
                  }}
                >
                  +
                </button>
              </div>
            )}
          />
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
