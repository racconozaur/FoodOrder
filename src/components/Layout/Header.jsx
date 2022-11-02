import React from 'react';
import cs from './Header.module.css'
import mealImg from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <>
            <header className={cs.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={cs['main-image']}>
                <img src={mealImg} alt='food'/>
            </div>
        </>
    );
};

export default Header;