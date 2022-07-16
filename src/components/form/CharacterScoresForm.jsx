import {Formik, Form} from 'formik'
import {useParams, useNavigate, Navigate} from 'react-router-dom';
import characterFind from '../../data/characters';
import '../../style/CharacterScores.css'
import AbilityScore from './AbilityScore.jsx'
import CheckBox from './CheckBox.jsx'

const validate = (values) => {
  const errors = {};

  if (values.strength <= -1 || !values.strength || isNaN(values.strength)) {
    errors.strength = 'Please enter a non negative number.';
  }

  if (values.dexterity <= -1 || !values.dexterity || isNaN(values.dexterity)) {
    errors.dexterity = 'Please enter a non negative number.';
  }

  if (values.constitution <= -1 || !values.constitution || isNaN(values.constitution)) {
    errors.constitution = 'Please enter a non negative number.';
  }

  if (values.intelligence <= -1 || !values.intelligence || isNaN(values.intelligence)) {
    errors.intelligence = 'Please enter a non negative number.';
  }

  if (values.wisdom <= -1 || !values.wisdom || isNaN(values.wisdom)) {
    errors.wisdom = 'Please enter a non negative number.';
  }

  if (values.charisma <= -1 || !values.charisma || isNaN(values.charisma)) {
    errors.charisma = 'Please enter a non negative number.';
  }

  return errors;
};

function CharacterScores(props) {
  const params = useParams();
  const navigate = useNavigate();
  const charExists = characterFind(params.character).length === 1;

  const addNewCharacter = (values) => {
    const newCharacter = props.newChar;
    newCharacter.scores = values;
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
      <h2 className="form-title">Set your character's abilities</h2>
      <Formik initialValues={
        // {
        //   strength: 10,
        //   dexterity: 10,
        //   constitution: 10,
        //   intelligence: 10,
        //   wisdom: 10,
        //   charisma: 10,
        //   inspiration: false,
        // }
        props.newChar.scores
      }
        validate={validate}
        onSubmit={values => {
          const charUrl = addNewCharacter(values);
          navigate(`/form/description/${charUrl}`);
        }
        }
      >
        <Form className='scores-form'>
          <AbilityScore name='strength' label='Strength' />
          <AbilityScore name='dexterity' label='Dexterity' />
          <AbilityScore name='constitution' label='Constitution' />
          <AbilityScore name='intelligence' label='Intelligence' />
          <AbilityScore name='wisdom' label='Wisdom' />
          <AbilityScore name='charisma' label='Charisma' />
          <CheckBox name='inspiration'>
            Inspiration
          </CheckBox>
          <button type='submit'>Next</button>
        </Form>
      </Formik>
    </>
  );
}

export default CharacterScores;
