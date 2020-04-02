import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPost/MyPosts";


const Profile = () => {
    return (
        <div>
            <div>
                <img className={s.fon} src='https://sun9-58.userapi.com/c836335/v836335335/2ad50/1NyqfwPWyhk.jpg'
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