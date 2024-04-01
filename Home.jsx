import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaFacebook  } from 'react-icons/fa'
import { FaPinterest  } from 'react-icons/fa'
import { FaDribbble  } from 'react-icons/fa'
import { FaMedium  } from 'react-icons/fa'
import { FaPenAlt } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { CiMenuFries } from 'react-icons/ci'
import image1 from './assets/picture1.jpg'
import image2 from './assets/picture2.jpg'
import CategoryList from './components/CategoryList'
import Search from './components/Search'
import { CiLogout } from "react-icons/ci";
import { FaSearch  } from 'react-icons/fa'
import Popular from './components/Popular'
import Footer from './components/Footer'
import Login from './components/Login'
import Register from './components/Register'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';
import { UserContext } from './context/userContext'
import Loader from './components/Loader'
import axios from 'axios'




const Home = () => {

    //Burger Menu
    const [open,setOpen] = useState(false)
    const [isLoading,setIsLoading] = useState(false)

    const { currentUser } = useContext(UserContext)

    const [post,setPost] = useState([])


    useEffect(()=>{
        const getPost = async() => {
            setIsLoading(true)
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts`);
            setPost(response.data)
            setIsLoading(false)
        }
        getPost();
    }
    ,[])

    if(isLoading){
        <Loader/>
    }
    const[text,setText] = useState('')
    const handleSearch = () => {
        setPost(post.filter(item => {
            if(item.title.toLowerCase().match(text.toLocaleLowerCase())){
                return item
            }
        }))
        return post
    }
    const [showSearch,setShowSearch] = useState(false)

  return (
    <section className='section'>
        <div className='heading'>
            <div className='search_field'>
                <Search text={text} setText={setText} handleSearch={handleSearch} post={post}/>
            </div>
            {!currentUser?.id &&<div className='join'>
                <Link to={'/login'} className='login'>Login</Link>
                <Link to={'/register'} className='register'>Create Account</Link>
            </div>}
            
            {currentUser?.id &&<div className='loged_user'>
                <div className='write_loger'>
                    <Link to={'/log-out'} className='write'>Logout
                    <CiLogout/></Link>
                </div>         
                <Link to={'/profile'} className='current_user'>{currentUser.name}</Link>
        </div>}
        </div>
        <div className="main_section">
            <nav>
                <h2 className='logo'>Foodie Lover</h2>
                <div className='links'>
                    <NavLink to={'/'} className='link'>Home</NavLink>
                    
                    <NavLink to={'/recipes'} className='link'>Recipes</NavLink>
                    {currentUser?.id &&<NavLink to={'/profile'} className='link'>My Profile</NavLink>}
    
                    <FaDribbble className='social_icons'/>
                    <FaMedium className='social_icons'/>
                    <FaFacebook className='social_icons'/>
                    <FaPinterest className='social_icons'/>
                </div>

                <div className="nav_toggle">
                    <div className="search_btn">
                        {<FaSearch onClick={()=>setShowSearch(!showSearch)}/>}
                    </div>
                    <div className="nav_btn" onClick={()=>{setOpen(!open)}}>
                        {open ? <AiOutlineClose className='nav_close'/>  : <CiMenuFries className='nav_button'/> }
                    </div>
                    
                    {open &&<nav className='mobile_nav'>
                        <div className='link_mobile'>
                            <NavLink to={'/'} className='link'>Home</NavLink>
                            {currentUser?.id &&<NavLink to={'/profile'} className='link'>Profile</NavLink>}
                            <NavLink to={'/recipes'} className='link'>Recipes</NavLink>
                            <NavLink to={'#about'} className='link'>About</NavLink>
                            <div className='social_mobile'>
                            <FaDribbble className='social_icons'/>
                            <FaMedium className='social_icons'/>
                            <FaFacebook className='social_icons'/>
                            <FaPinterest className='social_icons'/>
                            </div>
                            
                        </div>
                    </nav>}

                </div>
            </nav>
            <h2>Mzansi Food Lover's Blog</h2>
            {showSearch &&<input type="text" placeholder='search here' value={text} onChange={(e)=>{setText(e.target.value); handleSearch()}} />}
            <div className='cat_list'>
                <CategoryList/>
            </div>
        
            
            {post &&<div className='hero_section'>
  
                
                {post.map(item=>(
                    <div className="desc" key={item.id}>
                    <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${item.thumbnail}`} alt="food lover" className='hero_img' />
                    <h3 className='title'>{item.title}</h3>
                    <p>{(item.description.length > 80 ? (item.description.substring(0, 80) + " ...") :item.description)}</p>
                    <Link to={`/post/${item._id}`} className='read_more'>Read more</Link>
                </div>
                ))}
            </div>}
            
            
            
        </div>
        {/*<div className='popular'>
                <Popular/>
            </div>*/}
        {/*<div className="footer">
            <Footer/>
    </div>*/}
        
    </section>
  )
}

export default Home