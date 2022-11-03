import React  from 'react';
import { useContext } from 'react';
import cs from './HeaderCartButton.module.css'
import CartIcon from './CartIcon';
import CartContext from '../../store/cart-context';


const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext)

    const numberOfCartItems = cartCtx.items.reduce((curNumb, item) => {
        return curNumb + item.amount 

    }, 0)

    return (
        <button className={cs.button} onClick={props.onClick}>
            <span className={cs.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={cs.badge}>
                {numberOfCartItems}
            </span>
        </button>
    );
};

export default HeaderCartButton;