import {Formik, Form} from 'formik';
import {useParams, useNavigate, Navigate} from 'react-router-dom';
import '../../style/CharacterDescription.css'
import IdentityField from './IdentityField.jsx'
import DescriptionArea from './DescriptionArea.jsx'
import characterFind from '../../data/characters.js'
// import SelectField from './SelectField.jsx'

const validate = (values) => {
  const errors = {};

  return errors;
}

function CharacterIdentity(props) {
  const params = useParams();
  const navigate = useNavigate();
  const charExists = characterFind(params.character).length === 1;

  const addNewCharacter = (values) => {
    const newCharacter = props.newChar;
    newCharacter.description = values;
    props.setNewChar(newCharacter);
    return props.newChar.identity.url;
  };

  if (charExists) {
    return (
      <>
        <Navigate to={`/${params.character}`}></Navigate>
      </>
    )
  }

  return (
    <>
      <h2 className="form-title">Describe your character</h2>
      <Formik initialValues={
        // {
        //   age: '',
        //   eyes: '',
        //   height: '',
        //   weight: '',
        //   skin: '',
        //   hair: '',
        //   personalityTraits: '',
        //   ideals: '',
        //   bonds: '',
        //   flaws: '',
        //   appearance: '',
        //   backstory: '',
        //   alliesAndOrganizations: '',
        //   aditionalFeaturesAndTraits: '',
        // }
        props.newChar.description
      }
        validate={validate}
        onSubmit={values => {
          const charUrl = addNewCharacter(values);
          navigate(`/form/equipment/${charUrl}`);
        }
        }
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
          <button type='submit'>Next</button>
        </Form>
      </Formik>
    </>
  );
}

export default CharacterIdentity;
