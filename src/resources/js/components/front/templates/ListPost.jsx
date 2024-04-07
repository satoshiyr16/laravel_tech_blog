import React from 'react';
import BaseLayout from '@components/front/layouts/BaseLayout';
import NavBar from '@components/front/layouts/NavBar';
import { Helmet } from 'react-helmet';
import '@scss/front/HomePage.scss';

function PostList() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const imageDir = import.meta.env.VITE_FRONT_IMAGE_DIR;

  return (
    <BaseLayout>
      <Helmet>
        <title>-投稿リスト- 雑魚の産声</title>
      </Helmet>
      <NavBar></NavBar>
    </BaseLayout>
  );
}

export default PostList;
