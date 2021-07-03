import React from "react";
import styles from "./Profile.module.scss"
import Wallpaper from "./Wallpaper/Wallpaper";
import Ava from "./Ava/Ava";
import Bio from "./Bio/Bio";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileProps} from "./ProfileContainer";

const Profile = (props: ProfileProps) => {
    return (
      <div className={styles.content}>
          <Wallpaper/>
          <Ava {...props.userProfile}/>
          <Bio {...props.userProfile}
               userStatus={props.userStatus}
               updateMyStatus={props.updateMyStatus}
               loadPhoto={props.loadPhoto}
               isUser={!!props.match.params.userId}
          />
          <MyPosts  postsData={props.postsData}
                    Ava={<Ava {...props.userProfile} />}
                    addPost={props.addPost}
                    deletePost={props.deletePost}
          />
      </div>
    )
}

export default Profile;