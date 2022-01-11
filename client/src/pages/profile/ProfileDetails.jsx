import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import profile from './dummy-profiles.json';
import waze from '../../assets/waze.png';
import wts from '../../assets/wts.png';
import zoom from '../../assets/zoom.png';
import google from '../../assets/google.png';
import map from '../../assets/map.png';
import share from '../../assets/share.png';
import heart from '../../assets/heart.png';
import './profiledetails.css';
import TopBar from '../../components/topbar/Topbar';
import { useParams } from 'react-router-dom';
export default function Profile() {
  const [show, setShow] = useState(false);
  const LoggedUser = useContext(AuthContext);
  const [data, setData] = useState([]);
  const id = useParams().id;
  useEffect(() => {
    fetchProfile();
  }, []);
  const fetchProfile = async () => {
    const res = await axios.get(`/api/getSingleProfileDetails/${id}`);
    setData(res.data);
  };
  console.log(data);
  return (
    <div>
      <TopBar />
      <img src={profile[0].coverImg} alt="" className="profile-cover"></img>
      <div className="profile-details">
        <img src={profile[0].profileImg} alt="" className="profile-img"></img>
        <div className="deceased-details">
          <h1>{profile[0].name}</h1>
          <p>
            {profile[0].birthDate} - {profile[0].deathDate}
          </p>
          <p>{profile[0].city}</p>
        </div>
      </div>
      <div className="btns-container">
        <div>
          <span className="small-btn">Update me</span>
          <span className="small-btn">+ Add Friend</span>
          <span className="small-btn">Friends list</span>
        </div>
        <div className="big-btns-container">
          <div
            onClick={() => setShow(true)}
            className={`${show && 'active'} big-btn`}
          >
            Biography
          </div>
          <div
            onClick={() => setShow(false)}
            className={`${!show && 'active'} big-btn`}
          >
            Wall
          </div>
        </div>
      </div>
      <div className={`${show && 'd-none'}`}>
        <div className="memorial-container">
          <h1 className="memorial-title">Memorial date</h1>
          <div className="details-and-icons">
            <div className="memorial-details">
              <h3>| {profile[0].memorialDate}</h3>
              <h3>| {profile[0].memorialDate}</h3>
              <h3>| {profile[0].memorialLocation}</h3>
            </div>
            <div className="icons-container">
              <img src={waze} alt="" className="icon"></img>
              <img src={wts} alt="" className="icon"></img>
              <img src={zoom} alt="" className="icon"></img>
            </div>
          </div>
        </div>
        <div className="gallery-container">
          <h1 className="gallery-title">Gallery</h1>
          <div className="imgs-container">
            <div className="gallery-img"></div>
            <div className="gallery-img"></div>
            <div className="gallery-img"></div>
            <div className="gallery-img last-img">+</div>
          </div>
          <div className="full-btn">+ Full Gallery</div>
        </div>
        <div className="grave-location-container">
          <h1 className="grave-location-title">Graves location</h1>
          <div className="grave-imgs-container">
            <img src={profile[0].graveImg} alt="" className="grave-img"></img>
            <img src={map} alt="" className="grave-img"></img>
          </div>
          <div className="navigation-btn">
            Tap here for navigation <img src={google} alt=""></img>
          </div>
        </div>
        <div className="memories-container">
          <h1 className="memories-title">Memories</h1>
          <div className="memories-sub-container">
            <div className="main-memory">
              <span className="main-memory-content">
                {profile[0].memories[0].content}
              </span>{' '}
              <br></br>
              <span>- {profile[0].memories[0].name} -</span>
            </div>
            <div className="sub-memories-container">
              <div className="memory">X</div>
              <div className="memory">X</div>
              <div className="memory">X</div>
              <div className="memory">X</div>
            </div>
          </div>
          <div className="com-icons-container">
            <span className="com-icon">
              <img src={share} alt="" className="com-icon-img"></img>
            </span>
            <span className="com-icon">
              <img src={heart} alt="" className="com-icon-img"></img>
            </span>
          </div>
          <div className="full-btn com-btn">+ Full Gallery</div>
        </div>
      </div>
      <div className={`${!show && 'd-none'}`}>
        <div className="bio-content">
          <h1 className="bio-name">{profile[0].name}.</h1>
          <p className="bio-bio">{profile[0].bio}</p>
        </div>
        <div className="life-axis">
          <h1 className="axis-name">Biography and life axis</h1>
          <p className="axis-desc">{profile[0].axisDescription}</p>
        </div>
        <div>
          {profile[0].lifeAxis.map((axis) => (
            <div className="axis-container">
              <div className="axis-sub-container">
                <h1 className="axis-title">{axis.title}</h1>
                <p className="axis-description2">{axis.description}</p>
              </div>
              <div className="axis-bubble">
                <span>{axis.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
