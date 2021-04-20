import React from "react";
import styles from "./Profile.module.scss"
import Wallpaper from "./Wallpaper/Wallpaper";
import Ava from "./Ava/Ava";
import Bio from "./Bio/Bio";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props:any) => {
    return (
      <div className={styles.content}>
          <Wallpaper />
          <Ava {...props.userProfile}/>
          <Bio {...props.userProfile}/>
          <MyPostsContainer />
      </div>
    )
}

export default Profile;