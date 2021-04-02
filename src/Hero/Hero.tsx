import React from 'react';
import banner720 from '../img/banner_video/720p.m4v';

const Hero: React.FC = () => (
  <>
    <video autoPlay loop muted playsInline id="hero-video">
      <source src={banner720} type="video/mp4" />
    </video>
  </>
);

export default Hero;
