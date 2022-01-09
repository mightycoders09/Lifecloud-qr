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

  const handleChange = (e) => {
    setSelectedGender(e.target.value);
  };
  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        firstName: firstName.current.value,
        lastName: lastName.current.value,
        companyName: companyName.current.value,
        dateOfBirth: dateOfBirth.current.value,
        gender: gender.current.value,
        phone: phone.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post('/auth/register', user);
        history.push('/login');
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">הרשמה</h3>
        </div>
        <div className="loginRight">
          <div className="RegBox">
            <form className="loginBox" onSubmit={handleClick}>
              <div>
                <input
                  placeholder="First Name"
                  required
                  ref={firstName}
                  className="loginInput"
                />
                <input
                  placeholder="lastName"
                  required
                  ref={lastName}
                  className="loginInput"
                />
              </div>
              <input
                placeholder="company Name (optional)"
                required
                ref={companyName}
                className="loginInput"
                type="companyName"
              />
              <input
                placeholder="Date of Birth"
                required
                ref={dateOfBirth}
                className="loginInput"
                type="dateOfBirth"
              />
              <input
                type="radio"
                value="male"
                id="male"
                onChange={handleChange}
                name="gender"
              />
              <label for="male">Male</label>

              <input
                type="radio"
                value="female"
                id="female"
                onChange={handleChange}
                name="gender"
              />
              <label for="female">Female</label>
              <input
                placeholder="Email"
                required
                ref={email}
                className="loginInput"
                type="email"
              />
              <input
                placeholder="Password"
                required
                ref={password}
                className="loginInput"
                type="password"
                minLength="6"
              />
              <input
                placeholder="Password Again"
                required
                ref={passwordAgain}
                className="loginInput"
                type="password"
              />
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
