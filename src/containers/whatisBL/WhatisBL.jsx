import React from 'react';
import './whatisBL.css';
import { Feature } from '../../components';
import VerticalFeature from '../../components/feature/VerticalFeature';
const WhatisBL = () => {
  return (
    <div className='whatisBL__container'>
      <div className='whatisBL__content'>
        <div className='about__whatisBL'>
          <Feature
            title='What is GPT-3'
            description='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'
          />
          <div className='heading__note'>
            <h1 className=' gradient__text'>
              The possibilities are beyond your imagination
            </h1>
            <a href='#' className='explore__link'>
              Explore more...
            </a>
          </div>
        </div>
        <div className='whatisBL__features'>
          <VerticalFeature
            title='Chatbots'
            description='We so opinion friends me message as delight. Whole front do of plate heard oh ought. '
          />
          <VerticalFeature
            title='Knowledgebase'
            description='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
          />
          <VerticalFeature
            title='Education'
            description='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
          />
        </div>
      </div>
    </div>
  );
};

export default WhatisBL;
