import React from 'react';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import mainImage from '../../assets/Rectangle.png'
import './home.css';

const Home = () => {
  return (
    <div>
      <Topbar />
      <div className="homeContainer">
        <img src={mainImage}></img>
      </div>
    </div>
  );
};

export default Home;
