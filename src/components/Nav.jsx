import {NavLink} from 'react-router-dom';

function Nav() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to='/instructions'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/form'>Form</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
