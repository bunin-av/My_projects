import styles from './FriendsSidebar.module.scss';
import React from "react";

const FriendsSidebar = (props: any) => {

    // let friendsAvaElements =
    //   props.state.map((ava: { avaUrl: string }) =>
    //     <FriendAva avaUrl={ava.avaUrl}/>)
    // let friendsNameElements =
    //   props.state.map((user: { userName: string }) =>
    //     <FriendName userName={user.userName}/>)

    let friendElements =
      props.state.map((friend: { avaUrl: string; userName: string; }) =>
        <FriendElement avaUrl={friend.avaUrl} userName={friend.userName}/>)

    return (
      // <div className={styles.friends}>
      //     <div>
      //         {friendsAvaElements}
      //     </div>
      //     <div className={styles.friendName}>
      //         {friendsNameElements}
      //     </div>
      // </div>
      <div className={styles.friends}>
          <h3>Friends</h3>
          {friendElements}
      </div>
    )
}


// type FriendAvaPropsType = {
//     avaUrl: string;
// }
// const FriendAva = (props: FriendAvaPropsType) => {
//     return (
//       <div className={styles.userAva}>
//           <img src={props.avaUrl} alt=""/>
//       </div>
//     )
// }


// type FriendNamePropsType = {
//     userName: string,
// }
// const FriendElement = (props: FriendNamePropsType) => {
//     return <div className={styles.friendname}>{props.userName}</div>
// }

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
          <div className={styles.friendname}>{props.userName}</div>
      </div>
    )
}

export default FriendsSidebar