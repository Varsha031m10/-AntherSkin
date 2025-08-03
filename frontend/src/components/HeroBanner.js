import React from 'react';
import bannerImg from '../assets/your-banner-image.jpg'; // Ensure you have the correct image path

const HeroBanner = () => {
  return (
    <section className="hero-banner">
      <img src={bannerImg} alt="AntherSkin Banner" className="banner-img" />
    </section>
  );
};

export default HeroBanner;
