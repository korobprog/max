import React from 'react';
import s from './Dialogs.module.css' ;
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messange/Messange";
import Button from "@material-ui/core/Button";

const Dialogs = (props) => {

let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} key={d.id} />);
let messagesElements = props.messages.map(m => <Message message={m.message} />);
return (
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElements}
        </div>
        <div    className={s.messages}>
            {messagesElements}
            <div className={s.imput}>
                <div>
                    <textarea>123</textarea>
                </div>
                <div>
                    <Button color="primary" variant="contained">Send</Button>
                </div>
            </div>
        </div>

    </div>
     )
}

export default Dialogs;