import React, { useContext, useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useNavigate } from 'react-router-dom'
import UserContext from '../context/userContext'
import axios from 'axios'



const Write = () => {

  const modules = {
    toolbar: [
      [{'header': [1,2,3,4,5,6, false]}],
      ['bold','italic','underline','strike','blockquote'],
      [{'list':'ordered'},{'list':'bullet'},{'indent':'-1'},{'indent':'+1'}],
      ['link','image'],
      ['clean']
    ],
  }
  
  const formats = [
    'header','bold','italic','underline','strike','blockquote','list','bullet','indent','link','image'
  ]
 
  const currentUser = useContext(UserContext)
  const token = currentUser?.token
  const navigate = useNavigate()
  const[title,setTitle] = useState('')
  const[description,setDescription] = useState('')
  const[thumbnail,setThumbnail] = useState('')
  const[error,setError] = useState(null)

  useEffect(()=>{
    if(!token){
      navigate('/login')
    }
  })

  const createPost = async(e)=>{
    e.preventDefault();
    const postData = new FormData()
    postData.set('title', title)
    postData.set('description', description)
    postData.set('thumbnail', thumbnail)

    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/posts`, postData,{withCredentials: true, headers:{Authorization: `Bearer ${token}`}})
      if(response.status ==201){
        navigate('/')
      }
    } catch (error) {
      setError(error.response.data.message)
    }
  }


  return (
    <div className='write_post'>
      <div className="container">
        <h2>Create Post</h2>
        {error &&<p>{error}</p>}
        <form className="create_input-form" onSubmit={createPost}>
         
          <input type="text" placeholder='Title' value={title} onChange={setTitle} />
          
          <ReactQuill modules={modules} formats={formats} className='quill' value={description} onChange={setDescription}  />
            <input type="file"  accept='png, jpg, jpeg' onChange={(e)=>setThumbnail(e.target.files[0])} />
            <button type='submit' className='btn primary'>Create</button>
        </form>
      </div>
    </div>
  )
}

export default Write