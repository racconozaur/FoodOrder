import React from 'react';
import cs from './HeaderCartButton.module.css'
import CartIcon from './CartIcon';

const HeaderCartButton = () => {
    return (
        <button className={cs.button}>
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