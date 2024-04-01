import React, { useState } from 'react'
import image3 from '../assets/picture3.jpg'
import image4 from '../assets/picture4.jpg'
import image5 from '../assets/picture5.jpg'
import { Link } from 'react-router-dom'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';
import data from '../data'
const Popular = () => {

  return (
    <>
            <article>
            <Link to={'/post/id'}>
              <img src={image3} alt="" />
              <h3>the title of this post</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                ducimus consequuntur molestias exercitationem earum mollitia porro nulla.
              </p>
            </Link>
            </article>
            <article>
            <Link to={'/post/id'}>
              <img src={image4} alt="" />
              <h3>the title of this post</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                ducimus consequuntur molestias exercitationem earum mollitia porro nulla.
              </p>
            </Link>
            </article>
        
    </>
  )
}

export default Popular

{/*
      <article>
          <Link to={'/post/id'}>
            <img src={image3} alt="" />
            <h3>10 Sea Food Recipes You'll Ever Need</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
          </Link>
        </article>
*/}