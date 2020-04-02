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
            <Posts message='Hi, how are you?' likesCount='0' /> {/*//то что подставить в props*/}
            <Posts message="Its' my firet post" likesCount='23' />


        </div>
    </div>
    )


}

export default MyPosts;