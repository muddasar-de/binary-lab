import React from 'react';
import './article.css';
const Article = ({ featuredImg, date, title, link }) => {
  return (
    <div className='article__container'>
      <div className='article__content'>
        <img src={featuredImg} alt='Featured_image' />
        <div className='article__info'>
          <div className='article__text'>
            <small>{date}</small>
            <h2>{title}</h2>
          </div>
          <div className='article__link'>
            <a href='#'>Read full article</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
