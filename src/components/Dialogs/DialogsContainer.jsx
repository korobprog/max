import React from 'react';
import { updateNewMessageBodyCreator, sendMessageCreator } from "../../Redux/dialogs-reducer"
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;


    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());

    }
    let onNewSendMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return   <Dialogs updateNewMessageBodyCreator={onNewSendMessageChange} sendMessage={onSendMessageClick}
            dialogsPage={state} />
}

export default DialogsContainer;