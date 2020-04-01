import React from 'react';
import s from './Header.module.css' ;

const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.image} src="https://upload.wikimedia.org/wikipedia/ru/1/19/Total_Logo.svg"
                 alt="Social Donat Traders"/>
        </header>
    )
}

export default Header;