// import First from "./Hooks/useState/First";
// import Second from "./Hooks/useState/Second";
// import Example3 from "./Hooks/useState/Example3";
// import UserData from "./Hooks/useEffect/UserData";
// import UseEffect1 from "./Hooks/useEffect/UseEffect1";


// import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
// import Navbar from './Hooks/useEffect/Navbar'
// import User from './Hooks/useEffect/User'
// import Singleuser from './Hooks/useEffect/Singleuser'
// import UserPhoto from './Hooks/Test/UserPhoto'

// import Home from "./Hooks/useEffect/Home";
// import PhotoUser from "./Hooks/useEffect/PhotoUser";

import News from './Hooks/NewsApi/News';
import Navbar from './Hooks/NewsApi/Navbar'
import SearchApi from './Hooks/NewsApi/SearchApi';
import TrendingApi from './Hooks/NewsApi/TrendingApi';
import ErrorPage from './Hooks/NewsApi/ErrorPage';

function App() {
  return (
    <>
      {/* <First/> */}
      {/* <Second/> */}
      {/* <Example3/> */}
      {/* <UserData/> */}
      {/* <UseEffect1/> */}
      {/* <Home/> */}
      {/* <PhotoUser/> */}
      

    
    <Router>
        <Navbar/> 
        <Routes>
         {/* <Route path="/user" element={<User/>}/>
         <Route path="/user/:id" element={<Singleuser/>}/>
         <Route path="/photos" element={<UserPhoto/>}/> */}
          <Route path='/' element={<News/>}/>
         <Route path='/search' element={<SearchApi/>}/>
         <Route path='/trending' element={<TrendingApi/>}/>
         <Route path='*' element={<ErrorPage/>}/> 
        </Routes>
    </Router>
    
  



     
    </>
  );
}

export default App;
