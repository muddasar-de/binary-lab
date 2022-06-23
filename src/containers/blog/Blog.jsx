import React from 'react';
import './blog.css';
import { Article } from '../../components';
import Blog1 from '../../assets/blog01.png';
import Blog2 from '../../assets/blog02.png';
import Blog3 from '../../assets/blog03.png';
import Blog4 from '../../assets/blog04.png';
import Blog5 from '../../assets/blog05.png';

const Blog = () => {
  return (
    <div className='blog__container'>
      <div className='blog__content'>
        <h1 className='gradient__text'>
          A lot is happening, We are blogging about it.
        </h1>
        <div className='blogs__articles'>
          <div className='primary__article'>
            <Article
              featuredImg={Blog1}
              title='Blog-1'
              date='25 Sep, 2022'
              link='#'
            />
          </div>
          <div className='secondary__article'>
            <Article
              featuredImg={Blog2}
              title='Blog-2'
              date='25 Sep, 2022'
              link='#'
            />
            <Article
              featuredImg={Blog3}
              title='Blog-3'
              date='25 Sep, 2022'
              link='#'
            />
            <Article
              featuredImg={Blog4}
              title='Blog-4'
              date='25 Sep, 2022'
              link='#'
            />
            <Article
              featuredImg={Blog5}
              title='Blog-5'
              date='25 Sep, 2022'
              link='#'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
