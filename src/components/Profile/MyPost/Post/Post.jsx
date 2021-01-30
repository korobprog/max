import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
return (

        <div className={s.item}>
            <img src="https://yt3.ggpht.com/a/AGF-l7_EX3WQIek2PX6SAWw4ArjmZ4cllrz1ReAKaQ=s900-c-k-c0xffffffff-no-rj-mo"/>
            { props.message } {/*//отображения props*/}
            <div>
            <span>like</span> {props.likesCount}
            </div>
        </div>

    )


}

export default Post;