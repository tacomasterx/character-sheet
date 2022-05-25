import '../style/EquipmentField.css'
import EquipmentForm from './EquipmentForm.jsx';
// import Weapon from './sheet/Weapon.jsx'

function EquipmentField({title, value, setFieldValue, ...props}) {

  const addEquipment = (equipment) => {
    console.log(equipment);
  };

  return (
    <div className='equipment-container'>
      <span className="container-label">
        {title}
      </span>
      <EquipmentForm
        addEquipment={addEquipment}
        {...props}
      ></EquipmentForm>
      <div className="equipment-list-container">
      </div>
    </div>
  );
}

export default EquipmentField;
