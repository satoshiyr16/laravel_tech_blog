import React, { useEffect, useState } from 'react';
import BaseLayout from '@components/front/layouts/BaseLayout';
import WaveEffect from '@components/front/effects/WaveEffect';
import '@css/front/HomePage.css';

function HomePage() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const imageDir = import.meta.env.VITE_FRONT_IMAGE_DIR;
  const [posts, setPosts] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    fetch(`${apiUrl}/posts/recommended`)
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching recommended posts:', error));

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
            <span>雑</span>
            <span>魚</span>
            <span>の</span>
            <span>産</span>
            <span>声</span>
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
        <div className="l-enhancement_section">
          <div className="l-recommend_post_area">
            {posts.map((rec_post) => (
              <div className="rec_post_content fadeIn">
                <a href="#"></a>
                {rec_post.heading_image === null ? (
                  <img className="rec_img" src={`${imageDir}/post.sample.1.png`} alt={rec_post.title} />
                ) : (
                  <img className="rec_img" src={rec_post.heading_image} alt={rec_post.title} />
                )}
                <h2 className="rec_title">{rec_post.title}</h2>
              </div>
            ))}
          </div>
          <div className="l-menu_area">
            <div className="l-search_area"></div>
            <img className="banner_img shaking animation" src={`${imageDir}/zakoubu_home_icatch.png`} alt="サンプル"/>
          </div>
        </div>
        <div className="l-message_area">
          <p className="TextTyping">WEBエンジニアの未経験・ジュニアレベルに役立つ情報を提供</p>
        </div>
      </div>
    </BaseLayout>
  );
}

export default HomePage;
