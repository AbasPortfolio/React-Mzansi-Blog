import React, { useEffect, useState } from 'react'
import image2 from '../assets/picture2.jpg'
import axios from 'axios'

const User = () => {
  
  return (
    <div className='user'>
        <div className='created_date'>
            <p><strong>post created: </strong>Just Now</p>
            <h5>Author: Muzi</h5>
        </div>
    </div>
  )
}

export default User