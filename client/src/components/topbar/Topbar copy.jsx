import React from 'react';
import './topbar.css';
import {
  Person,
  Search,
  Chat,
  Notifications,
  ExitToApp,
} from '@material-ui/icons';
import { Link, useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useSearch } from '../../context/SearchContext';

const Topbar = () => {
  const history = useHistory();
  const { searchText, setSearchText } = useSearch();
  const { user } = useContext(AuthContext);
  const userName = `${user ? user.firstName : ''} ${user ? user.lastName : ''}`;
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: 'none', color: '#6097BF' }}>
          <span className="logo">LifeCloud</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            type="text"
            placeholder="Search for Friends"
            className="SearchInput"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <Link
            style={{
              textDecoration: 'none',
              color: '#6097BF',
              padding: '10px',
            }}
            to="/"
          >
            <span className="topbarLink">Homepage</span>
          </Link>
          {user ? <Link
            to={`/userprofiles/${user._id}`}
            style={{ textDecoration: 'none', color:'blue' }}
          >
            <span className="topbarLink">user page</span>
          </Link> : <Link
            to={`/`}
            style={{ textDecoration: 'none', color: 'blue' }}
          >
            <span className="topbarLink">user page</span>
          </Link>}
        </div>
        <div className="topbarIcons">
          <div
            className="topbarIconItem"
            onClick={() => {
              localStorage.clear();
              history.push('/');
              window.location.reload();
            }}
          >
            <ExitToApp />
          </div>
        </div>
      </div>
      {user ? (
        <Link style={{ marginRight: '15px' }} to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? user.profilePicture
                : 'https://res.cloudinary.com/social-media-appwe/image/upload/v1633782265/social/assets/person/noAvatar_f5amkd.png'
            }
            alt=""
            className="topbarImg"
          />
        </Link>
      ) : (
        <Link style={{ marginRight: '15px' }} to={`/`}>
          <img
            src={
              user.profilePicture
                ? user.profilePicture
                : 'https://res.cloudinary.com/social-media-appwe/image/upload/v1633782265/social/assets/person/noAvatar_f5amkd.png'
            }
            alt=""
            className="topbarImg"
          />
        </Link>
      )}
    </div>
  );
};

export default Topbar;