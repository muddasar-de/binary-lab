import React from 'react';
import './possibility.css';

import PossibilityBanner from '../../assets/possibility.png';
const Possibility = () => {
  return (
    <div className='possibility__container'>
      <div className='possiblity__content'>
        <div className='possibility__banner'>
          <img src={PossibilityBanner} alt='Possibility Banner' />
        </div>
        <div className='possibility__info'>
          <small>Request Early Access to Get Started</small>
          <h1 className='gradient__text'>
            The possibilities are beyond your imagination
          </h1>
          <small>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </small>
          <br />
          <a href='#'>Request Early Access to Get Started</a>
        </div>
      </div>
    </div>
  );
};

export default Possibility;
