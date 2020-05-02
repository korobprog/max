import {rerenderEntireTree} from "../render";

let state;
state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi how are you?', likesCount: 12},
            {id: 2, message: 'Hi?', likesCount: 11}
        ],
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych', avatar: 'https://sun1-19.userapi.com/c858220/v858220623/fa1e/cS8ThNzKCCs.jpg'},
            {id: 2, name: 'Andrew', avatar: 'https://www.iphones.ru/wp-content/uploads/2020/01/mercedes-benz-avatar-vision-avtr-concept-car-official-32.jpg'},
            {id: 3, name: 'Sveta', avatar: 'https://i.pinimg.com/736x/2a/3a/13/2a3a133c492b411722c5d58f43b9d1ca.jpg'},
            {id: 4, name: 'Sasha', avatar: 'https://sun1-19.userapi.com/c858220/v858220623/fa1e/cS8ThNzKCCs.jpg'},
            {id: 5, name: 'Victor', avatar: 'https://yt3.ggpht.com/a/AGF-l7_EX3WQIek2PX6SAWw4ArjmZ4cllrz1ReAKaQ=s900-c-k-c0xffffffff-no-rj-mo'},
            {id: 6, name: 'Valera', avatar: 'https://yt3.ggpht.com/a/AGF-l7_EX3WQIek2PX6SAWw4ArjmZ4cllrz1ReAKaQ=s900-c-k-c0xffffffff-no-rj-mo'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your social React'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'},
        ],

    }


};
export let addPost = (postMessage) => {
    let newPost = {
        id:5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
rerenderEntireTree(state);
}

export default  state;