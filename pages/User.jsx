import React, { useContext, useEffect } from 'react'
import UserProfile from '../components/UserProfile'
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';

const User = () => {
  const {currentUser} = useContext(UserContext)
  const token = currentUser?.token;
  const navigate = useNavigate()

  //redirect to login page for users who do not have a token
  useEffect(()=>{
    if(!token){
      navigate('/')
    }
  })
  return (
    <UserProfile/>
  )
}

export default User