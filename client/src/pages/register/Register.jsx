import axios from 'axios';
import { useRef, useState } from 'react';
import './register.css';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

export default function Register() {
  const [selectedGender, setSelectedGender] = useState('');
  const firstName = useRef();
  const lastName = useRef();
  const companyName = useRef();
  const dateOfBirth = useRef();
  const gender = selectedGender;
  const phone = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();
  const [error, setErro] = useState('')
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    dateOfBirth: '',
    gender: '',
    email: '',
    password: '',
    passwordAgain: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value, 'va')
    // setSelectedGender(e.target.value);
    setUser({
      ...user,
      [name]: value
    })
    setErro('')
  };
  const handleClick = async (e) => {
    e.preventDefault();
    if (user.password !== user.passwordAgain) {
      setErro("Passwords don't match!");
    } else {
      setErro('')
      try {
        fetch('/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(user)
        }).then(res => {
          return res.json()
        }).then(res => {
          history.push('/login');
          console.log(res, 'res')
        })

      } catch (err) {
        console.log(err);
      }
    }
  };
  console.log(user, 'user')
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">הרשמה</h3>
        </div>
        <div className="loginRight">
          <div className="RegBox">
            <form className="loginBox" onSubmit={handleClick}>
              <div className='names-container'>
                <input
                  placeholder="First Name"
                  required
                  onChange={handleChange}
                  ref={firstName}
                  value={user.firstName}
                  name='firstName'
                  className="nameInput"
                />
                <input
                  placeholder="lastName"
                  required
                  onChange={handleChange}
                  ref={lastName}
                  value={user.lastName}
                  name='lastName'
                  className="nameInput"
                />
              </div>
              <input
                placeholder="company Name "
                required
                onChange={handleChange}
                ref={companyName}
                value={user.companyName}
                name='companyName'
                className="loginInput"
                type="companyName"
              />
              <input
                placeholder="Date of Birth"
                required
                onChange={handleChange}
                ref={dateOfBirth}
                className="loginInput"
                value={user.dateOfBirth}
                name='dateOfBirth'
                type="date"
              />
              <div className='radio-container'>
                <h3>Gender</h3>
                <div className='radio-input-container'>
                  <input
                    type="radio"
                    value="male"
                    id="male"
                    value='male'
                    onChange={handleChange}
                    name="gender"
                    checked={user.gender === "male"}
                    className='radio'
                  />
                  <label for="male">Male</label>
                </div>
                <div className='radio-input-container'>

                  <input
                    type="radio"
                    value="female"
                    id="female"
                    onChange={handleChange}
                    checked={user.gender === "female"}
                    value='female'
                    name="gender"
                    className='radio'
                  />
                  <label for="female">Female</label>
                </div>
              </div>
              <input
                placeholder="Email"
                required
                value={user.email}
                name='email'
                ref={email}
                onChange={handleChange}
                className="loginInput"
                type="email"
              />
              <input
                placeholder="Password"
                required
                value={user.password}
                name='password'
                ref={password}
                className="loginInput"
                onChange={handleChange}
                type="password"
                minLength="6"
              />
              <input
                placeholder="Password Again"
                required
                value={user.passwordAgain}
                name='passwordAgain'
                ref={passwordAgain}
                onChange={handleChange}
                className="loginInput"
                type="password"
              />
              <p style={{ color: 'red', textAlign: 'center' }}>{error.length ? error : ''}</p>
              <button className="loginButton" type="submit">
                Sign Up
              </button>
            </form>
            <button className="loginRegisterButton">
              <Link
                to="/login"
                style={{ textDecoration: 'none' }}
                className="loginRegisterButton"
              >
                Log into Account{' '}
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
