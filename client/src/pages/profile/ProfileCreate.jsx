import axios from 'axios';
import { useRef, useState, useParams, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import Topbar from '../../components/topbar/Topbar';
import profiles from './dummy-profiles.json';
import './profile.css';

export default function ProfileCreate() {
  const [picture, setPicture] = useState(null);
  const [imgData, setImgData] = useState(null);
  const onChangePicture = (e) => {
    if (e.target.files[0]) {
      console.log('picture: ', e.target.files);
      setPicture(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const [image, setImage] = useState(null);
  const [coverData, setCoverData] = useState(null);
  const onChangeCover = (e) => {
    if (e.target.files[0]) {
      console.log('picture: ', e.target.files);
      setImage(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        setCoverData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const [inputList, setInputList] = useState([
    { axisTitle: '', axisDate: '', axisDescription: '' },
  ]);
  const [selectedGender, setSelectedGender] = useState('');
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

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([
      ...inputList,
      { axisTitle: '', axisDate: '', axisDescription },
    ]);
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
      <div className="profile-creation">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="loginLogo">Edit Profile</h3>
          </div>
          <div className="profile-images">
            <div className="register_profile_image"></div>
            {/* <div className="profile-image-container">
              <img
                className="profile-image"
                src={
                    !imgData &&
                    'https://res.cloudinary.com/social-media-appwe/image/upload/v1633782265/social/assets/person/noAvatar_f5amkd.png'
                }
                alt=""
              />
            </div> */}
            <div className="profile-image-container">
              <img
                className="profile-image"
                src={
                  imgData
                    ? imgData
                    : `https://res.cloudinary.com/social-media-appwe/image/upload/v1633782265/social/assets/person/noAvatar_f5amkd.png`
                }
                alt=""
              ></img>
              <input
                className="custom-file-input"
                type="file"
                onChange={onChangePicture}
              />
            </div>
            <div className="profile-image-container">
              <img
                className="profile-image"
                src={
                  coverData
                    ? coverData
                    : `https://res.cloudinary.com/social-media-appwe/image/upload/v1633782265/social/assets/person/noAvatar_f5amkd.png`
                }
                alt=""
              ></img>
              <input
                className="custom-file-input"
                type="file"
                onChange={onChangeCover}
              />
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
                    <label
                      for="male"
                      className={`${
                        selectedGender === 'male' && 'active'
                      } input-label`}
                    >
                      Male
                    </label>
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
                    <label
                      for="female"
                      className={`${
                        selectedGender === 'female' && 'active'
                      } input-label`}
                    >
                      Female
                    </label>
                  </div>
                </div>
                <div className="location-container">
                  <h1>* Graves Location</h1>
                  <div className="location-semicontainer">
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
                  <h1>* Upload photos & videos to gallery</h1>
                  <div>
                    <div className="names-container">
                      <div className="register_profile_image">
                        <input
                          id="profilePic"
                          type="file"
                          onChange={onChangePicture}
                        />
                      </div>
                      <div className="previewProfilePic">
                        <img
                          className="playerProfilePic_home_tile"
                          src={imgData}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>{' '}
                  to do
                </div>
                <input
                  placeholder="* Add description of the deceased"
                  required
                  ref={description}
                  className="nameInput description"
                />
                <div>
                  <h1 style={{ textAlign: 'center' }}>Life Axis</h1>
                  {inputList.map((x, i) => {
                    return (
                      <div className="box" key={x}>
                        <div className="inner-box">
                          <input
                            name="axisTitle"
                            placeholder="* Title"
                            value={x.axisTitle}
                            onChange={(e) => handleInputChange(e, i)}
                            className="axis-input"
                          />
                          <input
                            name="axisDate"
                            placeholder="* Date"
                            value={x.axisDate}
                            onChange={(e) => handleInputChange(e, i)}
                            className="axis-input"
                          />
                          <input
                            name="axisDescription"
                            placeholder="* Description"
                            value={x.axisDescription}
                            onChange={(e) => handleInputChange(e, i)}
                            className="axis-description"
                          />
                          <div className="btn-box">
                            {inputList.length !== 1 && (
                              <p
                                className="delete-btn"
                                onClick={() => handleRemoveClick(i)}
                              >
                                -Delete
                              </p>
                            )}
                          </div>
                        </div>
                        {inputList.length - 1 === i && (
                          <div className="add-btn" onClick={handleAddClick}>
                            <div className="inner-btn">
                              <div className="line-1"></div>
                              <div className="line-2"></div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
                <button className="create-btn" type="submit">
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
