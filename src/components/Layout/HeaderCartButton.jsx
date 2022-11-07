import React, { useEffect, useState }  from 'react';
import { useContext } from 'react';
import cs from './HeaderCartButton.module.css'
import CartIcon from './CartIcon';
import CartContext from '../../store/cart-context';


const HeaderCartButton = (props) => {  
    const [btnBump, setBtnBump] = useState(false)

    const cartCtx = useContext(CartContext)
    const {items} = cartCtx

    const btnBumpClass = `${cs.button} ${btnBump ? cs.bump : ''}`

    const numberOfCartItems = items.reduce((curNumb, item) => {
        return curNumb + item.amount 

    }, 0)


    useEffect(() => {
        if (items.length === 0){
            return
        }

        setBtnBump(true)
        const timerBump = setTimeout(() => {
            setBtnBump(false)
        }, 300 )

        return () => {
            clearTimeout(timerBump)
        }

    }, [items])


    return (
        <button className={btnBumpClass} onClick={props.onClick}>
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