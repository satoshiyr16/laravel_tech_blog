import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import BaseLayout from '@components/front/layouts/BaseLayout';
import WaveEffect from '@components/front/animations/WaveEffect';
import TextTyping from '@components/front/animations/TextTyping';
import FadeIn from '@components/front/animations/FadeIn';
import { Helmet } from 'react-helmet';
import '@scss/front/HomePage.scss';

function HomePage() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const imageDir = import.meta.env.VITE_FRONT_IMAGE_DIR;
  const [recPosts, setRecPosts] = useState([]);
  const [newPosts, setNewPosts] = useState([]);
  const [tagPosts, setTagPosts] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);

  useEffect(() => {
    fetch(`${apiUrl}/posts`)
      .then(response => response.json())
      .then(data => {
        setRecPosts(data.recommend);
        setNewPosts(data.new);
        setTagPosts(data.tag);
      })
      .catch(error => console.error('Error fetching recommended posts:', error));

    setIsVisible(true);
    const startAnimeSubtitle = setTimeout(() => {
      setShowSubtitle(true);
    }, 500);

    return () => clearTimeout(startAnimeSubtitle);
  }, []);

  const [selectedNav, setSelectedNav] = useState('Home');

  const navItems = [
    { name: 'Home', url: '/' },
    { name: 'Content', url: '/content' },
    { name: 'Search', url: '/search' },
    { name: 'Profile', url: '/profile' },
    { name: 'Contact', url: '/contact' },
  ];

  return (
    <BaseLayout>
      <Helmet>
        <title>-ホーム- 雑魚の産声</title>
      </Helmet>
      <div className="l-home_page_area">
        <WaveEffect />
        <div className="l-title_area">
          <h2 className={` title ${isVisible ? '-visible' : ''}`}>
            <span>雑</span>
            <span>魚</span>
            <span>の</span>
            <span>産</span>
            <span>声</span>
          </h2>
          {showSubtitle && <p className="subtitle font_kurenaido fadeRight">〜 ジュニアエンジニアの駆け出し記録 〜</p>}
        </div>
        <div className="l-nav_area">
          <nav>
            <ul>
              {navItems.map((item,index) => (
                <li
                  key={index}
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
          <div className="l-recommend_post_area fadeIn">
            {recPosts.map((rec_post, index) => (
              <div className="rec_post_content fadeIn" key={index}>
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
            <FadeIn className="l-search_area"></FadeIn>
            <img className="banner_img shaking ShakeAnimation" src={`${imageDir}/zakoubu_home_icatch.png`} alt="サンプル" />
          </div>
        </div>
        <div className="l-message_area">
          <TextTyping className="text_typing" text="このブログは1から、LaravelとReactで作成しています" />
        </div>
        <div className="l-post_filter_section">
          <div className="l-pos_fil_display">
            <p className="pos_fil_area_title">NEW</p>
            <div className="pos_fil_con_area">
              {newPosts.map((new_post, index) => (
                <a href="" key={index}>
                  <div className="pos_fil_content">
                    {new_post.heading_image === null ? (
                      <img className="pos_fil_img" src={`${imageDir}/post.sample.1.png`} alt={new_post.title} />
                    ) : (
                      <img className="pos_fil_img" src={new_post.heading_image} alt={new_post.title} />
                    )}
                    <p className="pos_fil_title">{new_post.title}</p>
                    <p className="pos_fil_date">
                      {format(new Date(new_post.updated_at), 'yyyy/MM/dd')}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="l-pos_fil_display">
            <p className="pos_fil_area_title">Programing</p>
            <div className="pos_fil_con_area">
              {tagPosts.map((tag_post, index) => (
                <a href="" key={index}>
                  <div className="pos_fil_content">
                    {tag_post.heading_image === null ? (
                      <img className="pos_fil_img" src={`${imageDir}/post.sample.1.png`} alt={tag_post.title} />
                    ) : (
                      <img className="pos_fil_img" src={tag_post.heading_image} alt={tag_post.title} />
                    )}
                    <p className="pos_fil_title">{tag_post.title}</p>
                    <p className="pos_fil_date">
                      {format(new Date(tag_post.updated_at), 'yyyy/MM/dd')}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="l-profile_area">
          <div className="l-prof_display">
            <p className="prof_title">Profile</p>
            <div className="prof_content"></div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}

export default HomePage;
