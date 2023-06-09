import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import NewNavbar from './NewNavbar'
import Todos from './Todos'
import User from './User'
import Post from './Post'
import State2 from './NewContext/State2'

const MyRoute = () => {
  return (
    <>
       <State2>
       <Router>
         <NewNavbar/>
          <Routes>
             <Route path='/' element={<User/>}/>
             <Route path='/todos' element={<Todos/>}/>
             <Route path='/post' element={<Post/>}/>
          </Routes>
       </Router>
       </State2>
    </>
  )
}

export default MyRoute
