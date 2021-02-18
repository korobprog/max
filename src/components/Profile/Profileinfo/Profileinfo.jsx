
import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './Profileinfo.module.css';
import Avatar from '@material-ui/core/Avatar';




const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img className={s.fon} src='https://sun9-58.userapi.com/c836335/v836335335/2ad50/1NyqfwPWyhk.jpg'
                     alt="fon_profile"/>
            </div>
            <div className={s.descriptionBlock} >
                <div>
                <Avatar   src={props.profile.photos.large}  />
                ava + discription</div>
            </div>
        </div>
    )


}

export default ProfileInfo;