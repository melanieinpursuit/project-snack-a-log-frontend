import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../assets/just logo.png'
import './NavBar.css'

const NavBar = () => {
    return (
        <nav>
           <h1 className='header'>
        <Link to="/snacks"><img className='logo' src={logo} alt='logo' /></Link>
      </h1>
      <div className='border'></div>
      {/* <button className='new-button'>
        <Link to="/snacks/new">New Snack</Link>
      </button> */}
      <ul className='new-nav'>
        <li>
          <Link to="/snacks/new">New Snack</Link>
        </li>
      </ul>
            
        </nav>
    );
};

export default NavBar;