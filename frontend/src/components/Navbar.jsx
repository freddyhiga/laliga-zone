import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext.jsx';
import './navbar.css';

function Navbar() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const handleLogout = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem('isLoggedIn');
  };

  return (
    <header>
      <nav className='nav-container'>
        <NavLink to='/' className='logo-link'>
          <img src='/images/laliga.png' alt='LaLiga' />
        </NavLink>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/players'>Players</NavLink>
          </li>
          <li>
            <NavLink to='/teams'>Teams</NavLink>
          </li>
          <li>
            <NavLink to='/nations'>Nations</NavLink>
          </li>
          <li>
            <NavLink to='/positions'>Positions</NavLink>
          </li>
          {!isLoggedIn && (
            <li>
              <NavLink to='/login'>Login</NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <a href='/' onClick={handleLogout}>
                Logout
              </a>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
