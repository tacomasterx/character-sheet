import EquipmentFieldAc from './EquipmentFieldAc.jsx';
import {useState} from 'react';


function EquipmentForm(props) {
  const [newItem, setNewItem] = useState('');

  const click = (item) => {
    if (item === '') {
      alert('Please introduce a weapon name')
    } else {
      props.addEquipment(item);
      setNewItem('');
    }
  };

  return (
    <div>
      <EquipmentFieldAc
        value={newItem}
        setValue={setNewItem}
        {...props}
      />
      <button
        type='button'
        className='add-equipment-button'
        onClick={() => click(newItem)}
      >
        Add
      </button>
    </div>
  );
}

export default EquipmentForm;
