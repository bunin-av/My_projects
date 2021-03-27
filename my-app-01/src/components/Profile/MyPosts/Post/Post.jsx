import React from "react";
import styles from "./Post.module.scss"

const Post = ()=>{
  return <div className={styles.newPost}>
    <img
        src="http://sun9-44.userapi.com/s/v1/if1/qw3vWR63rnWIPexrEErujILvop-GpxX8MJRJx1emFNrgy2Ve9Hf3sqh5NLHETJNtyNMxaiTe.jpg?size=200x0&quality=96&crop=18,0,586,594&ava=1"
        alt=""/>
        New post
  </div>
}

export default Post;