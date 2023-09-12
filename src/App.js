// import UpdateClass from './Hooks/ClassComponent/UpdateClass';
// import HocDemo from './Hooks/Hoc/HocDemo';

// import CrudRouting from './Crud/CrudRouting';

// import MyRouter from './Hooks/HomeWork/MyRouter';
import './index.css'
// import First from "./Hooks/useState/First";
import Second from "./Hooks/useState/Second";
// import Example3 from "./Hooks/useState/Example3";
// import UserData from "./Hooks/useEffect/UserData";
// import UseEffect1 from "./Hooks/useEffect/UseEffect1";

// import React from 'react'
import { BrowserRouter as Router,Routes, } from 'react-router-dom'
// import Navbar from './Hooks/useEffect/Navbar'
// import User from './Hooks/useEffect/User'
// import Singleuser from './Hooks/useEffect/Singleuser'
// import UserPhoto from './Hooks/Test/UserPhoto'

// import Home from "./Hooks/useEffect/Home";
// import PhotoUser from "./Hooks/useEffect/PhotoUser";

// import News from './Hooks/NewsApi/News';
// import Navbar from './Hooks/NewsApi/Navbar'
// import SearchApi from './Hooks/NewsApi/SearchApi';
// import TrendingApi from './Hooks/NewsApi/TrendingApi';
// import ErrorPage from './Hooks/NewsApi/ErrorPage';
// import { Route } from 'react-router-dom';

// import Product from './Hooks/Pages/Product';
// import ProductDetails from './Hooks/Pages/ProductDetails';

// import Example from './Hooks/UseReducer/Example';
// import Mui from './Mui';

// import Result from './Hooks/UseContextHooks/Result';

// import ContextRouting from './Hooks/UseContextHooks/ContextRouting';
// import Api from './Hooks/UseContextHooks/Context/Api';
// import ContexState from './Hooks/UseContextHooks/Context/ContexState';
//import ContaxState1 from './Hooks/UseContextHooks/Context/ContaxState1';

// import MyRoute from "./Hooks/UseContextHome/MyRoute";



function App() {
  return (
    <>
      {/* <First/> */}
      <Second/>
      {/* <Example3/> */}
      {/* <UserData/> */}
      {/* <UseEffect1/> */}
      {/* <Home/> */}
      {/* <PhotoUser/> */}
      {/* <Example/> */}
      {/* <Mui/> */}

      {/* <HocDemo/> */}
      {/* <UpdateClass/> */}

      {/* <ContextRouting/> */}
      {/* <MyRoute /> */}
      {/* <MyRouter/> */}

      {/* crud operation */}
      {/* <CrudRouting/>     */}


      <Router>
      {/* <Navbar/>  */}
      <Routes>

      {/* <Route path="/user" element={<User/>}/>
          <Route path="/user/:id" element={<Singleuser/>}/>
          <Route path="/photos" element={<UserPhoto/>}/> */}

     
      {/* <Route path='/' element={<News/>}/>
      <Route path='/search' element={<SearchApi/>}/>
      <Route path='/trending' element={<TrendingApi/>}/>
      <Route path='*' element={<ErrorPage/>}/>  */}
      
      {/* <Route path='/product' element={<Product/>}/> */}

      {/* <Route path='/' element={<Example/>}/> */}
      
        </Routes>
    </Router>
    
    </>
  );
}

export default App;
