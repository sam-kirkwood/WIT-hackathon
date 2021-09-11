import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const Navbar = () => {
    return (
     <div className="navbar">
        <ul>
          <li>
            <Link to="/" style={{ textDecoration: 'none', color: 'black'}}>Home</Link>
          </li>
          <li>
            <Link to="/about" style={{ textDecoration: 'none' , color: 'black' }}>About</Link>
          </li>
          <li>
            <Link to="/dashboard" style={{ textDecoration: 'none', color: 'black' }}>Dashboard</Link>
          </li>
        </ul>
    </div>
    )
}

export default Navbar