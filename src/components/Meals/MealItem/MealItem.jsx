import React from 'react';
import cs from './MealItem.module.css'

const MealItem = (props) => {

    const price = `$${props.price.toFixed(2)}`

    return (
        <li className={cs.meal}>
           <div>
                <h3>{props.name}</h3>
                <div className={cs.description}>{props.description}</div>
                <div className={cs.price}>{price}</div>
            </div>
           <div></div> 
        </li>
    );
};

export default MealItem;