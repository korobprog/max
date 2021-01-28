import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPost/MyPosts";
import ProfileInfo from "./Profileinfo/Profileinfo";



const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostsText={props.profilePage.newPostText}
                     dispatch={props.dispatch} />
        </div>
    )


}

export default Profile;