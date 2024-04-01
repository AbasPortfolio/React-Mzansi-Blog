import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook  } from 'react-icons/fa'
import { FaPinterest  } from 'react-icons/fa'
import { FaDribbble  } from 'react-icons/fa'
import { FaMedium  } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
        <div className='footer_link'>
            <Link>Recipes</Link>
            <Link>About</Link>
            <Link>Home</Link>
        </div> 
        <h4>all copyrights&copy; are reserved to abas</h4>    
        <div className='social_links'>
            <Link to={'/dribble.com'} target='_blank'><FaDribbble/></Link>
            <Link to={'/dribble.com'} target='_blank'><FaFacebook/></Link>
            <Link to={'/dribble.com'} target='_blank'><FaMedium/></Link>
            <Link to={'/dribble.com'} target='_blank'><FaPinterest/></Link>
        </div>

    </footer>
  )
}

export default Footer