import React, { useEffect, useState } from 'react'
import ImageIngr from '../assets/picture1.jpg'
import { FaTimesCircle } from 'react-icons/fa' 
import { Link, useNavigate, useParams } from 'react-router-dom' 
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';
import Loader from '../components/Loader';

const Recipe = () => {

    const [recipes,setRecipes] = useState([])
    const[isLoading,setIsLoading] = useState(false)

    
    

    useEffect(()=>{
        getRecipe ();
    },[])


    const getRecipe = async () =>{
        setIsLoading(true)
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=70e3687bf80044bdb88e5ebe57a17cd4&number=4`);
        const data = await api.json();
        setRecipes(data.recipes)
        setIsLoading(false)
    }

    if(isLoading){
      <Loader/>
    }
  return (
    <section className='section recipe'>
        
        
            
            
        {recipes.map(recipe=>{
                    
                    return(
                        
                      
                            <div className="ingredient" key={recipe.id}>
                            <h2 className='recipe_title'>{recipe.title}</h2>
                            <Link to={'/ingredient/' + recipe.id} className='recipe_btn'>See Recipe</Link> 
                            <img src={recipe.image} alt="ingredient image" />         
                            </div>
                   
                        
                    )
                })
                }
            
                
                
          
    </section>
  )
}

export default Recipe