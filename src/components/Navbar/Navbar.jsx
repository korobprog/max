import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <a>Profale</a>
            </div>
            <div div className={`${s.item} ${s.active}`}>
                <a>Messenges</a>
            </div>
            <div div className={s.item}>
                <a>News</a>
            </div>
            <div div className={s.item}>
                <a>Music</a>
            </div>
            <div div className={s.item}>
                <a>Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;