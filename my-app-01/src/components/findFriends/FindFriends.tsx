import styles from './FindFriends.module.scss';
import React from "react";


const FindFriends = (props: any) => {
    return <div className={styles.wrapper}>
        <div className={styles.searchBar}>Search Alex's friends</div>
        {
            props.users.map((u: any) => {
                return (
                  <div className={styles.users} key={u.id}>
                      <div className={styles.userAva}><img src={u.avaUrl} alt=""/></div>
                      <div className={styles.userInfo}>
                          <div>{u.userName}</div>
                          <span>{u.location.city}, {u.location.state}</span>
                      </div>
                      <div className={styles.buttons}>
                          <div>
                              <button onClick={() => props.toggleFriend(u.id)}>
                                  {(!u.friend) ? 'Add friend' : 'Unfriend'}
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
}


export default FindFriends;