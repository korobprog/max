import React from 'react';
import s from './MyPosts.module.css';
import Posts from "./Post/Posts";


const MyPosts = () => {
    return (
    <div>
        My Post
        <div>
            <textarea></textarea>
            <button>Add Post</button>
        </div>
        <div className={s.posts}>
            <Posts message='Hi, how are you?' />
            <Posts message="Its' my firet post" />


        </div>
    </div>
    )


}

export default MyPosts;