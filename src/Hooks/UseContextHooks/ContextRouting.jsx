import React from 'react'
import Result from './Result'
import AboutUser from './AboutUser'
import Navbar from './Navbar'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import ContexState from './Context/ContexState'

const ContextRouting = () => {
  return (
    <>
        <ContexState> 
               <Router>
                 <Navbar/>
                <Routes>
                   <Route path='/' element={<Result/>}/>
                   <Route path='/about' element={<AboutUser/>}/>
                   
                </Routes>
            </Router>
        </ContexState>
    </>
  )
}

export default ContextRouting
