import React from 'react';
import './header.css';
import HeaderBanner from '../../assets/ai.png';
import People from '../../assets/people.png';
import Google from '../../assets/google.png';
import Atlassian from '../../assets/atlassian.png';
import Dropbox from '../../assets/dropbox.png';
import Shopify from '../../assets/shopify.png';
import Slack from '../../assets/slack.png';

const clientLogos = [Google, Atlassian, Dropbox, Shopify, Slack];

const Header = () => {
  return (
    <div className='header__container ' id='home'>
      <div className='header__content'>
        <div className='content__description '>
          <h1 className='gradient__text'>
            Let’s Build Something amazing with GPT-3 OpenAI
          </h1>
          <small>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </small>
          <div className='subscribe__container'>
            <input type='text' placeholder='Enter email address...' />
            <a href='#' className='btn'>
              Get Started
            </a>
          </div>
          <div className='people'>
            <img src={People} />
            <small> 1600 people go through this...</small>
          </div>
        </div>
        <div className='content__graphics'>
          <img src={HeaderBanner} alt='Banner' />
        </div>
      </div>
      <div className='header__client__logos'>
        {clientLogos.map((logo, key) => {
          return <img src={logo} alt='Client-Logo' />;
        })}
      </div>
    </div>
  );
};

export default Header;
