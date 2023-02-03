import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../assets/Untitled design.png'
import button from '../assets/NEW SNACK.png'
import grassy from '../assets/grassy border.png'
import './NavBar.css'

const NavBar = () => {
    return (
        <nav>
           <h1 className='header'>
        <Link to="/snacks"><img className='logo' src={logo} alt='logo' /></Link>
      </h1>
      <ul className='new-nav'>
        <li>
          <Link to="/snacks/new"><img className='new-snack' src={button} alt='new-snack' /></Link>
        </li>
      </ul>
      {/* <div className='border'></div> */}
      <img src={grassy} className='grassy' alt='grassy' />
            
        </nav>
    );
};

export default NavBar;