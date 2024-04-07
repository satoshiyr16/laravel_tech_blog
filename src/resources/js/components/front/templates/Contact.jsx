import React from 'react';
import BaseLayout from '@components/front/layouts/BaseLayout';
import NavBar from '@components/front/layouts/NavBar';
import '@scss/front/HomePage.scss';

function PostList() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const imageDir = import.meta.env.VITE_FRONT_IMAGE_DIR;

  return (
    <BaseLayout>
      <NavBar></NavBar>
    </BaseLayout>
  );
}

export default PostList;
