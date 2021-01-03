import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText} from "./Redux/state";
import {addMessage, updateNewMessagesText} from "./Redux/state";
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}
            addMessage={addMessage} updateNewMessagesText={updateNewMessagesText}  />
        </BrowserRouter>, document.getElementById('root'));

}
