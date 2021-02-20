import React from 'react';
import userPhoto from '../../../src/assets/images/user-men.png';
import styles from './users.module.css';
import Pagination from '@material-ui/lab/Pagination';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize); // Math.ceil округлить в большую сторону

    /*  let pages = [];
     for (let i = 1; i <= pagesCount; i++) {
         pages.push(i);
     } */
    const handleChange = (event, value) => {
        props.onPageChanged(value)
    };

    return <div>


        <Pagination count={pagesCount} page={props.currentPage} onChange={handleChange} />

        {/*  <div> count={10}   
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                    onClick={(e) => { props.onPageChanged(p); }} > {p}</span>
            })} </div> */}

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
                            ? <button onClick={() => {

                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,  {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "28071735-a9d9-456b-b13a-8580b4a0a008"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.unfollow(u.id);
                                        }
                                    });

                            }} >Unfollow</button>
                            : <button onClick={() => {

                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "28071735-a9d9-456b-b13a-8580b4a0a008"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.follow(u.id);
                                        }
                                    });

                            }} >Follow</button>}
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