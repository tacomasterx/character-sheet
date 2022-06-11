import '../../style/EquipmentField.css'
import EquipmentForm from './EquipmentForm.jsx';

function EquipmentField({name, setFieldValue, ...props}) {

  const addEquipment = (equipment) => {
    let buffer = [];
    if (props.value !== []) {
      buffer = props.value;
      // props.setFieldValue(props.name, buffer);
      // props.setFieldValue(props.name, equipment);
      console.log(buffer);
      console.log(props.value);
    } else {
      buffer.push(equipment);
      // props.setFieldValue(props.name, buffer);
      // props.setFieldValue(props.name, equipment);
      console.log(buffer);
      console.log(props.value);
    }
  };

  return (
    <div className='equipment-container'>
      <EquipmentForm
        addEquipment={addEquipment}
        name={name}
        setFieldValue={setFieldValue}
        {...props}
      ></EquipmentForm>
      <div className="equipment-list-container">
      </div>
    </div>
  );
}

export default EquipmentField;
