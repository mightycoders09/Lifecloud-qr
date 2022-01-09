import React from 'react';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import mainImage from '../../assets/Rectangle.png';
import { useSearch } from '../../context/SearchContext';
import { Search } from '@material-ui/icons';
import './home.css';

const Home = () => {
  const { searchText, setSearchText } = useSearch();
  return (
    <div>
      <Topbar />
      <div className="homeContainer">
        <img src={mainImage} alt="mainImage" className="main-image"></img>
      </div>
      <div className="search-container">
        <div className="searchbar-container">
          <div className="searchbar searchbar-2">
            <Search className="searchIcon" />
            <input
              type="text"
              placeholder="Search for Friends"
              className="SearchInput"
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
        </div>
        <Sidebar> </Sidebar>
      </div>
    </div>
  );
};

export default Home;
