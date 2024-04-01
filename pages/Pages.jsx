import React from 'react'
import Home from '../Home'
import Recipe from './Recipe'
import Categories from './Categories'
import { Routes, Route } from 'react-router-dom'
import SinglePage from './SinglePage'
import Log from './Log'
import Registration from './Registration'
import Article from './Article'
import Write from './Write'
import User from './User'
import Ingrednts from './Ingrednts'
import Logout from './Logout'
import Dashboard from './Dashboard'
import Edit from './Edit'

const Pages = () => {
  return (
    <>
        <Routes>
            <Route exact path='/' element={  <Home />}></Route>
        </Routes>
        <Routes>
            <Route path='/recipes' element={<Recipe/>}></Route>
        </Routes>
       {
        /* <Routes>
            <Route path='/category/:type' element={<Categories/>}></Route>
        </Routes>*/
        }
        <Routes>
            <Route path='/ingredient/:id' element={<Ingrednts/>}></Route>
        </Routes>
        <Routes>
            <Route path='/settings' element={<Dashboard/>}></Route>
        </Routes>
        <Routes>
            <Route path='/articles' element={<Article/>}></Route>
        </Routes>
        <Routes>
            <Route path='/post/:id' element={<SinglePage/>}></Route>
        </Routes>
        <Routes>
            <Route path='/write' element={<Write/>}></Route>
        </Routes>
        <Routes>
            <Route path='/edit-post' element={<Edit/>}></Route>
        </Routes>
        <Routes>
            <Route path='/profile' element={<User/>}></Route>
        </Routes>
        <Routes>
            <Route path='/login' element={<Log/>}></Route>
        </Routes>
        <Routes>
            <Route path='/register' element={<Registration/>}></Route>
        </Routes>
        <Routes>
            <Route path='/log-out' element={<Logout/>}></Route>
        </Routes>
    </>
  )
}

export default Pages