import React from 'react';
import ProfileInfo from "./Profileinfo/Profileinfo";
import MyPostsContainer from './MyPost/MyPostsContainer';



const Profile = (props) => {
    console.log(props.status)
    
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )


}

export default Profile;
