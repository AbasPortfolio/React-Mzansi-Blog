import React, { useContext, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/userContext'

const Login = () => {
  const [userData,setUserData] = useState({
    email: '',
    password: ''
  })
  const[error,setError] = useState('')
  const navigate = useNavigate()

  const {setCurrentUser} = useContext(UserContext)

  const changeInputHandler = (e) =>{
    setUserData(prevState => {
      return {...prevState, [e.target.name]: e.target.value}
    })
  }

  const loginUser = async (e) =>{
      e.preventDefault();
      setError('')
      try {
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/login`, userData);
        const user = await response.data
        setCurrentUser(user);
        navigate('/')
      } catch (error) {
        setError(error.response.data.message)
      }
  }
  return (
    <div className='form login'>
      {error &&<p>{error}</p>}
      <h2 className='title'>
        Welcome Back<span>!!</span> Foodie Lover..
      </h2>
      <div className="blur">
      <form action="" className='register_form' onSubmit={loginUser}>
        <input type='email' placeholder='Your Email' name='email' value={userData.email} onChange={changeInputHandler} />
        <input type="password" placeholder='password' name='password' value={userData.password} onChange={changeInputHandler} />
        <button type='submit'>Login</button>
      </form>
      </div>
    </div>
  )
}

export default Login