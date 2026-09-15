import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext.jsx';
import './formMessages.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:8080/api/players', {
      method: 'GET',
      headers: {
        Authorization: 'Basic ' + btoa(username + ':' + password),
      },
    });

    console.log(response.status);

    if (response.ok) {
      const auth = 'Basic ' + btoa(username + ':' + password);

      setIsLoggedIn(true);
      setLoginError(false);

      sessionStorage.setItem('isLoggedIn', 'true');
      sessionStorage.setItem('auth', auth);

      navigate('/');
    } else {
      setIsLoggedIn(false);
      setLoginError(true);
    }
  };

  return (
    <div className='login-page'>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <div className='login-container'>
          <div className='form-field'>
            <label>Username</label>
            <input
              type='text'
              name='username'
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>

          <div className='form-field'>
            <label>Password</label>
            <input
              type='password'
              name='password'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <div className='form-actions' style={{ marginTop: '20px' }}>
            <button type='submit' className='form-btn'>
              Login
            </button>
            <Link to='/' className='back-btn'>
              Back
            </Link>
          </div>
        </div>
      </form>
      {isLoggedIn && <p className='success-login'>Login successful!</p>}

      {loginError && (
        <p className='error-login'>Username or password is incorrect.</p>
      )}
    </div>
  );
}

export default Login;
