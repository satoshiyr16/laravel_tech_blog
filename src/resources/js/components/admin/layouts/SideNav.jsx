import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from '@components/admin/auth/LogoutButton';
import '@scss/admin/layouts/SideNav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faHouse, faEnvelopeOpenText, faFile, faMagnifyingGlass, faChartSimple, faStar, faUser, faEnvelope, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const SideNav = ({ userName }) => {
  const url = import.meta.env.VITE_URL;
  const icons = {
    'fa-circle-user': faCircleUser,
    'fa-house': faHouse,
    'fa-envelope-open-text': faEnvelopeOpenText,
    'fa-file': faFile,
    'fa-magnifying-glass': faMagnifyingGlass,
    'fa-chart-simple': faChartSimple,
    'fa-star': faStar,
    'fa-user': faUser,
    'fa-envelope': faEnvelope,
    'fa-right-from-bracket': faRightFromBracket
  };

  const navLinks = [
    { path: 'admin', label: 'ホーム', icon: 'fa-house' },
    { path: 'admin/addPost', label: '投稿一覧', icon: 'fa-envelope-open-text' },
    { path: 'admin', label: '新規投稿', icon: 'fa-file' },
    { path: 'admin', label: '検索', icon: 'fa-magnifying-glass' },
    { path: 'admin', label: 'データ', icon: 'fa-chart-simple' },
    { path: 'admin', label: 'おすすめ記事設定', icon: 'fa-star' },
    { path: 'admin', label: 'プロフィール', icon: 'fa-user' },
    { path: 'admin', label: 'お問い合わせ', icon: 'fa-envelope' },
    { path: 'admin/logout', label: 'ログアウト', icon: 'fa-right-from-bracket', type:'logout' },
  ];

  return (
    <div className="l-admin_nav_area">
      <Link to={`${url}/admin`}>
        <div className="nav_title">
          <h2>管理画面</h2>
          <p>~ 雑魚の産声 ~</p>
        </div>
      </Link>
      <div className="user_info">
        <div className="login_user">
          <FontAwesomeIcon icon={icons['fa-circle-user']} className="i_user fa-4x" />
          <p>{userName ? `${userName} さん` : 'テスト さん'}</p>
        </div>
      </div>
      <nav className="l-nav">
        <ul>
          {navLinks.map((link, index) => (
            link.type === 'logout' ? (
              <LogoutButton key={index}>
                {({ onLogout }) => (
                <li>
                  <a onClick={(e) => { e.preventDefault(); onLogout(e); }}>
                    <FontAwesomeIcon icon={icons[link.icon]} className="nav_icon" />
                    <span className="nav_label">{link.label}</span>
                  </a>
                </li>
                )}
              </LogoutButton>
            ) : (
              <li key={index}>
                <Link to={`${url}/${link.path}`}>
                  <FontAwesomeIcon icon={icons[link.icon]} className="nav_icon" />
                  <span className="nav_label">{link.label}</span>
                </Link>
              </li>
            )
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideNav;
