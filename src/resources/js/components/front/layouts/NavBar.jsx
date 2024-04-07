import React, { useState } from 'react';
import '@scss/front/layouts/NavBar.scss';

const Navbar = () => {
  const url = import.meta.env.VITE_URL;
  const imageDir = import.meta.env.VITE_FRONT_IMAGE_DIR;
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="l-navbar_container">
      <a href={`${url}/`}>
        <div className="l-logo_title">
          <img className="logo" src={`${imageDir}/logo.png`} alt="logo" />
          <span className="title font_kurenaido">雑魚の産声</span>
          <span className="subtitle font_kurenaido">〜 ジュニアエンジニアの駆け出し記録 〜</span>
        </div>
      </a>

      <div className={`js-openbtn js-smooth_trigger ${isActive ? 'js-active' : ''}`} onClick={toggleActive}>
        <div className="l-openbtn_area">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <nav id="l-nav" className={isActive ? 'js-panelactive' : ''}>
        <div id="l-nav_list">
          <ul>
            <li><a href={`${url}/`}>Home</a></li>
            <li><a href={`${url}/content`}>Content</a></li>
            <li><a href={`${url}/search`}>Search</a></li>
            <li><a href={`${url}/profile`}>Profile</a></li>
            <li><a href={`${url}/content`}>Contact</a></li>
          </ul>
        </div>
      </nav>
      <div className={`js-circle_bg ${isActive ? 'js-circle_active' : ''}`}></div>
    </div>
  );
};

export default Navbar;
