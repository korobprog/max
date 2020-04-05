import React from 'react';
import s from './Dialogs.module.css' ;
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className to={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}
let dialogData = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrew'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Victor'},
    {id: 6, name: 'Valera'},
]

let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your social React'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'},
]


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <DialogItem name={dialogData[0].name}  id={dialogData[0].id}/>
                <DialogItem name={dialogData[1].name}  id={dialogData[1].id}/>
                <DialogItem name={dialogData[2].name}  id={dialogData[2].id}/>
                <DialogItem name={dialogData[3].name}  id={dialogData[3].id}/>
                <DialogItem name={dialogData[4].name}  id={dialogData[4].id}/>

            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} id={messagesData[0].id}/>
                <Message message={messagesData[1].message} id={messagesData[1].id}/>
                <Message message={messagesData[2].message} id={messagesData[2].id}/>
                <Message message={messagesData[3].message} id={messagesData[3].id}/>
                <Message message={messagesData[4].message} id={messagesData[4].id}/>



            </div>
        </div>


    )
}

export default Dialogs;