import {Formik, Form} from 'formik';
import '../../style/CharacterDescription.css'
import IdentityField from './IdentityField.jsx'
import DescriptionArea from './DescriptionArea.jsx'
// import SelectField from './SelectField.jsx'

const validate = (values) => {
  const errors = {};

  return errors;
}

function CharacterIdentity() {

  return (
    <Formik initialValues={{
      age: '',
      eyes: '',
      height: '',
      weight: '',
      skin: '',
      hair: '',
      personalityTraits: '',
      ideals: '',
      bonds: '',
      flaws: '',
      appearance: '',
      backstory: '',
      alliesAndOrganizations: '',
      aditionalFeaturesAndTraits: '',
      treasure: '',
    }}
      validate={validate}
      onSubmit={values => console.log(values)}
    >
      <Form className='description-form'>
        <IdentityField name='age' label='Age' />
        <IdentityField name='height' label='Height' />
        <IdentityField name='eyes' label='Eyes' />
        <IdentityField name='weight' label='Weight' />
        <IdentityField name='skin' label='Skin' />
        <IdentityField name='hair' label='Hair' />
        <DescriptionArea name='personalityTraits' label='Personality Traits' />
        <DescriptionArea name='ideals' label='Ideals' />
        <DescriptionArea name='bonds' label='bonds' />
        <DescriptionArea name='flaws' label='flaws' />
        <DescriptionArea name='appearance' label='Appearance' />
        <DescriptionArea name='backstory' label='Backstory' />
        <DescriptionArea name='alliesAndOrganizations' label='Allies and Organizations' />
        <DescriptionArea name='aditionalFeaturesAndTraits' label='Aditional Features and Traits' />
        <button type='submit'>Send</button>
      </Form>
    </Formik>
  );
}

export default CharacterIdentity;
