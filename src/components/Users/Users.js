import React from 'react';
import userPhoto from '../../../src/assets/images/user-men.png';
import styles from './users.module.css';
import Pagination from '@material-ui/lab/Pagination';
import { NavLink } from 'react-router-dom';



let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize); // Math.ceil округлить в большую сторону
    const handleChange = (event, value) => {
        props.onPageChanged(value)
    };
    console.log(props)
    return <div>

        <Pagination count={pagesCount} pageNumber={props.currentPage} onChange={handleChange} />

        {
            props.users.map(u => <div key={u.id} >
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} />
                        </NavLink>

                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                onClick={() => { props.unfollow(u.id) 
                                    }} >
                                Unfollow</button>

                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                onClick={() => { props.follow(u.id)
                                }} >
                                Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
    </div >
}

export default Users;