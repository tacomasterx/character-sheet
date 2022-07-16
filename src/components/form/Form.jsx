import {Outlet} from 'react-router-dom';


function Form() {

  return (
    <>
      <div className="form-title-container">
        <h1>Character creation</h1>
      </div>
      <Outlet />
    </>
  );
}

export default Form;
