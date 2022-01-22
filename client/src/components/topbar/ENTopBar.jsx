import React, { useState } from 'react';
import './topbar.css';
import blueLogo from '../../assets/logo-blue.png';
import { Link, useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useSearch } from '../../context/SearchContext';
import LanguageContext from '../../context/LanguageContext';
import WithLanguage from '../languageButton/WithLanguage';
import LanguageButton from '../languageButton/LanguageButton';

const ENTopbar = (props) => {
  const history = useHistory();
  // const { searchText, setSearchText } = useSearch();
  const { user } = useContext(AuthContext);
  const [searchText,setSeachText] = useState('')
  console.log(searchText)
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: 'none', color: '#6097BF' }}>
          <img className="logo" src={blueLogo} alt="" />
        </Link>
        <WithLanguage>
          <LanguageButton />
        </WithLanguage>
      </div>
      <div className="topbarCenter">
        <input
          type="text"
          placeholder="חיפוש..."
          className="SearchInput top-search"
          onChange={(e) => setSeachText(e.target.value)}
        />
        <div className="topbarRight">
          <div className="topbarLinks">
            {user && user.length > 0 ? (
              <div className="logged-nav">
                <Link
                  to={`/about`}
                  style={{ textDecoration: 'none', color: '#6097BF' }}
                >
                  About
                </Link>
                <Link
                  style={{ marginRight: '15px' }}
                  to={`/userprofiles/${user._id}`}
                >
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
              </div>
            ) : (
              <div>
                <Link
                  to={`/about`}
                  style={{ textDecoration: 'none', color: '#6097BF' }}
                  className="topbarLink"
                >
                  About
                </Link>
                <Link
                  to={`/plans`}
                  style={{ textDecoration: 'none', color: '#6097BF' }}
                  className="topbarLink"
                >
                  Plans
                </Link>
                <Link
                  to={`/login`}
                  style={{ textDecoration: 'none', color: '#6097BF' }}
                  className="topbarLink"
                >
                  Login
                </Link>
                <Link
                  to={`/register`}
                  style={{ textDecoration: 'none', color: '#6097BF' }}
                  className="topbarLink"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ENTopbar;
