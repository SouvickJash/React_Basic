import React from 'react'
import { Link } from 'react-router-dom'

const NewNavbar = () => {
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-dark bg-info">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
       <li className="nav-item active">
        <Link className="nav-link" to="/">User</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/todos">Todos</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/post">Post</Link>
      </li>


      </ul>
   </div>
</nav>

    </>
  )
}

export default NewNavbar
