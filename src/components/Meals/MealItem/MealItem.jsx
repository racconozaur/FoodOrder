import React from 'react';
import cs from './MealItem.module.css'
import MealItemForm from './MealItemForm';

const MealItem = (props) => {

    const price = `$${props.price.toFixed(2)}`

    return (
        <li className={cs.meal}>
           <div>
                <h3>{props.name}</h3>
                <div className={cs.description}>{props.description}</div>
                <div className={cs.price}>{price}</div>
            </div>
           <div>
                <MealItemForm id={props.id}/>
           </div> 
        </li>
    );
};

export default MealItem;