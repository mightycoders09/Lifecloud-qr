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
import { Link } from 'react-router-dom'
import './profiledetails.css';
import TopBar from '../../components/topbar/Topbar';
import ProgressBar from '../../components/progressbar/progressBar'
// import { AuthContext } from '../../context/AuthContext';
import { useParams } from 'react-router'
// import { useParams } from 'react-router-dom';
export default function Profile() {
  const { dispatch } = useContext(AuthContext);
  const [profiledata, setProfileData] = useState([])
  const [show, setShow] = useState(false);
  const id = useParams().id
  console.log(id)
  useEffect(() => {
    fetchuserprofiles()
  }, [])
  const fetchuserprofiles = async () => {
    const res = await axios.get(`/api/profile/getSingleProfileDetails/${id}`);
    setProfileData(res.data)
  }
  console.log(profiledata)
  let pasrseAxios = Object.keys(profiledata).length ? JSON.parse(profiledata.lifeAxis) : ''
  console.log(pasrseAxios)
  console.log()
  if (Object.keys(profiledata).length > 0) {
    return (
      <div>
        <TopBar />
        <img src={`http://localhost:8800/${profiledata.wallImg}`} alt="" className="profile-cover"></img>
        <div className="profile-details">
          <img src={`http://localhost:8800/${profiledata.profileImg}`} alt="" className="profile-img"></img>
          <div className="deceased-details">
            <h1>{`${profiledata.firstName} ${profiledata.lastName}`}</h1>
            <p>
              {profiledata.birthDate} - {profiledata.deathDate}
            </p>
            {/* <p>{profile[0].city}</p> */}
          </div>
        </div>
        <div className="btns-container">
          <div>
            <Link to={`/editprofiles/${id}`}><span className="small-btn">Update me</span></Link>
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
              { profiledata.gallery.map(img => {
                return <div className="gallery-img">
                  <img style={{width:'250px',hegight:'250px'}} src={`http://localhost:8800/${img}`} alt="" />
                </div>
              })}

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
            {/* {pasrseAxios.map((axis) => (
            <div className="axis-container">
              <div className="axis-sub-container">
                <h1 className="axis-title">{axis.axisTitle}</h1>
                <p className="axis-description2">{axis.axisDescription}</p>
              </div>
              <div className="axis-bubble">
                <span>{axis.axisDate}</span>
              </div>
            </div>
          ))} */}
          </div>
        </div>
      </div>
    );
  } else {
    return <h1 style={{ textAlign: 'center', paddingTop: '20%' }}><ProgressBar /></h1>
  }

}
