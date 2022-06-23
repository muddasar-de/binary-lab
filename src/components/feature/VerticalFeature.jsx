import React from 'react';

const VerticalFeature = ({ title, description }) => {
  return (
    <div className='vertical__feature__container'>
      <div className='vertical__feature__title'>
        <div className='title__bar' />
        <h1>{title}</h1>
      </div>
      <div className='vertical__feature__description'>
        <small>{description}</small>
      </div>
    </div>
  );
};

export default VerticalFeature;
