import React from 'react'
import { FaFacebook  } from 'react-icons/fa'
import { FaPinterest  } from 'react-icons/fa'
import { FaDribbble  } from 'react-icons/fa'
import { FaMedium  } from 'react-icons/fa'
import { CiMenuFries } from 'react-icons/ci'
import { NavLink } from 'react-router-dom'

const NavMenu = () => {
  return (
    <nav className='mobile_nav'>
        <div className='nav_btn'>
        <CiMenuFries/>
        </div>
        
        <div className='links'>
            <NavLink to={'/'} className='link'>Home</NavLink>
            <NavLink to={'/articles'} className='link'>Articles</NavLink>
            <NavLink to={'/recipe'} className='link'>Recipes</NavLink>
            <NavLink to={'/about'} className='link'>About</NavLink>

            <FaDribbble className='social_icons'/>
            <FaMedium className='social_icons'/>
            <FaFacebook className='social_icons'/>
            <FaPinterest className='social_icons'/>
        </div>

    </nav>
  )
}

export default NavMenu