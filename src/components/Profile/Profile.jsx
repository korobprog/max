import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPost/MyPosts";


const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img className={s.fon} src='https://clipart-db.ru/file_content/rastr/background_065.jpg'
                     alt="fon_profile"/>
            </div>
            <div>
                ava + discription
            </div>
            <MyPosts/>
        </div>
    )


}

export default Profile;