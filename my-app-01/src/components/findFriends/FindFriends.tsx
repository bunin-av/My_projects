import styles from './FindFriends.module.scss';
import React from "react";
import axios from "axios";
import userPhoto from '../../assets/images/userS1.png'


class FindFriends extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
            props.setUsers(response.data.items);
        })
    }

    render() {
        return (
          <div className={styles.wrapper}>
              <div className={styles.searchBar}>Search Alex's friends</div>
              {
                  this.props.users.map((u: any) => {
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
                                    <button onClick={() => this.props.toggleFriend(u.id)}>
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
        )
    }
}

export default FindFriends;