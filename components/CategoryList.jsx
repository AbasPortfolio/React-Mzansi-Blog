import React from 'react'
import { Link } from 'react-router-dom' 
const CategoryList = () => {
  return (
    <div className='categories'>
        <Link to={'#pizza'} className='cat_link'>pizza</Link>
        <Link to={'#chicken'} className='cat_link'>chicken</Link>
        <Link to={'#spinach'} className='cat_link'>spinach</Link>
        <Link to={'#steak'} className='cat_link'>steak</Link>
        <Link to={'#waffle'} className='cat_link'>cyrup waffles</Link>
        <Link to={'#vegan'} className='cat_link'>pasta</Link>
    </div>
  )
}

export default CategoryList