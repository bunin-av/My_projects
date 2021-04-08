import React from "react";
import styles from "./Profile.module.scss"
import MyPosts from "./MyPosts/MyPosts";
import Wallpaper from "./Wallpaper/Wallpaper";
import Ava from "./Ava/Ava";
import Bio from "./Bio/Bio";


// type ProfilePropsType = {
//
// }
const Profile = (props: any) => {
    return (
      <div className={styles.content}>
          <Wallpaper/>
          <Ava/>
          <Bio/>
          <MyPosts state={props.state} dispatch={props.dispatch}/>
      </div>
    )
}

export default Profile;