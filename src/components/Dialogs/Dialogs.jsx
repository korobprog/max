import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messange/Messange";
import Button from "@material-ui/core/Button";
import { updateNewMessageBodyCreator, sendMessageCreator } from "../../Redux/state"

const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} avatar={d.avatar} />);
    let messagesElements = state.messages.map(m => <Message message={m.message} />);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());

    }
    let onNewSendMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
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
                    <div><Button color="primary" variant="contained" onClick={onSendMessageClick}>Send</Button></div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;