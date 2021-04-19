import styles from './FindFriends.module.scss';
import React from "react";
import userPhoto from '../../assets/images/userS1.png'


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
                        ? <span className={styles.selectedPage}>{p}</span>
                        : <span onClick={() => props.onPageChange(p)}>{p}</span>
                  })
              }
          </div>
          {
              props.users.map((u: any) => {
                  return (
                    <div className={styles.users} key={u.id}>
                        <div className={styles.userAva}>
                            <img src={u.photos.large != null ? u.photos.large : userPhoto} alt=""/>
                        </div>
                        <div className={styles.userInfo}>
                            <div>{u.name}</div>
                            <span>{"u.location.city"}, {"u.location.state"}</span>
                        </div>
                        <div className={styles.buttons}>
                            <div>
                                <button onClick={() => props.toggleFriend(u.id)}>
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