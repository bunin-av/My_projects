import React from "react";
import styles from "./Profile.module.scss"
import Wallpaper from "./Wallpaper/Wallpaper";
import Ava from "./Ava/Ava";
import Bio from "./Bio/Bio";
import MyPostsContainer from "./MyPosts/MyPostsContainer";



const Profile = (props: any) => {
    return (
      <div className={styles.content}>
          <Wallpaper/>
          <Ava/>
          <Bio/>
          {/*<MyPostsContainer state={props.state} dispatch={props.dispatch}/>*/}
          <MyPostsContainer store={props.store}/>
      </div>
    )
}

export default Profile;