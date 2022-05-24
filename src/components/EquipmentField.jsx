import IdentityFieldAc from './IdentityFieldAc.jsx';

function EquipmentField(props) {
  return (
    <div className='equipment-container'>
      <span className="container-label">
        {props.title}
      </span>
      <IdentityFieldAc {...props} />
    </div>
  );
}

export default EquipmentField;
