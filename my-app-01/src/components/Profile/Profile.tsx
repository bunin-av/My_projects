import React from "react";
import styles from "./Profile.module.scss"
import Wallpaper from "./Wallpaper/Wallpaper";
import Ava from "./Ava/Ava";
import Bio from "./Bio/Bio";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = () => {
    return (
      <div className={styles.content}>
          <Wallpaper/>
          <Ava/>
          <Bio/>
          <MyPostsContainer />
      </div>
    )
}

export default Profile;