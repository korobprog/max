import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './Profileinfo.module.css';
import Avatar from '@material-ui/core/Avatar';
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div className={s.descriptionBlock} >
                <Avatar src={props.profile.photos.large} />
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    )
}

export default ProfileInfo;
