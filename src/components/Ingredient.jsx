import React, { useEffect, useState } from 'react'
import Image3 from '../assets/picture2.jpg'
import { FaTimesCircle } from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router-dom';

const Ingredient = () => {
    const [close,setClose] = useState(false)
    const[details, setDetails] = useState({})

    const params = useParams();

    useEffect(()=>{
        fetchDetails();
    },[params.id])

    const fetchDetails = async()=>{
        const result = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=70e3687bf80044bdb88e5ebe57a17cd4`)
        const details = await result.json()
        setDetails(details)
    }


    const navigate = useNavigate();
    const closeMe = () =>{
        setClose(!close)
        navigate('/recipes')
    }
  return (
    <div className='super_ingredient'>
        <FaTimesCircle className='close_recipe' onClick={closeMe}/>
        <div className="my_ingredient">
            <div className='summary'>
                <div className="ingredient_instruction">
                    <h3>Serving</h3>
                    <p dangerouslySetInnerHTML={{__html: details.summary}}>
                    </p>
                </div>
                <div className="ingredient_list">
                    <h3>Instructions</h3>
                   <p dangerouslySetInnerHTML={{__html: details.instructions}}></p>
                </div>
            </div>
            <img src={details.image} alt="" />
        </div>
    </div>
  )
}

export default Ingredient