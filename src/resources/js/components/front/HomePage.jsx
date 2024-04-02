import React, { useEffect, useState } from 'react';
import BaseLayout from '@components/front/layouts/BaseLayout';
import WaveEffect from '@components/front/effects/WaveEffect';
import '@css/front/HomePage.css';

function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const [selectedNav, setSelectedNav] = useState('Home');

  const navItems = [
    { name: 'Home', url: '/' },
    { name: 'Content', url: '/#' },
    { name: 'Search', url: '/#' },
    { name: 'Profile', url: '/#' },
    { name: 'Contact', url: '/#' },
  ];

  return (
    <BaseLayout>
      <div className="l-home_page_area">
        <WaveEffect />
        <div className="l-title_area">
          <h2 className={`title ${isVisible ? '-visible' : ''}`}>
            <span>T</span>
            <span>E</span>
            <span>C</span>
            <span>H</span>
            <span>&nbsp;</span>
            <span>B</span>
            <span>L</span>
            <span>O</span>
            <span>G</span>
          </h2>
        </div>
        <div className="l-nav_area">
          <nav>
            <ul>
              {navItems.map((item) => (
                <li
                  key={item.name}
                  className={selectedNav === item.name ? 'current' : ''}
                  onClick={() => setSelectedNav(item.name)}
                >
                  <a href={item.url}>{item.name}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </BaseLayout>
  );
}

export default HomePage;
