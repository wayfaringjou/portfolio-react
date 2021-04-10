/* eslint-disable quote-props */
import React from 'react';
import banner from '../img/banner_video/banner.m4v';

const Hero: React.FC = () => (
  <section className="video__banner">
    <video autoPlay loop muted playsInline id="hero-video">
      <source src={banner} type="video/mp4" />
    </video>
  </section>
);

export default Hero;
