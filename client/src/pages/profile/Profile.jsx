import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import './profile.css';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import profiles from './dummy-profiles.json';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const LoggedUser = useContext(AuthContext);
  console.log(LoggedUser);
  const [user, setUser] = useState({});
  const username = useParams().username;
  const random =
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover';

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [username]);
  console.log(user);
  return (
    <>
      <Topbar />
      <div className="profile">
        <div className="profileRight">
          <div className="user-main">
            <h1 className="user-name">Hello {username}!</h1>
            <p className="user-description">{user.description || random}</p>
          </div>
          <div className="profiles-container">
            <h1 className="profiles-title">My profiles</h1>
            <div className="profiles">
              {profiles.map((profile) => (
                <Link
                  to={`/profileDetails/${profile.id}`}
                  state={{ id: profile.id }}
                >
                  <div className="profile-container" key={profile._id}>
                    <img
                      className="profile-image"
                      src={
                        profile.profilePicture
                          ? profile.profilePicture
                          : `https://res.cloudinary.com/social-media-appwe/image/upload/v1633782265/social/assets/person/noAvatar_f5amkd.png`
                      }
                      alt=""
                    />
                    <div className="profile-name">{profile.name}</div>
                    <ul className="admins-list">
                      {profile.admins.map((admin) => (
                        <li key={admin._id}>{admin}</li>
                      ))}
                    </ul>
                  </div>
                </Link>
              ))}
              <Link to={`/createprofile/${LoggedUser.user._id}`}>
                <div className="profile-container">
                  <img
                    className="profile-image"
                    src={`https://res.cloudinary.com/social-media-appwe/image/upload/v1633782265/social/assets/person/noAvatar_f5amkd.png`}
                    alt=""
                  />
                  <div className="profile-name">Make a new profile</div>
                </div>
              </Link>
            </div>
          </div>
          {/* <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={
                  user.coverPicture
                    ? user.coverPicture
                    : "https://res.cloudinary.com/social-media-appwe/image/upload/v1633782265/social/assets/person/noCover_mfhnml.png"
                }
                alt=""
              />
              <img
                className="profileUserImg"
                src={
                  user.profilePicture
                    ? user.profilePicture
                    : "https://res.cloudinary.com/social-media-appwe/image/upload/v1633782265/social/assets/person/noAvatar_f5amkd.png"
                }
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div> */}
          <div className="profileRightBottom">
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
}
