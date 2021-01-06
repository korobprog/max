import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import Route from "react-router-dom/es/Route";



const App = (props) => {

    return (
        <div className='app-wrapper'>
            <Header />
            <Navbar dialogs={props.state.dialogsPage.dialogs} />
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <Dialogs
                    dialogsPage={props.state.dialogsPage}
                    updateNewMessagesText={props.updateNewMessagesText}
                    addMessage={props.store.addMessage} />} />
                <Route path='/profile' render={() => <Profile
                    profilePage={props.state.profilePage}
                    updateNewPostText={props.updateNewPostText}
                    addPost={props.store.addPost} />}
                />

            </div>
        </div>
    )

}
export default App;
