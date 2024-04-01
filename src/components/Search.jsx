import React, { useState } from 'react'
import { FaSearch  } from 'react-icons/fa'

const Search = ({text, setText, handleSearch, post}) => {
  
  return (
    <form className='search_food'>
        <input type="text" placeholder='search here' value={text} onChange={(e)=>{setText(e.target.value); handleSearch()}} />
        <FaSearch className='search_icon'/>
    </form>
)
}

export default Search