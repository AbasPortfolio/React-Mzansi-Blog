import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {

  const [Userdetails,setUserDetails] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const[error,setError] = useState('')
  const navigate = useNavigate()

  const changeInputHandler = (e) =>{
    setUserDetails(prevState => {
      return {...prevState, [e.target.name]: e.target.value}
    })
  }

  const registerUser = async (e)=>{
    e.preventDefault();
    setError('')
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/register`, Userdetails)
      const newUser = await response.data;
      if(!newUser){
        setError("couldn't register user. please try again.")
      }
      navigate('/login')
    } catch (error) {
      setError(error.response.data.message)
    }
  }



  return (
    <div className='form'>
      <h2 className='title'>
        Hello Foodie Lover..
      </h2>
      {error && <p>{error}</p>}
      <div className="blur">
      <form action="" className='register_form' onSubmit={registerUser}>
        <input type="text" placeholder='Enter Your Name' name='name' value={Userdetails.name} onChange={changeInputHandler}/>
        <input type='email' placeholder='Enter Your Email' name='email' value={Userdetails.email} onChange={changeInputHandler} />
        <input type="password" placeholder='Type Password' name='password' value={Userdetails.password} onChange={changeInputHandler}/>
        <input type="password" placeholder='Confirm Password' name='password2' value={Userdetails.password2} onChange={changeInputHandler}/>
        <button type='submit'>Register</button>
      </form>
      </div>
      
    </div>
  )
}

export default Register