import React, { useContext, useEffect, useState } from 'react'
import UserImg from '../assets/picture2.jpg'
import { FaEdit, FaCheck } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/userContext'
import axios from 'axios'

const UserProfile = () => {
  const [avatar,setAvatar] = useState("")
  const[name,setName] = useState("")
  const[email,setEmail] = useState("")
  const[currentPassword,setCurrentPassword] = useState("")
  const[newPassword,setNewPassword] = useState("")
  const[confirmNewPassword,setConfirmNewPassword] = useState("")
  const[error,setError] = useState('')

  const {currentUser} = useContext(UserContext)
  const token = currentUser?.token;
  const navigate = useNavigate()

  //redirect to login page for users who do not have a token
  useEffect(()=>{
    if(!token){
      navigate('/')
    }
  })

  useEffect(()=>{
    const getUser = async()=>{
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/${currentUser.id}`, 
      {withCredentials: true, headers: {Authorization: `Bearer ${token}`}})

      const {name, email, avatar} = response.data;
      setName(name)
      setEmail(email)
      setAvatar(avatar)
    }
    getUser();
  })

  const changeAvatatHandler = async()=>{
    try {
      const postData = new FormData()
      postData.set("avatar", avatar)
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/change-avatar`, postData, {withCredentials: true,
      headers: {Authorization: `Bearer ${token}`}})
      setAvatar(response?.data.avatar)
    } catch (error) {
      console.log(error)
    }
  }

  const updateUser = async (e) => {
      e.preventDefault();
      try {
        const userData = new FormData()
        userData.set('name', name)
        userData.set('email', email)
        userData.set('currentPassword', currentPassword)
        userData.set('newPassword', newPassword)
        userData.set('confirmNewPassword', confirmNewPassword)
  
        const response = await axios.patch(`${process.env.REACT_APP_BASE_URL}/users/edit-user`, userData, {withCredentials: true, headers: {Authorization: `Bearer ${token}`}})
        if(response){
          // log the user out
          navigate('/log-out')
        }
      } catch (error) {
        setError(error.response.data.message)
      }
  }

  return (
    <section className="profile">
      <div className="container profile_container">
        <Link to={'/log-out'} className='btn'>Log Out</Link>

        <div className="profile_details">
          <div className="avatar_wrapper">
           
            {/* Form to update avatar */}
            {/*<form className='avatar_form'>
            {currentUser.avatar && <div className="profile_avatar">
              <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${avatar}`} alt="" />
            </div>}
              <input type="file" name='avatar' id='avatar' accept='png, jpg, jpeg' onChange={(e)=>setAvatar(e.target.files[0])} />
              <label htmlFor="avatar"><FaEdit /></label>
            </form>*/}
          </div>
          {/*<button className='profile_avatar-btn'><FaCheck onClick={changeAvatatHandler}/></button>*/}
          <h2 className='title'>{currentUser.name}</h2>
        </div>
        <form className="profile_form" onSubmit={updateUser}>
          {error &&<p className='form__error-message'>{error}</p>}
          <input type="text" placeholder='Full Name' value={name} onChange={e=>setName(e.target.value)} />
          <input type="email" placeholder='Email Address' value={email} onChange={e=>setEmail(e.target.value)} />
          <input type="password" placeholder='Enter Current Password' value={currentPassword} onChange={e=>setCurrentPassword(e.target.value)} />
          <input type="password" placeholder='Enter New Password' value={newPassword} onChange={e=>setNewPassword(e.target.value)} />
          <input type="password" placeholder='Confirm New Password' value={confirmNewPassword} onChange={e=>setConfirmNewPassword(e.target.value)} />
          <button type='submit' className='btn_update'>Update details</button>
        </form>

      </div>
    </section>
  )
}

export default UserProfile