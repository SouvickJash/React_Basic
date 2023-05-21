import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './Navbar'
import User from './User'
import Singleuser from './Singleuser'
const Routing = () => {
  return (
    <>
    <Router>
        <Navbar/>
        <Routes>
         <Route path="/user" element={<User/>}/>
         <Route path="/user/:id" element={<Singleuser/>}/>
        </Routes>
    </Router>
    </>
  )
}

export default Routing