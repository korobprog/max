import React from 'react';
import s from  './Profile.module.css';


const Profile = () => {
    return <div className={s.content}>
        <div>
            <img  className={s.fon} src='https://clipart-db.ru/file_content/rastr/background_065.jpg' alt="fon_profile" />
            <div />
            <div>
                ava + discription
            </div>
            <div>
                My Post
                <div>
                    New Post
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        post 1
                    </div>
                    <div className={s.item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    </div>



}

export default Profile;