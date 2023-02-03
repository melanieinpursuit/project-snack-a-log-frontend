import React from 'react';
import { Link } from 'react-router-dom'
import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";
import './Snack.css'

const Snack = ({ snack }) => {
    return (
        <section>

            <Link to={`/snacks/${snack.id}`}> 
            <h1 className='snack-name'>{snack.name}</h1> 
            </Link>

            <img className='snack-img' src={snack.image} alt="Snack"></img>
            {snack.is_healthy ? (
                <span>
                    <img className='solid-heart' src={heartSolid} alt='healthy'></img>
                </span>
                ): (
                    <span>
                        <img className='heart-outline' src={heartOutline} alt='unhealthy'></img>
                    </span>
                )}
        </section>
    );
};

export default Snack;