import styles from './FindFriends.module.scss';
import React from "react";
import userPhoto from '../../assets/images/userS1.png'
import {NavLink} from 'react-router-dom';


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
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.large != null ? u.photos.large : userPhoto} alt=""/>
                            </NavLink>
                        </div>
                        <div className={styles.userInfo}>
                            <div>{u.name}</div>
                            <span>{"u.location.city"}, {"u.location.state"}</span>
                        </div>
                        <div className={styles.buttons}>
                            <div>
                                <button disabled={props.followingInProgress.some((id: number) => id === u.id)}
                                        onClick={() => {
                                            // props.followingProgress(true, u.id);
                                            // if (!u.followed) {
                                            //     usersAPI.followUser(u.id)
                                            //       .then((data) => {
                                            //           if (data.resultCode === 0) {
                                            //               props.toggleFriend(u.id);
                                            //               props.setFriendList(props.users.filter((u: any) => u.followed));
                                            //               props.followingProgress(false, u.id);
                                            //           }
                                            //       })
                                            // } else if (u.followed) {
                                            //     usersAPI.unfollowUser(u.id)
                                            //       .then((data) => {
                                            //           if (data.resultCode === 0) {
                                            //               props.toggleFriend(u.id)
                                            //               props.setFriendList(props.users.filter((u: any) => u.followed))
                                            //               props.followingProgress(false, u.id);
                                            //           }
                                            //       })
                                            // }
                                            props.followUnfollowUser(u.followed, u.id, props.users)
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