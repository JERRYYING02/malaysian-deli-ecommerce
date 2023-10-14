import React from 'react';
import { AiFillInstagram, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>JerryYing @ All rights reserved</p>
      <p className="icons">
        <a href="https://www.linkedin.com/in/jerry-chng001/" target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin />
        </a>
      </p>
    </div>
  )
}

export default Footer;
