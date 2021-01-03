import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messange/Messange";
import Button from "@material-ui/core/Button";


const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} avatar={d.avatar} />);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} />);
    let newMessagesElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
        props.updateNewMessagesText('');
        newMessagesElement.current.value = '';
    }
    let onMessageChange = () => {
        const text = newMessagesElement.current.value;
        props.updateNewMessagesText(text);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}›
            <div className={s.input}>
                    <div>
                        <textarea onChange={onMessageChange} ref={newMessagesElement}
                            value={props.dialogsPage.newMessagesText} />
                    </div>
                    <div>
                        <Button color="primary" variant="contained" onClick={addMessage}>Send</Button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;