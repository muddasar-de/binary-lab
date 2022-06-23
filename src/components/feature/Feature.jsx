import React from 'react';
import './feature.css';
const Feature = ({ title, description }) => {
  return (
    <div className='feature__container'>
      <div className='feature__title'>
        <div className='title__bar' />
        <h1>{title}</h1>
      </div>
      <div className='feature__description'>
        <small>{description}</small>
      </div>
    </div>
  );
};
export default Feature;
