import styles from "./FindFriends.module.scss";
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/images/userS1.png";
import React from "react";
import {UserStateType} from "../../redux/findFriends-reducer";

type UserPropsType = {
    user: UserStateType
    followingInProgress: number[]
    followUnfollowUser: (followed: boolean, id: number) => void
}

function User(props: UserPropsType) {
    const user = props.user
    return (
      <div className={styles.users} key={user.id}>
          <div className={styles.userAva}>
              <NavLink to={'/profile/' + user.id}>
                  <img src={user.photos.large != null ? user.photos.large : userPhoto} alt="user_photo"/>
              </NavLink>
          </div>
          <div className={styles.userInfo}>
              <div>{user.name}</div>
              <span>{"user.location.city"}, {"user.location.state"}</span>
          </div>
          <div className={styles.buttons}>
              <div>
                  <button disabled={props.followingInProgress.some((id: number) => id === user.id)}
                          onClick={() => {
                              props.followUnfollowUser(user.followed, user.id)
                          }}>
                      {user.followed ? 'Unfriend' : 'Add friend'}
                  </button>
              </div>
              <div>
                  <button>Message</button>
              </div>
          </div>
      </div>
    )
}

export default User