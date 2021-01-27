import React from 'react';
import s from './MyPosts.module.css';
import Posts from './Post/Posts'
import Button from "@material-ui/core/Button";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer" ;


const MyPosts = (props) => {
      
    let postsElements = props.posts.map(posts => <Posts message={posts.message} LikesCount={posts.likesCount} key={posts.id} />);

    let newPostElement = React.createRef();

    let AddPost = () => {
        props.dispatch(addPostActionCreator());
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        //let action = ({ type: 'UPDATE-NEW-POST-TEXT', newText: text });
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
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