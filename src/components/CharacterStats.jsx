import { useFormik } from 'formik'
import '../style/CharacterScores.css'

function CharacterScores() {

  const formik = useFormik({
    initialValues: {
      strength: 10,
      dexterity: 10,
      constitution: 10,
      intelligence: 10,
      wisdom: 10,
      charisma: 10,
      inspiration: false,
    }
  })
  return (
    
  );
}

export default CharacterStats;
