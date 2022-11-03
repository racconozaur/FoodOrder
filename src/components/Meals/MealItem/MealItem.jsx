import React, { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import cs from './MealItem.module.css'
import MealItemForm from './MealItemForm';

const MealItem = (props) => {

    const cartCtx = useContext(CartContext)

    const price = `$${props.price.toFixed(2)}`

    const addToCartFormHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }

    return (
        <li className={cs.meal}>
           <div>
                <h3>{props.name}</h3>
                <div className={cs.description}>{props.description}</div>
                <div className={cs.price}>{price}</div>
            </div>
           <div>
                <MealItemForm id={props.id} onAddToCart={addToCartFormHandler}/>
           </div> 
        </li>
    );
};

export default MealItem;