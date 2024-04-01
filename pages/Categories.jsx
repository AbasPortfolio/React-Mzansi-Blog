import React, { useEffect, useState } from 'react'
import Image1 from '../assets/picture4.jpg'
import Image3 from '../assets/picture3.jpg'
import Image2 from '../assets/picture5.jpg'
import Image4 from '../assets/picture2.jpg'
import { FaTimesCircle } from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router-dom'

const Categories = () => {
    const [close,setClose] = useState(false)

    const navigate = useNavigate();
    const closeMe = () =>{
        setClose(true)
        navigate('/')
    }

    const [cat,setCat] = useState([]);

    let params = useParams();

    useEffect(()=>{
        getCat(params.type)
    },[params.type]);

    const getCat = async (name) =>{
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=70e3687bf80044bdb88e5ebe57a17cd4&number=4&category=${name}`);
        const data = await api.json();
        setCat(data.results)
    }
  return (
    <>
        <FaTimesCircle className='close_category' onClick={(close)=>closeMe()}/>
        {cat.map((item)=>{
            return(
                <article className='category_article'>
                <div className='card'>
                <img src={item.image} alt="categories image" />
                <h2>{item.title}</h2>
                <button>see recipe</button>
                </div>
                </article>
            )
        })    
        }
        
    </>
  )
}

export default Categories