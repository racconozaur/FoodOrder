import React from 'react';
import cs from './Header.module.css'
import mealImg from '../../assets/meals.jpg'

const Header = () => {
    return (
        <>
            <header className={cs.header}>
                <h1>ReactMeals</h1>
                <button>Cart</button>
            </header>
            <div className={cs['main-image']}>
                <img src={mealImg} alt='food'/>
            </div>
        </>
    );
};

export default Header;