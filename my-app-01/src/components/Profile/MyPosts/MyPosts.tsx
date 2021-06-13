import React from "react";
import styles from "./MyPosts.module.scss";
import PostInput from "./PostInput/PostInput";
import PostsFeed from "./PostsFeed/PostsFeed";


const MyPosts = (props: any) => {
    return (
      <div className={styles.MyPosts}>
          <h3>My posts</h3>
          <PostInput addNewPost={props.addPost}/>
          <PostsFeed postsData={props.postsData} Ava={props.Ava} deletePost={props.deletePost}/>
      </div>
    )
}


export default MyPosts;