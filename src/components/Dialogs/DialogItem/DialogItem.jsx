import React from 'react';
import s from './../Dialogs.module.css' ;
import {NavLink} from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';

/*props*/
const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className={s.dialogsItems} to={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name} 
        <Avatar src={props.avatar} alt="avatar image" />
        </NavLink>
    </div >
}

export default DialogItem;