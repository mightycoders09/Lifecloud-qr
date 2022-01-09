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
import Rectangle12 from '../../assets/Rectangle12.png';
import Rectangle13 from '../../assets/Rectangle13.png';
import Rectangle14 from '../../assets/Rectangle14.png';
import Rectangle15 from '../../assets/Rectangle15.png';
import Rectangle16 from '../../assets/Rectangle16.png';
import Rectangle17 from '../../assets/Rectangle17.png';
import standart2 from '../../assets/standart2.png';
import basic1 from '../../assets/basic1.png';
import basic2 from '../../assets/basic2.png';
import Premium1 from '../../assets/Premium1.png';
import Poster from '../../assets/Poster.png';
import exampleProfileImage from '../../assets/exampleProfileImage.png';
import Popup from 'reactjs-popup';
import { Player } from 'video-react';
import Slider from 'react-slick';
import './home.css';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    initialSlide: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
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
      <div className="imgs-container">
        <div>
          <Popup
            trigger={
              <div>
                <img className="img-300" src={Rectangle13} alt=""></img>
                <h1>Social Media</h1>
                <p>+</p>
                <p className="button"> Read More </p>
              </div>
            }
            modal
            nested
          >
            {(close) => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header"> Social Media </div>
                <div className="content">
                  {' '}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Atque, a nostrum. Dolorem, repellat quidem ut, minima sint vel
                  eveniet quibusdam voluptates delectus doloremque, explicabo
                  tempore dicta adipisci fugit amet dignissimos?
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consequatur sit commodi beatae optio voluptatum sed eius
                  cumque, delectus saepe repudiandae explicabo nemo nam libero
                  ad, doloribus, voluptas rem alias. Vitae?
                </div>
                <div className="actions">
                  <button
                    className="button"
                    onClick={() => {
                      console.log('modal closed ');
                      close();
                    }}
                  >
                    close modal
                  </button>
                </div>
              </div>
            )}
          </Popup>
        </div>
        <div>
          <Popup
            trigger={
              <div>
                <img className="img-300" src={Rectangle14} alt=""></img>
                <h1>QR Code</h1>
                <p>+</p>
                <p>Read More</p>{' '}
              </div>
            }
            modal
            nested
          >
            {(close) => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header"> QR Code </div>
                <div className="content">
                  {' '}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Atque, a nostrum. Dolorem, repellat quidem ut, minima sint vel
                  eveniet quibusdam voluptates delectus doloremque, explicabo
                  tempore dicta adipisci fugit amet dignissimos?
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consequatur sit commodi beatae optio voluptatum sed eius
                  cumque, delectus saepe repudiandae explicabo nemo nam libero
                  ad, doloribus, voluptas rem alias. Vitae?
                </div>
                <div className="actions">
                  <button
                    className="button"
                    onClick={() => {
                      console.log('modal closed ');
                      close();
                    }}
                  >
                    close modal
                  </button>
                </div>
              </div>
            )}
          </Popup>
        </div>
        <div>
          <Popup
            trigger={
              <div>
                <img className="img-300" src={Rectangle12} alt=""></img>
                <h1>Saving photos&videos</h1>
                <p>+</p>
                <p>Read More</p>{' '}
              </div>
            }
            modal
            nested
          >
            {(close) => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header"> Saving photos&videos </div>
                <div className="content">
                  {' '}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Atque, a nostrum. Dolorem, repellat quidem ut, minima sint vel
                  eveniet quibusdam voluptates delectus doloremque, explicabo
                  tempore dicta adipisci fugit amet dignissimos?
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consequatur sit commodi beatae optio voluptatum sed eius
                  cumque, delectus saepe repudiandae explicabo nemo nam libero
                  ad, doloribus, voluptas rem alias. Vitae?
                </div>
                <div className="actions">
                  <button
                    className="button"
                    onClick={() => {
                      console.log('modal closed ');
                      close();
                    }}
                  >
                    close modal
                  </button>
                </div>
              </div>
            )}
          </Popup>
        </div>
      </div>
      <div className="imgs-container">
        <div>
          <Popup
            trigger={
              <div>
                <img className="img-300" src={Rectangle16} alt=""></img>
                <h1>Wall management</h1>
                <p>+</p>
                <p>Read More</p>
              </div>
            }
            modal
            nested
          >
            {(close) => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header"> Wall management </div>
                <div className="content">
                  {' '}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Atque, a nostrum. Dolorem, repellat quidem ut, minima sint vel
                  eveniet quibusdam voluptates delectus doloremque, explicabo
                  tempore dicta adipisci fugit amet dignissimos?
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consequatur sit commodi beatae optio voluptatum sed eius
                  cumque, delectus saepe repudiandae explicabo nemo nam libero
                  ad, doloribus, voluptas rem alias. Vitae?
                </div>
                <div className="actions">
                  <button
                    className="button"
                    onClick={() => {
                      console.log('modal closed ');
                      close();
                    }}
                  >
                    close modal
                  </button>
                </div>
              </div>
            )}
          </Popup>
        </div>
        <div>
          <Popup
            trigger={
              <div>
                <img className="img-300" src={Rectangle17} alt=""></img>
                <h1>Calendar management</h1>
                <p>+</p>
                <p>Read More</p>{' '}
              </div>
            }
            modal
            nested
          >
            {(close) => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header"> Calendar managemen </div>
                <div className="content">
                  {' '}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Atque, a nostrum. Dolorem, repellat quidem ut, minima sint vel
                  eveniet quibusdam voluptates delectus doloremque, explicabo
                  tempore dicta adipisci fugit amet dignissimos?
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consequatur sit commodi beatae optio voluptatum sed eius
                  cumque, delectus saepe repudiandae explicabo nemo nam libero
                  ad, doloribus, voluptas rem alias. Vitae?
                </div>
                <div className="actions">
                  <button
                    className="button"
                    onClick={() => {
                      console.log('modal closed ');
                      close();
                    }}
                  >
                    close modal
                  </button>
                </div>
              </div>
            )}
          </Popup>
        </div>
        <div>
          <Popup
            trigger={
              <div>
                <img className="img-300" src={Rectangle15} alt=""></img>
                <h1>Graves locations</h1>
                <p>+</p>
                <p>Read More</p>{' '}
              </div>
            }
            modal
            nested
          >
            {(close) => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header"> Graves locations </div>
                <div className="content">
                  {' '}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Atque, a nostrum. Dolorem, repellat quidem ut, minima sint vel
                  eveniet quibusdam voluptates delectus doloremque, explicabo
                  tempore dicta adipisci fugit amet dignissimos?
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consequatur sit commodi beatae optio voluptatum sed eius
                  cumque, delectus saepe repudiandae explicabo nemo nam libero
                  ad, doloribus, voluptas rem alias. Vitae?
                </div>
                <div className="actions">
                  <button
                    className="button"
                    onClick={() => {
                      console.log('modal closed ');
                      close();
                    }}
                  >
                    close modal
                  </button>
                </div>
              </div>
            )}
          </Popup>
        </div>
      </div>
      <Player
        playsInline
        poster={Poster}
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        height="50%"
      />
      <div className="testimonials">
        <Slider {...settings}>
          <div>
            <h3>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </h3>
            <h5>-Idan Mor-</h5>
          </div>
          <div>
            <h3>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s
            </h3>
            <h5>-John Smith-</h5>
          </div>
          <div>
            <h3>
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book.
            </h3>
            <h5>-Michael Garmin-</h5>
          </div>
        </Slider>
      </div>
      <div className="example-profile">
        <a href="#">
          <img
            src={exampleProfileImage}
            alt=""
            className="example-profile-image"
          ></img>
        </a>
      </div>
      <a href="/createprofile" className="creation-btn">
        <div className="profile-div">+ Tap here to create a new profile</div>
      </a>
      <div className="plans-section">
        <h1 className="plans-title">Plans and options for purchase</h1>
        <div className="plans-container">
          <div className="plan-container">
            <img src={basic1} alt=""></img>
            <h1 className="plan-title">LifePage</h1>
            <div className="plan-description">
              <h5>Free</h5>
              <a>+ For more details</a>
            </div>
          </div>
          <div className="plan-container">
            <img src={basic2} alt=""></img>
            <h1 className="plan-title">LifeBook</h1>
            <div className="plan-description">
              <h5>1 Year</h5>
              <a>+ For more details</a>
            </div>
          </div>
          <div className="plan-container">
            <img src={standart2} alt=""></img>
            <h1 className="plan-title">LifeBook</h1>
            <div className="plan-description">
              <h5>5 Years</h5>
              <a>+ For more details</a>
            </div>
          </div>
          <div className="plan-container">
            <img src={Premium1} alt=""></img>
            <h1 className="plan-title">LifeBook</h1>
            <div className="plan-description">
              <h5>Organisation</h5>
              <a>+ For more details</a>
            </div>
          </div>
        </div>
        <div className='link-plans'>+ To the plans and purchase page</div>
      </div>
    </div>
  );
};

export default Home;
