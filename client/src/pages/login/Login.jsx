import { useContext, useRef, useState } from 'react';
import './login.css';
import { loginCall } from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';
import { CircularProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';
export default function Login() {
  // const email = useRef("Janesss@gamil.com");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall({ email: email, password: password }, dispatch);
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <span className="loginDesc">התחברות</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <form className="loginBox" onSubmit={handleClick}>
              <input
                placeholder="Email"
                type="email"
                value={email}
                required
                className="loginInput"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                placeholder="Password"
                type="password"
                value={password}
                required
                minLength="6"
                className="loginInput"
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                placeholder="Phone (optional)"
                type="phone"
                value={phone}
                minLength="6"
                className="loginInput"
                onChange={(e) => setPhone(e.target.value)}
              />
              <button
                className="loginButton"
                type="submit"
                disabled={isFetching}
              >
                {isFetching ? (
                  <CircularProgress color="white" size="20px" />
                ) : (
                  'Log In'
                )}
              </button>
              <span className="loginForgot"></span>
            </form>
            <div className='loginRegisterContainer'>
              <p className="loginRegisterButton">
                {isFetching ? (
                  <CircularProgress color="white" size="20px" />
                ) : (
                  <Link
                    to="/register"
                    style={{ textDecoration: 'none' }}
                    className="loginRegisterButton"
                  >
                     הרשמה 
                  </Link>
                )}
              </p>
               | 
              <p className="loginRegisterButton">
                {isFetching ? (
                  <CircularProgress color="white" size="20px" />
                ) : (
                  <Link
                    to="/register"
                    style={{ textDecoration: 'none' }}
                    className="loginRegisterButton"
                  >
                     שכחתי סיסמה 
                  </Link>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
