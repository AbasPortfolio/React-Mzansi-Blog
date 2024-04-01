import React, { useEffect, useState } from 'react'
import ArticlePosts from '../components/ArticlePosts'
import Loader from '../components/Loader'
import axios from 'axios'

const Article = ({title, description, thumbnail}) => {
  const [posts,setPosts] = useState([])
  const [isLoading,setIsLoading] = useState(false)

  useEffect(()=>{
      const fetchPosts = async()=>{
          setIsLoading(true);
          try {
              const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/`)
              setPosts(response.data)
          } catch (error) {
              console.log(error)
          }
          setIsLoading(false)
      }
      fetchPosts()
  },[])
  if(isLoading){
      return(
          <Loader/>
      )
  }
  return (
    <div>
    {posts.length < 0 ? <div className="posts_container">
      {
        posts.map(({id, thumbnail, title, description, authorId})=>
          <ArticlePosts key={id} authorId={authorId} title={title} description={description} thumbnail={thumbnail}/>
        )
      }
      
    </div>: <p>No Posts</p>}
    </div>
  )
}

export default Article