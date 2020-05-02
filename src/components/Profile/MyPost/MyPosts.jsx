import React from 'react';
import s from './MyPosts.module.css';
import Posts from './Post/Posts'
import Button from "@material-ui/core/Button";


const MyPosts = (props) => {
    let postsElements =
        props.posts.map(p => <Posts message={p.message} LikesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let AddPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }
    return (
        <div className={s.postsBlock}>
            <h3>My Post</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <Button color="primary" variant="contained" onClick={AddPost}>Add Post</Button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;