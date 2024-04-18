import React from 'react';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEnvelopeOpenText,
    faFile,
    faChartSimple,
    faMagnifyingGlass,
    faStar,
    faUser,
    faEnvelope,
    faRightFromBracket
} from '@fortawesome/free-solid-svg-icons';
import '@scss/admin/templates/AdminHome.scss';
import BaseLayout from '@components/admin/layouts/BaseLayout';
import LogoutButton from '@components/admin/auth/LogoutButton';

const AdminHomePage = () => {
    const homePageIcons = {
        'fa-envelope-open-text': faEnvelopeOpenText,
        'fa-file': faFile,
        'fa-magnifying-glass': faMagnifyingGlass,
        'fa-chart-simple': faChartSimple,
        'fa-star': faStar,
        'fa-user': faUser,
        'fa-envelope': faEnvelope,
        'fa-right-from-bracket': faRightFromBracket,
    };

    const navItems = [
        { path: 'admin', label: '投稿一覧', icon: 'fa-envelope-open-text', className:'i_content' },
        { path: 'admin/addPost', label: '新規投稿', icon: 'fa-file', className:'i_post' },
        { path: 'admin', label: '検索', icon: 'fa-magnifying-glass', className:'i_search' },
        { path: 'admin', label: 'データ', icon: 'fa-chart-simple', className:'i_graph' },
        { path: 'admin', label: 'おすすめ記事設定', icon: 'fa-star', className:'i_favorite' },
        { path: 'admin', label: 'プロフィール', icon: 'fa-user', className:'i_profile' },
        { path: 'admin', label: 'お問い合わせ', icon: 'fa-envelope', className:'i_mail' },
        { path: 'admin/logout', label: 'ログアウト', icon: 'fa-right-from-bracket', className:'i_logout', type:'logout' },
    ];

    return (
        <BaseLayout>
            <Helmet>
                <title>-管理ホーム- 雑魚の産声</title>
            </Helmet>
            <div className="l-admin_home_area">
                <div className="l-content_area">
                    {navItems.map((item, index) => {
                        if (item.type === 'logout') {
                            return (
                                <LogoutButton key={index}>
                                    {({ onLogout }) => (
                                        <a className="con_link parent_rotation" onClick={onLogout}>
                                            <FontAwesomeIcon icon={homePageIcons[item.icon]} className={`fa-8x rotation ${item.className}`} />
                                            <p>{item.label}</p>
                                        </a>
                                    )}
                                </LogoutButton>
                            );
                        } else {
                            return (
                                <a key={index} className="con_link parent_rotation" href={item.path}>
                                    <FontAwesomeIcon icon={homePageIcons[item.icon]} className={`fa-8x rotation ${item.className}`} />
                                    <p>{item.label}</p>
                                </a>
                            );
                        }
                    })}
                </div>
            </div>
        </BaseLayout>
    );
};

export default AdminHomePage;
