import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css' ;

const Header = (props) => {
    return (
        <header className={s.header}>
            <img className={s.image} src="https://upload.wikimedia.org/wikipedia/ru/1/19/Total_Logo.svg"
                 alt="Social Donat Traders"/>
                 <div className={s.loginBlock}>
                     {props.isAuth ? props.login 
                    : <NavLink to={'/login'}>Login</NavLink> }
                 </div>
        </header>
    )
}

export default Header;