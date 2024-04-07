import React from 'react';
import SideNav from '@components/admin/layouts/SideNav';
import '@scss/Reset.scss';
import '@scss/Animation.scss';
import '@scss/Icon.scss';
import '@scss/admin/layouts/Layout.scss';

const BaseLayout = ({ children }) => {
  return (
    <div className="l-admin_container">
      <SideNav userName="ユーザー" />
      <div className="l-page_content_area">
        {children}
      </div>
    </div>
  );
};

export default BaseLayout;
