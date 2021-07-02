import styles from './FriendsSidebar.module.scss';
import React from "react";
import userPhoto from "../../../assets/images/userS1.png";
import {FriendsSideBarProps} from "./FriendsSidebarContainer";
import {UserStateType} from "../../../redux/findFriends-reducer";




const FriendsSidebar = (props: FriendsSideBarProps) => {
    let friendElements = props.friendList
      .map((friend: UserStateType, i) =>(
        <FriendElement avaUrl={friend.photos.small} userName={friend.name} key={friend.id + i}/>))

    return (
      <div className={styles.friends}>
          <h3>Friends</h3>
          {friendElements}
      </div>
    )
}


type FriendNamePropsType = {
    userName: string
    avaUrl: string | null
}
const FriendElement = (props: FriendNamePropsType) => {
    return (
      <div>
          <div className={styles.userAva}>
              <img src={props.avaUrl != null ? props.avaUrl : userPhoto} alt={`${props.userName}_photo`}/>
          </div>
          <div className={styles.friendName}>{props.userName}</div>
      </div>
    )
}

export default FriendsSidebar