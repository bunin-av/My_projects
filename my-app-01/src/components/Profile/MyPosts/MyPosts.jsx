import React from "react";
import styles from "./MyPosts.module.scss"
import Post from "./Post/Post";

const MyPosts = () => {
  return <div className={styles.MyPosts}>
    <h3>My posts</h3>
    <input type="text" placeholder="Your news..." className={styles.MyPosts__input}/>
    <input type="submit" value="Send" className={styles.MyPosts__sendButton}/>
    <Post/>
  </div>
}

export default MyPosts;