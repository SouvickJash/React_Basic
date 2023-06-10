import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import HomePage from './Components/HomePage'
import UpdateUser from './Components/UpdateUser'
import AddUser from './Components/AddUser'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CrudRouting = () => {
  return (
    <>
    <ToastContainer />
      <Router>
         <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/adduser' element={<AddUser/>}/>
            <Route path='/update/:id' element={<UpdateUser/>}/>
         </Routes>
      </Router>
    </>
  )
}

export default CrudRouting
