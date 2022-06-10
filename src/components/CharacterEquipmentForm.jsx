import {Formik, Form, FieldArray, Field} from 'formik';
import '../style/CharacterEquipment.css'
import IdentityFieldAc from './IdentityFieldAc.jsx';
import EquipmentField from './EquipmentField.jsx';
import SelectField from './SelectField.jsx';
import DescriptionArea from './DescriptionArea.jsx';
import CheckBox from './CheckBox.jsx';
// import {AiOutlineCloseCircle} from 'react-icons/ai'

import weaponDetails from '../data/weapon-details.js';
import parameterList from '../data/parameters.js';
import toolDetails from '../data/tool-details.js';
import magicItemsDetails from '../data/mi-details.js';

const validate = (values) => {
  const errors = {};

  return errors;
}

function CharacterEquipmentForm() {

  return (
    <Formik initialValues={{
      weapons: [],//weaponDetails(),
      armor: '',
      shield: '',
      tools: [],
      magicItems: [],
      treasure: [],
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
                    <label htmlFor={`weapons[${index}].name`}>Name</label>
                    <Field name={`weapons[${index}].name`} />
                    <label htmlFor={`weapons[${index}].weapon_category`}>Category</label>
                    <Field name={`weapons.${index}.weapon_category`} />
                    <div className="range-section">
                      <label htmlFor={`weapons[${index}].weapon_range`}>Range</label>
                      <Field name={`weapons[${index}].weapon_range`} />
                      <br />
                      <Field name={`weapons[${index}].range.normal`} />
                      /
                      <Field name={`weapons[${index}].range.long`} />
                    </div>
                    <div className="damage-section">
                      <label htmlFor={`weapons[${index}].weapon_range`}>Damage</label>
                      <br />
                      <label htmlFor={`weapons[${index}].damage.damage_dice`}>Dice</label>
                      <Field name={`weapons[${index}].damage.damage_dice`} />
                      <label htmlFor={`weapons[${index}].damage.damage_type.name`}>Type</label>
                      <Field name={`weapons[${index}].damage.damage_type.name`} />
                    </div>
                    <label htmlFor={`weapons[${index}].properties`}>Properties</label>
                    <Field name={`weapons[${index}].properties`} />
                    <label htmlFor={`weapons[${index}].weight`}>Weight</label>
                    <Field name={`weapons.${index}.weight`} />
                    <button
                      type="button"
                      className='equipment-remove'
                      onClick={() => arrayHelpers.remove(index)}
                    >
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
                    if (weaponSpecs.length !== 0) {
                      arrayHelpers.push({
                        name: (weaponSpecs[0].name),
                        weapon_category: weaponSpecs[0].weapon_category,
                        weapon_range: weaponSpecs[0].weapon_range,
                        damage: {
                          damage_dice: weaponSpecs[0].damage.damage_dice,
                          damage_type: {name: weaponSpecs[0].damage.damage_type.name}
                        },
                        range: {
                          normal: weaponSpecs[0].range.normal,
                          long: weaponSpecs[0].range.long ? weaponSpecs[0].range.long : ''
                        },
                        properties: weaponSpecs[0].properties,
                        weight: weaponSpecs[0].weight
                      })
                    } else {
                      arrayHelpers.push({
                        name: document.getElementById('weapons').value,
                        damage: {damage_dice: '', damage_type: {name: ''}},
                        weapon_category: '',
                        weapon_range: '',
                        range: {normal: '', long: ''},
                        properties: '',
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
          <label className="container-label">Tools</label>
          <EquipmentField name={`tool`} id='tool' setFieldValue={setFieldValue} />
          <FieldArray
            name='tools'
            render={arrayHelpers => (
              <div className='tools-list-container'>
                {values.tools.map((_tool, index) => (
                  <div key={index} className='tools-list-element'>
                    <label htmlFor={`tools[${index}].name`}>Name</label>
                    <Field name={`tools[${index}].name`} />
                    <label htmlFor={`tools[${index}].weight`}>Weight</label>
                    <Field name={`tools[${index}].weight`} />
                    <CheckBox name={`tools[${index}].proficient`}>Proficient?</CheckBox>
                    <button
                      type="button"
                      className='equipment-remove'
                      onClick={() => arrayHelpers.remove(index)}
                    >
                      -
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className='equipment-add'
                  onClick={() => {
                    const toolList = toolDetails(
                      document.getElementById('tool').value.toLowerCase()
                    );
                    if (toolList.length !== 0) {
                      arrayHelpers.push({
                        name: (toolList[0].name),
                        weight: (toolList[0].weight),
                        proficient: false,
                      })
                    } else {
                      arrayHelpers.push({
                        name: document.getElementById('tool').value,
                        proficient: false,
                        weight: 0,
                      })
                    }
                  }}
                >
                  +
                </button>
              </div>
            )}
          />
          <label className="container-label">Magic Items</label>
          <EquipmentField name={`magicItem`} id='magicItem' setFieldValue={setFieldValue} />
          <FieldArray
            name='magicItems'
            render={arrayHelpers => (
              <div className='magicItems-list-container'>
                {values.magicItems.map((_, index) => (
                  <div key={index} className='magicItems-list-element'>
                    <label htmlFor={`magicItems[${index}].name`}>Name</label>
                    <Field name={`magicItems[${index}].name`} />
                    <SelectField name={`magicItems[${index}].type`} label='type'>
                      <option value >Select a parameter</option>
                      {parameterList().map((parameter) => {
                        return (
                          <option value={parameter} key={parameter}>{parameter}</option>
                        )
                      }
                      )}
                    </SelectField>
                    <label htmlFor={`magicItems[${index}].bonus`}>Bonus</label>
                    <Field name={`magicItems[${index}].bonus`} />
                    <DescriptionArea label='Description' name={`magicItems[${index}].desc`}></DescriptionArea>
                    <label htmlFor={`magicItems[${index}].weight`}>Weight</label>
                    <Field name={`magicItems[${index}].weight`} />
                    <button
                      type="button"
                      className='equipment-remove'
                      onClick={() => arrayHelpers.remove(index)}
                    >
                      -
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className='equipment-add'
                  onClick={() => {
                    const toolList = magicItemsDetails(
                      document.getElementById('magicItem').value.toLowerCase()
                    );
                    if (toolList.length !== 0) {
                      arrayHelpers.push({
                        name: (toolList[0].name),
                        parameter: 0,
                        bonus: 0,
                        desc: (toolList[0].desc),
                        weight: (toolList[0].weight ? toolList[0].weight : 0),
                      })
                    } else {
                      arrayHelpers.push({
                        name: document.getElementById('magicItem').value,
                        parameter: 0,
                        bonus: 0,
                        desc: '',
                        weight: 0,
                      })
                    }
                  }}
                >
                  +
                </button>
              </div>
            )}
          />
          <label className="container-label">Treasure</label>
          <EquipmentField name={`treasure`} id='treasure' setFieldValue={setFieldValue} />
          <FieldArray
            name='treasure'
            render={arrayHelpers => (
              <div className='treasure-list-container'>
                {values.treasure.map((_, index) => (
                  <div key={index} className='treasure-list-element'>
                    <label htmlFor={`treasure[${index}].name`}>Name</label>
                    <Field name={`treasure[${index}].name`} />
                    <label htmlFor={`treasure[${index}].quantity`}>Quantity</label>
                    <Field name={`treasure[${index}].quantity`} />
                    <label htmlFor={`treasure[${index}].weight`}>Weight</label>
                    <Field name={`treasure[${index}].weight`} />
                    <button
                      type="button"
                      className='equipment-remove'
                      onClick={() => arrayHelpers.remove(index)}
                    >
                      -
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className='equipment-add'
                  onClick={() => {
                    arrayHelpers.push({
                      name: document.getElementById('treasure').value,
                      quantity: 0,
                      weight: 0,
                    })
                  }}
                >
                  +
                </button>
              </div>
            )}
          />
          <button type='submit'>Send</button>
        </Form>
      )}
    </Formik>
  );
}

export default CharacterEquipmentForm;
