import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './userandprofiles.css';
import Topbar from '../../components/topbar/Topbar';
import { AuthContext } from '../../context/AuthContext';

export const UserAndprofiles = () => {
  const LoggedUser = useContext(AuthContext);
  const [data, setData] = React.useState([]);
  const id = useParams().id;
  useEffect(() => {
    fetchuserprofiles();
  }, []);
  const fetchuserprofiles = async () => {
    const res = await axios.get(`/api/profile/getallprofileofSingleUser/${id}`);

    setData(res.data);
  };
  console.log(LoggedUser);
  return (
    <>
      <Topbar />
      <div className="profile">
        <div className="profileRight">
          <div className="user-main">
            <h1 className="user-name">Hello {LoggedUser.user.firstName}!</h1>
            <p className="user-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,{' '}
            </p>
          </div>
          <div className="profiles-container">
            <h1 className="profiles-title">My profiles</h1>
            <div className="profiles">
              {data &&
                data.length > 0 &&
                data.map((userProfiles, i) => {
                  return (
                    <Link
                      to={`/profileDetails/${userProfiles._id}`}
                      state={{ id: userProfiles._id }}
                      key={i}
                    >
                      <div className="profile-container" key={i}>
                        <img
                          className="profile-image"
                          src={
                            userProfiles.profilePicture
                              ? userProfiles.profilePicture
                              : `https://res.cloudinary.com/social-media-appwe/image/upload/v1633782265/social/assets/person/noAvatar_f5amkd.png`
                          }
                          alt=""
                        />
                        <div className="profile-name">
                          {userProfiles.firstName} {userProfiles.lastName}
                        </div>
                        <ul className="admins-list">
                          {userProfiles.admins &&
                            userProfiles.admins.map((admin) => (
                              <li key={admin._id}>{admin}</li>
                            ))}
                        </ul>
                      </div>
                    </Link>
                  );
                })}
              <Link to={`/createprofile/${LoggedUser.user._id}`}>
                <div className="profile-container">
                  <div className="profile-image create-profile-container">
                    +
                  </div>
                  <div className="profile-name">Make a new profile</div>
                </div>
              </Link>
            </div>
          </div>
          <div className='settings-container'>
            <h1 className='settings-title'>User settings</h1>
            <div className='btns-container'>
              <div className="big-button">privacy</div>
              <div className="big-button">Payments</div>
              <div className="big-button">Manage plan</div>
            </div>
            <div>
              <h3 className='settings-subtitle'>Plan type: </h3>
              <h3 className='settings-subtitle'>Plan's end date: </h3>
            </div>
            <div className="logout-btn">Log out</div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};
