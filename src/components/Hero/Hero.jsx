import React from 'react';
import './Hero.css';
function Hero() {
  return (
    <div className='hero ct'>
      <div className="herotext">
        <h1 className='hero-title'>Transforming Education for a Better Tomorrow</h1>
        <p className='hero-desc'>
          Education empowers growth and opportunity, shaping brighter futures.
          Our platform offers interactive courses and expert guidance in an
          inclusive environment, fostering curiosity and innovation. Join us to
          unlock your true potential with inspiring learning.
        </p>
        <button className='btn hero-btn' >Explore More</button>
      </div>
      {/* Animated background circles */}
      <div className="hero-bg">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Hero;
