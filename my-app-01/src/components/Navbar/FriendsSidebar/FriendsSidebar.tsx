import styles from './FriendsSidebar.module.scss';
import React from "react";
import userPhoto from "../../../assets/images/userS1.png";


type PropsType = {
    friendList: Array<FriendListType>
}
type FriendListType = {
    id: number
    name: string
    photos: { small: string }
}

const FriendsSidebar = (props: PropsType) => {
    let friendElements = props.friendList
      .map((friend) =>
        <FriendElement avaUrl={friend.photos.small} userName={friend.name} key={friend.id}/>)

    return (
      <div className={styles.friends}>
          <h3>Friends</h3>
          {friendElements}
      </div>
    )
}


type FriendNamePropsType = {
    userName: string,
    avaUrl: string
}
const FriendElement = (props: FriendNamePropsType) => {
    return (
      <div>
          <div className={styles.userAva}>
              <img src={props.avaUrl != null ? props.avaUrl : userPhoto} alt=""/>
          </div>
          <div className={styles.friendName}>{props.userName}</div>
      </div>
    )
}

export default FriendsSidebar