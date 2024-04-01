import React from 'react'
import image2 from '../assets/picture2.jpg'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className="dashboard">
        <div className='user_profile'>
            <h2>Name of the user</h2>
            <img src={image2} alt="" />
        </div>
    
    <div className='setting_btns'>
        <Link to={'/edit-post'}>Edit</Link>
        <Link to={'/post/gfhsg'}>View</Link>
        <Link to={'/delete'}>Delete</Link>
    </div>
    </div>
  )
}

export default Dashboard