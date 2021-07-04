import React from "react";
import styles from "./MyPosts.module.scss";
import PostInput from "./PostInput/PostInput";
import PostsFeed from "./PostsFeed/PostsFeed";
import {PostsDataType} from "../../../redux/profile-reducer";

type MePostsProps = {
    postsData: PostsDataType
    Ava: JSX.Element
    addPost: (text: string) => void
    deletePost: (id: number) => void
}

const MyPosts = (props: MePostsProps) => {
    return (
      <div className={styles.MyPosts}>
          <h3>My posts</h3>
          <PostInput addNewPost={props.addPost}/>
          <PostsFeed postsData={props.postsData} Ava={props.Ava} deletePost={props.deletePost}/>
      </div>
    )
}


export default MyPosts;