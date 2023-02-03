import React from 'react';
import { Link } from 'react-router-dom'
import enter from '../assets/ENTER SIGN.png'
import './Home.css'

const Home = () => {
    return (
        <div>
            <Link to='/snacks'>
                <img className='enter' src={enter} alt='enter'></img>
            </Link>
            
        </div>
    );
};

export default Home;