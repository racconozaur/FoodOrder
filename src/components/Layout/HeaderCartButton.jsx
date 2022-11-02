import React from 'react';
import cs from './HeaderCartButton.module.css'
import CartIcon from './CartIcon';

const HeaderCartButton = (props) => {
    return (
        <button className={cs.button} onClick={props.onClick}>
            <span className={cs.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={cs.badge}>
                3
            </span>
        </button>
    );
};

export default HeaderCartButton;