import React from 'react';
import './Card.css';
const Card = (props) => {

    return (
        <div className = "card">
            <h3>
                {props.hdLines}
            </h3>
            <strong>
               {props.subScript} 
            </strong>
        </div>
    )
}
export default Card;