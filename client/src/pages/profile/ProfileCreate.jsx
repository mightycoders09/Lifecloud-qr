import axios from 'axios';
import { useRef, useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import Topbar from '../../components/topbar/Topbar';
import profiles from './dummy-profiles.json';
import './profile.css';
import { AuthContext } from '../../context/AuthContext';
import { useParams } from 'react-router';
export default function ProfileCreate() {
  const { user } = useContext(AuthContext);
  const id = useParams().id;
  const [picture, setPicture] = useState(null);
  const [imgData, setImgData] = useState(null);
  console.log(imgData, 'imgData');
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
  console.log(picture, 'pic');
  console.log(image, 'image');
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
      { axisTitle: '', axisDate: '', axisDescription: '' },
    ]);
  };
  
  const handleClick = async (e) => {
    console.log(id, 'id');
    e.preventDefault();
    const wallInformation = {
      originalUser: id,
      profileImg: picture,
      wallImg: image,
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      birthDate: birthDate.current.value,
      deathDate: deathDate.current.value,
      gender: selectedGender,
      wazeLocation: wazeLocation.current.value,
      googleLocation: googleLocation.current.value,
      description: description.current.value,
      lifeAxis: inputList,
      // gallery: picture,
    };

    try {
      const formdata = new FormData();
      formdata.append('profileImg', picture);
      formdata.append('wallImg', image);
      formdata.append('firstName', wallInformation.firstName);
      formdata.append('originalUser', wallInformation.originalUser);
      formdata.append('lastName', wallInformation.lastName);
      formdata.append('birthDate', wallInformation.birthDate);
      formdata.append('deathDate', wallInformation.deathDate);
      formdata.append('gender', wallInformation.gender);
      formdata.append('wazeLocation', wallInformation.wazeLocation);
      formdata.append('googleLocation', wallInformation.googleLocation);
      formdata.append('description', wallInformation.description);
      formdata.append('lifeAxis', JSON.stringify(wallInformation.lifeAxis));
     
      fetch('/api/profile/createProfile', {
        method: 'POST',
        body: formdata,
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          console.log(res);
        });

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="create-profile-container">
      <Topbar />
      <div className="profile-creation">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="loginLogo">Create Profile</h3>
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
                name="profileImg"
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
                name="profileImg"
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
                    type="date"
                  />
                  <input
                    placeholder="* Death Date"
                    required
                    type="date"
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
                          name="profileImg"
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
                      <div className="box" key={i}>
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
