import React from "react";
import styles from "./MyPosts.module.scss";
import PostInput from "./PostInput/PostInput";
import PostsFeed from "./PostsFeed/PostsFeed";


const MyPosts = (props: any) => {
    return (
      <div className={styles.MyPosts}>
          <h3>My posts</h3>
          {/*<PostInput newPostText={props.state.newPostText} dispatch={props.dispatch}/>*/}
          <PostInput newPostText={props.newPostText}
                     addNewPost={props.addNewPost}
                     updateNewPost={props.updateNewPost}/>
          {/*<PostsFeed state={props.state.postsData}/>*/}
          <PostsFeed postsData={props.postsData}/>
      </div>
    )
}


export default MyPosts;