import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';



const Navbar = (props) => {
    const avatars = props.dialogs.map(d => <Avatar key={d.id} alt={d.name} src={d.avatar} />);
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLinc}>Profale</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs" activeClassName={s.activeLinc}>Messenges</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.activeLinc}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.activeLinc}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.activeLinc}>Settings</NavLink>
            </div>

            <AvatarGroup max={3} >
                {avatars}
            </AvatarGroup>
        </nav>
    )
}




export default Navbar;
