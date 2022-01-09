import axios from 'axios';
import { useRef, useState, useParams, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import Topbar from '../../components/topbar/Topbar';
import profiles from './dummy-profiles.json';
import './profile.css';

export default function ProfileCreate() {
  const [selectedGender, setSelectedGender] = useState('');
  const [axisAmount, setAxisAmount] = useState(1);
  const firstName = useRef();
  const lastName = useRef();
  const companyName = useRef();
  const birthDate = useRef();
  const deathDate = useRef();
  const gender = selectedGender;
  const phone = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const wazeLocation = useRef();
  const googleLocation = useRef();
  const description = useRef();
  const axisDescription = useRef();
  const axisTitle = useRef();
  const axisDate = useRef();
  const history = useHistory();
  const handleChange = (e) => {
    setSelectedGender(e.target.value);
  };
  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const wallInformation = {
        firstName: firstName.current.value,
        lastName: lastName.current.value,
        companyName: companyName.current.value,
        birthDate: birthDate.current.value,
        deathDate: deathDate.current.value,
        gender: gender.current.value,
        phone: phone.current.value,
        email: email.current.value,
        password: password.current.value,
        wazeLocation: wazeLocation.current.value,
        googleLocation: googleLocation.current.value,
        description: description.current.value,
        axisDescription: axisDescription.current.value,
        axisTitle: axisTitle.current.value,
        axisDate: axisDate.current.value,
      };
      try {
        await axios.post('/auth/register', wallInformation);
        history.push('/login');
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="create-profile-container">
      <Topbar />
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="loginLogo">Edit Profile</h3>
          </div>
          <div className="profile-images">
            <div className="profile-image-container">
              <img
                className="profile-image"
                src={`https://res.cloudinary.com/social-media-appwe/image/upload/v1633782265/social/assets/person/noAvatar_f5amkd.png`}
                alt=""
              ></img>
              <p>+ Edit Profile image</p>
            </div>
            <div className="profile-image-container">
              <img
                className="profile-image"
                src={`https://res.cloudinary.com/social-media-appwe/image/upload/v1633782265/social/assets/person/noAvatar_f5amkd.png`}
                alt=""
              ></img>
              <p>+ Edit Cover image</p>
            </div>
          </div>
          <div className="loginRight">
            <div className="RegBox">
              <form className="loginBox" onSubmit={handleClick}>
                <div className="names-container">
                  <input
                    placeholder="* First Name"
                    required
                    ref={firstName}
                    className="nameInput"
                  />
                  <input
                    placeholder="* Last Name"
                    required
                    ref={lastName}
                    className="nameInput"
                  />
                </div>
                <div className="names-container">
                  <input
                    placeholder="* Birth Date"
                    required
                    ref={birthDate}
                    className="nameInput"
                  />
                  <input
                    placeholder="* Death Date"
                    required
                    ref={deathDate}
                    className="nameInput"
                  />
                </div>
                <div className="radio-container">
                  <h3>Gender</h3>
                  <div className="radio-input-container">
                    <input
                      type="radio"
                      value="male"
                      id="male"
                      onChange={handleChange}
                      name="gender"
                      className="radio"
                    />
                    <label for="male">Male</label>
                  </div>
                  <div className="radio-input-container">
                    <input
                      type="radio"
                      value="female"
                      id="female"
                      onChange={handleChange}
                      name="gender"
                      className="radio"
                    />
                    <label for="female">Female</label>
                  </div>
                </div>
                <div className="location-container">
                  <h1>* Graves Location</h1>
                  <div>
                    <div className="names-container">
                      <input
                        placeholder="* Add waze navigation"
                        required
                        ref={wazeLocation}
                        className="nameInput"
                      />
                      <input
                        placeholder="* Add google map location"
                        required
                        ref={googleLocation}
                        className="nameInput"
                      />
                    </div>
                  </div>
                </div>
                <div className="location-container">
                  {/* <h1>* Upload photos & videos to gallery</h1>
                  <div>
                    <div className="names-container">
                      <input
                        type="file"
                        value={selectedFile}
                        onChange={(e) => setSelectedFile(e.target.files[0])}
                      />
                      <img className="img-placeholder"></img>
                      <img className="img-placeholder"></img>
                      <img className="img-placeholder"></img>
                    </div>
                  </div>  to do*/}
                </div>
                <input
                  placeholder="* Add description of the deceased"
                  required
                  ref={description}
                  className="nameInput description"
                />
                <div>
                  <h1>Life Axis</h1>
                </div>
                <button className="loginButton" type="submit">
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
