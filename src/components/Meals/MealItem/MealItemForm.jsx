import React, { useRef, useState } from 'react';
import Input from '../../UI/Input';
import cs from './MealItemForm.module.css'


const MealItemForm = (props) => {

    const [amountIsValid, setAmountIsValid] = useState(true)

    const amountInputRef = useRef()

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('sbmt');

        const enteredValue = amountInputRef.current.value
        const enteredValueNum = +enteredValue
        console.log(enteredValueNum);

        if (
            enteredValue.trim().length === 0 ||
            enteredValueNum < 1 ||
            enteredValueNum > 5
        ){
            setAmountIsValid(false)
            return
        }

        props.onAddToCart(enteredValueNum)
    }

    return (
        <form className={cs.form} onSubmit={submitHandler}>
            <Input 
            ref={amountInputRef}
            label='Amount' 
            input={{
                id: 'amount_' + props.id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }}/>
            <button>Add</button>
            {!amountIsValid && <p>not valid</p>}
        </form>
    );
};

export default MealItemForm;