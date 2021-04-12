import styles from './FriendsSidebar.module.scss';
import React from "react";


const FriendsSidebar = (props: any) => {

    let friendElements =
      props.friendsSidebar.map((friend: { avaUrl: string; userName: string; }) =>
        <FriendElement avaUrl={friend.avaUrl} userName={friend.userName} key={Math.random()*100} />)

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
              <img src={props.avaUrl} alt=""/>
          </div>
          <div className={styles.friendName}>{props.userName}</div>
      </div>
    )
}

export default FriendsSidebar