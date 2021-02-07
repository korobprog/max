import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messange/Messange";
import Button from "@material-ui/core/Button";
import SendIcon from '@material-ui/icons/Send';

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} avatar={dialog.avatar} />);
    let messagesElements = state.messages.map(message => <Message message={message.message} key={message.id} />);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();

    }
    let onNewSendMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);

    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                        onChange={onNewSendMessageChange}
                        placeholder='Enter your message'></textarea></div>
                    <div><Button color="secondary" size="small" endIcon={<SendIcon />} variant="contained" onClick={onSendMessageClick}>Send</Button></div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;
