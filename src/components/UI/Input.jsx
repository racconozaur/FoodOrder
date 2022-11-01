import React from 'react';
import cs from './Input.module.css'

const Input = (props) => {
    return (
        <div className={cs.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input {...props.input}/>
        </div>
    );
};

export default Input;