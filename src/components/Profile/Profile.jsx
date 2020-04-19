import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPost/MyPosts";
import ProfileInfo from "./Profileinfo/Profileinfo";



const Profile = ({posts}) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    )


}

export default Profile;