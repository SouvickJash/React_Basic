import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to='/'>Home</NavLink>
      </li>
   
      <li className="nav-item active">
        <NavLink className="nav-link" to='/search'>Search</NavLink>
      </li>
      <li className="nav-item active">
        <NavLink className="nav-link" to='/trending'>Trending</NavLink>
      </li>
      <li className="nav-item active">
        <NavLink className="nav-link" to='/product'>Product</NavLink>
      </li>

      <li className="nav-item active">
        <NavLink className="nav-link" to='*'></NavLink>
      </li>
    
    </ul>
  
  </div>
</nav>

    </>
  );
};

export default Navbar;
