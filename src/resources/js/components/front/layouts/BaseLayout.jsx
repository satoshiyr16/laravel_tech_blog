import React from 'react';
import '@css/Reset.css';
import ParticlesBackground from '@components/front/effects/ParticleBackground';
import '@css/Animation.css';

const BaseLayout = ({ children }) => {
  return (
    <>
      <ParticlesBackground />
      {children}
    </>
  );
};

export default BaseLayout;
