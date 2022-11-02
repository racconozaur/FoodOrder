import React from 'react';
import Modal from '../UI/Modal';
import cs from './Cart.module.css'

const Cart = (props) => {

    const cartItems = (
        <ul className={cs['cart-items']}>
          {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => (
            <li key={'123'}>{item.name}</li>
          ))}
        </ul>
      );

    return (
        <Modal>
            {cartItems}
            <div className={cs.total}>
                <span>Total amount</span>
                <span>35.62</span>
            </div>
            <div className={cs.actions}>
                <button className={cs['button--alt']}>Close</button>
                <button className={cs.button}>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;