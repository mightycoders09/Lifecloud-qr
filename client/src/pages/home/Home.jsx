import React from 'react';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import mainImage from '../../assets/Rectangle.png';
import { useSearch } from '../../context/SearchContext';
import { Search } from '@material-ui/icons';
import Rectangle6 from '../../assets/Rectangle6.png';
import Rectangle7 from '../../assets/Rectangle7.png';
import Rectangle8 from '../../assets/Rectangle8.png';
import Rectangle9 from '../../assets/Rectangle9.png';
import Rectangle12 from '../../assets/Rectangle9.png';
import Rectangle13 from '../../assets/Rectangle9.png';
import Rectangle14 from '../../assets/Rectangle9.png';
import Rectangle15 from '../../assets/Rectangle9.png';
import Rectangle16 from '../../assets/Rectangle9.png';
import Rectangle17 from '../../assets/Rectangle9.png';

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
      <div className="top-image-container">
        <p className="text-container-home">
          Life is a puzzle made up of pieces Intertwined in the lives of a
          family, Friends, Acquaintances. With the passing of a man from the
          world, The life story dies.
        </p>
        <div>
          <img className="img-350 left-img" src={Rectangle9} alt=""></img>
          <img className="img-350 right-img" src={Rectangle6} alt=""></img>
        </div>
      </div>
      <div className="bottom-image-container">
        <p className="text-container-home">
          Is it possible to connect The puzzle back Or to revive his story?
        </p>
        <div>
          <img className="img-350 left-img" src={Rectangle8} alt=""></img>
          <img className="img-350 right-img" src={Rectangle7} alt=""></img>
        </div>
      </div>
      <div className="popups-container">
        <h1 className="text-container-home">
          Life Book of Lifecloud Lets us assemble The puzzle{' '}
          <strong>using</strong>
        </h1>
      </div>
      <div>
        <div>
          <img src={Rectangle13} alt=""></img>
          <h1>Social Media</h1>
          <p>+</p>
          <p>Read More</p>
        </div>
        <div>
          <img src={Rectangle14} alt=""></img>
          <h1>QR Code</h1>
          <p>+</p>
          <p>Read More</p>{' '}
        </div>
        <div>
          <img src={Rectangle12} alt=""></img>
          <h1></h1>
          <p>+</p>
          <p>Read More</p>{' '}
        </div>
      </div>
      <div>
        <div>
          <img src={Rectangle16} alt=""></img>
          <h1></h1>
          <p>+</p>
          <p>Read More</p>
        </div>
        <div>
          <img src={Rectangle17} alt=""></img>
          <h1></h1>
          <p>+</p>
          <p>Read More</p>{' '}
        </div>
        <div>
          <img src={Rectangle15} alt=""></img>
          <h1></h1>
          <p>+</p>
          <p>Read More</p>{' '}
        </div>
      </div>
    </div>
  );
};

export default Home;
