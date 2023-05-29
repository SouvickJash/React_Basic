import React from "react";
import Result from "./Result";
import AboutUser from "./AboutUser";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ContexState from './Context/'
import ContaxState1 from "./Context/ContaxState1";


const ContextRouting = () => {
  return (
    <>
        <ContaxState1>
            <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Result />} />
            <Route path="/about" element={<AboutUser />} />
        </Routes>
        </Router>
        </ContaxState1>
    </>
  );
};

export default ContextRouting;
