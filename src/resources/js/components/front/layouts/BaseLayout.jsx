import React from 'react';
import '@css/reset.css';
import ParticlesBackground from '@components/front/effects/ParticleBackground';

const BaseLayout = ({ children }) => {
  return (
    <>
      <ParticlesBackground />
      {children}
    </>
  );
};

export default BaseLayout;
