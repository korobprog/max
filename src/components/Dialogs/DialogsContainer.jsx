import React from 'react';
import { updateNewMessageBodyCreator, sendMessageCreator } from "../../Redux/dialogs-reducer"
import Dialogs from './Dialogs';
import StoreContext from '../../../StoreContext';


const DialogsContainer = () => {
    return <StoreContext.Consumer> {
        (store) => {
            let state = store.getState().dialogsPage;
            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator());

            }
            let onNewSendMessageChange = (body) => {
                store.dispatch(updateNewMessageBodyCreator(body));
            }
            <Dialogs updateNewMessageBodyCreator={onNewSendMessageChange}
                sendMessage={onSendMessageClick}
                dialogsPage={state} />
        }
    }
    </StoreContext.Consumer>

}

export default DialogsContainer;