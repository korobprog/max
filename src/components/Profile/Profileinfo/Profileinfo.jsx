import React from 'react';
import s from './Profileinfo.module.css';



const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.fon} src='https://sun9-58.userapi.com/c836335/v836335335/2ad50/1NyqfwPWyhk.jpg'
                     alt="fon_profile"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + discription
            </div>
        </div>
    )


}

export default ProfileInfo;