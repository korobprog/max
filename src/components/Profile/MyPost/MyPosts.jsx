import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'
import Button from "@material-ui/core/Button";


const MyPosts = (props) => {

    let postsElements = props.posts.map(posts => <Post message={posts.message} LikesCount={posts.likesCount} key={posts.id} />);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
       
        let text = newPostElement.current.value;
        props.updateNewPostText(text);

    }
    return (
        <div className={s.postsBlock}>
            <h3>My Post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}
                        value={props.newPostText} />
                </div>
                <div>
                    <Button color="primary" variant="contained" onClick={onAddPost}>Add Post</Button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;