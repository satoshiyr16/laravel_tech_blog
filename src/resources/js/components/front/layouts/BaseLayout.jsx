import React from 'react';
import '@scss/Reset.scss';
import ParticlesBackground from '@components/front/animations/ParticleBackground';
import '@scss/Animation.scss';

const BaseLayout = ({ children }) => {
  return (
    <>
      <ParticlesBackground />
      {children}
    </>
  );
};

export default BaseLayout;
