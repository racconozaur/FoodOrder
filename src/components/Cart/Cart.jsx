import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import cs from './Cart.module.css'
import CartItem from './CartItem';

const Cart = (props) => {
    
    const cartCtx = useContext(CartContext)
    const totalAmmount = `$ ${cartCtx.totalAmmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0

    const onAddItemHandler = (item) => {
        cartCtx.addItem({...item, amount: 1})
    }

    const onRemoveItemHandler = (id) => {
        cartCtx.removeItem(id)
    }

    const cartItems = (
        <ul className={cs['cart-items']}>
          {cartCtx.items.map((item) => (
            <CartItem
                key={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                onRemove={onRemoveItemHandler.bind(null, item.id)}
                onAdd={onAddItemHandler.bind(null, item)}
            />
          ))}
        </ul>
      );

    return (
        <Modal onPress={props.onCloseCart}>
            {cartItems}
            <div className={cs.total}>
                <span>Total amount</span>
                <span>{totalAmmount}</span>
            </div>
            <div className={cs.actions}>
                <button className={cs['button--alt']} onClick={props.onCloseCart}>Close</button>
                {hasItems && <button className={cs.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;