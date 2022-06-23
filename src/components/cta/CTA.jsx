import React from 'react';
import './cta.css';
const CTA = () => {
  return (
    <div className='cta__container'>
      <div className='cta__content'>
        <div className='cta__title'>
          <small>Request Early Access to Get Started</small>
          <h2>Register today & start exploring the endless possiblities.</h2>
        </div>
        <a href='#' className='btn'>
          Get Started
        </a>
      </div>
    </div>
  );
};

export default CTA;
