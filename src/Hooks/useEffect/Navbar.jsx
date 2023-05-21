import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      {/* <header><Link to="/user">Home</Link></header> */}
      {/* <Link to='/user'><button type="button" class="btn btn-danger" style={{marginLeft:"560px", marginBottom:"10px"}}>Home page</button></Link> */}

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand">
          <Link to="/user"> Navbar</Link>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              {/* <Link to='/user'><button type="button" class="btn btn-danger" style={{marginLeft:"560px", marginBottom:"10px"}}>Home page</button></Link> */}
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
