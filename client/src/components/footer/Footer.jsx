import React from 'react';
import Logo from '../../assets/logo-blue.png';
import './footer.css';
const Footer = () => {
  return (
    <div className="footer">
      <img src={Logo} alt=""></img>
      <div className='footer-links'>
        <span>Q&A</span>
        <span>|</span>
        <span>POLICY</span>
        <span>|</span>
        <span>ABOUT</span>
        <span>|</span>
        <span>CONTACT</span>
      </div>
      <span>(C) all rights reserved to lifecloud-qr.co.il</span>
    </div>
  );
};

export default Footer;
