import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmmount: 0
};

const cartReducer = (state, action) => {
    if(action.type === 'ADD'){
        const updatedItems = state.items.concat(action.item)
        const updatedTotalAmount = state.totalAmmount + action.item.price * action.item.amount
    
        return{
            items: updatedItems,
            totalAmmount: updatedTotalAmount
        }
    }

    return defaultCartState
}


const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemHandler = (item) => {
        dispatchCartAction({type: 'ADD', item: item})
    }

    const removeItemHandler = (id) => {
        dispatchCartAction({type: 'REMOVE', id: id})
    }

    const cartContext = {
        items: cartState.items,
        totalAmmount: cartState.totalAmmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }


    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;