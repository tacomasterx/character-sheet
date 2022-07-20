import {useState, useEffect} from 'react'
import {Formik, Form} from 'formik';
import {Navigate, useNavigate, useParams} from 'react-router-dom';
import '../../style/CharacterIdentity.css'
import IdentityField from './IdentityField.jsx'
import SelectField from './SelectField.jsx'
import IdentityFieldAc from './IdentityFieldAc.jsx';
import characterFind from '../../data/characters.js';

const validate = (values, setValidation, validatedChar) => {
  const errors = {};

  if (!values.playerName) {
    errors.playerName = 'Required.';
  }

  if (!values.characterName) {
    errors.characterName = 'Required.';
  }

  if (values.characterName === validatedChar) {
    errors.characterName = 'Character already exists.';
  } else {
    setValidation(values.characterName);
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

function CharacterIdentity(props) {
  const [character, setCharacter] = useState({});
  const [validation, setValidation] = useState('');
  const [validatedChar, setValidatedChar] = useState('');
  const alignments = ['lawful good', 'lawful neutral', 'lawful evil',
    'neutral good', 'neutral', 'neutral evil',
    'chaotic good', 'chaotic neutral', 'chaotic evil'
  ];
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    let mounted = true;
    characterFind(params.character).then((items) => {
      if (mounted) {
        setCharacter(items.length !== 0 ? items[0] : {});
      }
    });
    return () => (mounted = false);
  }, []);

  useEffect(() => {
    let mounted = true;
    characterFind(validation).then((items) => {
      if (mounted) {
        setValidatedChar(items.length !== 0 ? items[0].character_name : '');
        console.log(items.length !== 0 ? items[0].character_name : '');
      }
    });
    return () => (mounted = false);
  }, [validation, setValidation]);

  const addNewCharacter = (character, values) => {
    const newCharacter = props.newChar;
    newCharacter.identity = values;
    newCharacter.identity.url = character;
    props.setNewChar(newCharacter);
    return props.newChar.identity.url;
  };


  if (character.url != null) {
    return (
      <>
        <Navigate to={`/${params.character}`}></Navigate>
      </>
    )
  }

  return (
    <>
      <h2 className="form-title">Who is your character?</h2>
      <Formik initialValues={
        // {
        // playerName: '',
        // characterName: `${params.character}`,
        // race: '',
        // background: '',
        // class: '',
        // level: 1,
        // alignment: '',
        // experience: 1,
        // }
        props.newChar.identity
      }
        validate={values => validate(values, setValidation, validatedChar)}
        onSubmit={values => {
          const charName = addNewCharacter(params.character, values);
          navigate(`/form/scores/${charName}`);
        }}
      >
        {({setFieldValue}) => (
          <Form className='identity-form'>
            <IdentityField name='playerName' label='Player Name' />
            <IdentityField name='characterName' label='Character Name' />
            <IdentityFieldAc name='race' label='Race' id='race' setFieldValue={setFieldValue} />
            <IdentityFieldAc label='Character background' name='background' setFieldValue={setFieldValue} />
            <IdentityFieldAc label='Character class' name='class' setFieldValue={setFieldValue} />
            <IdentityField name='level' label='Level' />
            <SelectField label='Character alignment' name='alignment' >
              <option value=''>Select an alignment</option>
              {alignments.map((alignm) => <option value={alignm} key={alignm}>{alignm}</option>)}
            </SelectField>
            <IdentityField name='experience' label='Experience points' />
            <button type='submit'>Next</button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default CharacterIdentity;
