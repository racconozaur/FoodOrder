import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmmount: 0
};

const cartReducer = (state, action) => {
    if(action.type === 'ADD'){
        
        const updatedTotalAmount = state.totalAmmount + action.item.price * action.item.amount
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id)
        const existingCartItem = state.items[existingCartItemIndex]
        
        let updatedItems

        if(existingCartItem){
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }
            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem
        }
        else{
            updatedItems = state.items.concat(action.item)
        }
        
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