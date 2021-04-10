import React from "react";
import {addPostActionCreator, newPostUpdateActionCreator} from "../../../redux/profile-reducer";
import styles from "./MyPosts.module.scss";
import Post from "./Post/Post";


const MyPosts = (props: any) => {
    return (
      <div className={styles.MyPosts}>
          <h3>My posts</h3>
          <PostInput newPostText={props.state.newPostText} dispatch={props.dispatch}/>
          <PostsFeed state={props.state.postsData}/>
      </div>
    )
}


const PostInput = (props: any) => {
    let addNewPost = () => {
        let action = addPostActionCreator();
        props.dispatch(action);
    }

    let updateNewPost = (e: any) => {
        let text = e.target.value;
        let action = newPostUpdateActionCreator(text);
        props.dispatch(action);
    }

    return (
      <div className={styles.MyPosts__inputItems}>
          <div>
              <textarea onChange={updateNewPost}
                        placeholder="Your news..."
                        value={props.newPostText}
                        className={styles.MyPosts__input}/>
          </div>
          <div>
              <button onClick={addNewPost} className={styles.MyPosts__sendButton}>Send</button>
          </div>
      </div>
    )
}


const PostsFeed = (props: any) => {
    let postElements = props.state.map((postsData: { text: string; likes: number; }) =>
      <Post message={postsData.text} likes={postsData.likes}/>)

    return (
      <div>
          {postElements}
      </div>
    )
}

export default MyPosts;