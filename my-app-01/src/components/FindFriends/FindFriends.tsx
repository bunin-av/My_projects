import styles from './FindFriends.module.scss';
import React from "react";
import Paginator from "../Paginator/Paginator";
import {UserStateType} from "../../redux/findFriends-reducer";
import User from './User';


type FindFriendsType = {
    users: UserStateType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChange: (num: number) => void
    followingInProgress: number[]
    followUnfollowUser: (isUserFollowed: boolean, userId: number) => void
}
const FindFriends = (props: FindFriendsType) => {

    return (
      <div className={styles.wrapper}>
          <div className={styles.searchBar}>Search Alex's friends</div>
          <Paginator
            totalUsersCount={props.totalUsersCount}
            pageSize={props.pageSize}
            currentPage={props.currentPage}
            onPageChange={props.onPageChange}
          />
          {props.users.map((u: UserStateType) => {
              return (
                <User
                  key={u.id}
                  user={u}
                  followingInProgress={props.followingInProgress}
                  followUnfollowUser={props.followUnfollowUser}
                />
              )
          })}
      </div>
    )
}


export default FindFriends;