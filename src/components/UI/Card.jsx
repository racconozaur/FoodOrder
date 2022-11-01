import React from 'react';
import cs from './Card.module.css'

const Card = (props) => {
    return (
        <div className={cs.card}>
            {props.children}
        </div>
    );
};

export default Card;