import EquipmentFieldAc from './EquipmentFieldAc.jsx';
import {useState} from 'react';


function EquipmentForm(props) {
  const [newItem, setNewItem] = useState('');

  const clear = () => setNewItem('');

  return (
    <div className='equipment-form'>
      <EquipmentFieldAc
        newItem={newItem}
        setNewItem={setNewItem}
        {...props}
      />
      <button
        type='button'
        onClick={clear}
        className='clear-button'
      >Clear</button>
    </div>
  );
}

export default EquipmentForm;
