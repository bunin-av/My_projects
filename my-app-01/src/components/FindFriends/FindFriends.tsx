import styles from './FindFriends.module.scss';
import React from "react";
import userPhoto from '../../assets/images/userS1.png'
import {NavLink} from 'react-router-dom';
import axios from "axios";


const FindFriends = (props: any) => {
    let pagesAmount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesAmount; i++) {
        pages.push(i)
    }
    return (
      <div className={styles.wrapper}>
          <div className={styles.searchBar}>Search Alex's friends</div>
          <div>
              {
                  pages.map(p => {
                      return (props.currentPage === p)
                        ? <span className={styles.selectedPage} key={Math.random() * 1000}>{p}</span>
                        : <span onClick={() => props.onPageChange(p)} key={Math.random() * 1000}>{p}</span>
                  })
              }
          </div>
          {
              props.users.map((u: any) => {
                  return (
                    <div className={styles.users} key={u.id}>
                        <div className={styles.userAva}>
                            <NavLink to={'/profile/'+ u.id}>
                                <img src={u.photos.large != null ? u.photos.large : userPhoto} alt=""/>
                            </NavLink>
                        </div>
                        <div className={styles.userInfo}>
                            <div>{u.name}</div>
                            <span>{"u.location.city"}, {"u.location.state"}</span>
                        </div>
                        <div className={styles.buttons}>
                            <div>
                                <button onClick={() => {
                                    if (!u.followed) {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                          {withCredentials: true, headers: {"API-KEY": "7e59ed63-3050-4cd5-9cf6-cc004ac69363"}})
                                          .then((response) => {
                                              if (response.data.resultCode === 0) {
                                                  props.toggleFriend(u.id)
                                              }
                                          })
                                    } else if (u.followed) {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                          {withCredentials: true, headers: {"API-KEY": "7e59ed63-3050-4cd5-9cf6-cc004ac69363"}})
                                          .then((response) => {
                                              if (response.data.resultCode === 0) {
                                                  props.toggleFriend(u.id)
                                              }
                                          })
                                    }
                                }}>
                                    {u.followed ? 'Unfriend' : 'Add friend'}
                                </button>
                            </div>
                            <div>
                                <button>Message</button>
                            </div>
                        </div>
                    </div>
                  )
              })
          }
      </div>
    )
}


export default FindFriends;