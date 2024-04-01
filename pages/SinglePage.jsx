import React, { useContext, useEffect, useState } from 'react'
import image1 from '../assets/picture1.jpg'
import CategoryList from '../components/CategoryList'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { FaFacebook  } from 'react-icons/fa'
import { FaPinterest  } from 'react-icons/fa'
import { FaDribbble  } from 'react-icons/fa'
import { FaMedium  } from 'react-icons/fa'
import Footer from '../components/Footer'
import User from '../components/User'
import { UserContext } from '../context/userContext'
import axios from 'axios'
import Loader from '../components/Loader'

const SinglePage = () => {
    const {id} = useParams();
    const [posts,setPosts] = useState(null)
    const [error,setError] = useState(null)
    const [isLoading,setIsLoading] = useState(false)

    const {currentUser} = useContext(UserContext)
    const token = currentUser?.token
    const navigate = useNavigate();

    useEffect(()=>{
        const getPost = async()=>{
            try {
                setIsLoading(true)
                const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/${id}`)
                setPosts(response.data)
            } catch (error) {
                setError(error)
            }
            setIsLoading(false)
        }
        getPost();
        if(!token){
            navigate('/login')
        }
    }
    ,[])

    if(isLoading){
        <Loader/>
    }

  return (
    <>
    
        {posts &&<section className='single_post'>
                <nav className='single_post-nav'>
                    <h2 className='logo'>Foodie Lover</h2>
                    <div className='links'>
                        <Link to={'/'} className='link'>Home</Link>
                        <Link to={'/recipes'} className='link'>Recipes</Link>
                        <Link to={'/profile'} className='link'>My Profile</Link>
                       
        
                        <FaDribbble className='social_icons'/>
                        <FaMedium className='social_icons'/>
                        <FaFacebook className='social_icons'/>
                        <FaPinterest className='social_icons'/>
                    </div>
                </nav>
        
            <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${posts.thumbnail}`} alt="" />
            
            <h2 className='title'>{posts.title}</h2>
    
            
            <p className='description'>{posts.description}</p>
        </section>}
    </>
  )
}

export default SinglePage