import React from 'react';
import s from './MyPosts.module.css';
import Posts from './Post/Posts'
import Button from "@material-ui/core/Button";


const MyPosts = ({posts}) => {
    let postsElements = posts.map(p => <Posts message={p.message} LikesCount={p.likesCount}/>);
    return (
        <div className={s.postsBlock}>
            <h3>My Post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <Button color="primary" variant="contained">Add Post</Button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;