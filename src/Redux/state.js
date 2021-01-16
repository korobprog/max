const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi how are you?', likesCount: 12 },
                { id: 2, message: 'Hi?', likesCount: 11 }
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Dimych', avatar: 'https://sun1-19.userapi.com/c858220/v858220623/fa1e/cS8ThNzKCCs.jpg' },
                { id: 2, name: 'Andrew', avatar: 'https://www.iphones.ru/wp-content/uploads/2020/01/mercedes-benz-avatar-vision-avtr-concept-car-official-32.jpg' },
                { id: 3, name: 'Sveta', avatar: 'https://i.pinimg.com/736x/2a/3a/13/2a3a133c492b411722c5d58f43b9d1ca.jpg' },
                { id: 4, name: 'Sasha', avatar: 'https://sun1-19.userapi.com/c858220/v858220623/fa1e/cS8ThNzKCCs.jpg' },
                { id: 5, name: 'Victor', avatar: 'https://yt3.ggpht.com/a/AGF-l7_EX3WQIek2PX6SAWw4ArjmZ4cllrz1ReAKaQ=s900-c-k-c0xffffffff-no-rj-mo' },
                { id: 6, name: 'Valera', avatar: 'https://yt3.ggpht.com/a/AGF-l7_EX3WQIek2PX6SAWw4ArjmZ4cllrz1ReAKaQ=s900-c-k-c0xffffffff-no-rj-mo' },
            ],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How is your social React1111' },
                { id: 3, message: 'Yo' },
                { id: 4, message: 'Yo' },
                { id: 5, message: 'Yo' },
            ],
            newMessageBody: ''
        },
    },
    _callSubscriber() {
        console.log('state chenge');
    },
    getState() {
        return this._state;
    },
    addMessage() {
        const messagesMessage = {
            id: 7,
            message: this._store.dialogsPage.newMessagesText
        }
        this._store.dialogsPage.messages.push(messagesMessage);
        this._store.dialogsPage.newMessagesText = '';
        this._callSubscriber(this._state);
    },
    updateNewMessagesText(newText) {
        this._store.dialogsPage.newMessagesText = newText;
        this._callSubscriber(this._state); //observer
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) { // { type: ADD-POST'}
    console.log(action)
        if (action.type === ADD_POST) {
            const newPost = {
                id: 6,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            console.log(this._state)
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({ id: 6, message: body });
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

window.store = store;
export default store;