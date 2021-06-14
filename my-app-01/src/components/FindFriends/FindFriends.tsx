import styles from './FindFriends.module.scss';
import React from "react";
import Paginator from "../Paginator/Paginator";
import User from "./User";


const FindFriends = (props: any) => {

    return (
      <div className={styles.wrapper}>
          <div className={styles.searchBar}>Search Alex's friends</div>
          <Paginator
            totalUsersCount={props.totalUsersCount}
            pageSize={props.pageSize}
            currentPage={props.currentPage}
            onPageChange={props.onPageChange}
          />
          {props.users.map((u: any) => {
              return (
                <User
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