import React, { useEffect, useState } from 'react'
import image1 from '../assets/picture1.jpg'
import image2 from '../assets/picture2.jpg'
import Footer from '../components/Footer'
import User from './User'
import { Link } from 'react-router-dom'
import Loader from './Loader'
import axios from 'axios'

const ArticlePosts = ({description, title, thumbnail, authorId}) => {
 

  return (
    <section className='main_section art_posts'>
         <article className='article_page'>
         <Link to={'/post/gdhs'}>
            <img src={thumbnail} alt="" />
            <h2 className='title'>{title}</h2>
            <p className='article_description'>
                {description}
            </p>
            <div className='article_user'>
                <p>{authorId}</p>
                <h5>By: Muzi Abas</h5>
            </div>
        </Link>
        </article>
    </section>
  )
}

export default ArticlePosts