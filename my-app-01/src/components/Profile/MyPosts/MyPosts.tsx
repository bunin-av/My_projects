import React from "react";
import styles from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = (props: any) => {
    return (
      <div className={styles.MyPosts}>
          <h3>My posts</h3>
          <PostInput/>
          <PostsFeed postsData={props.postsData}/>
      </div>
    )
}


const PostInput = () => {
    let newPostElement: any = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }

    return (
      <div className={styles.MyPosts__inputItems}>
          <div>
              <textarea placeholder="Your news..." ref={newPostElement} className={styles.MyPosts__input}
                name="" id=""/>
          </div>
          <div>
              <button onClick={addPost} className={styles.MyPosts__sendButton}>Send</button>
          </div>
      </div>
    )
}


const PostsFeed = (props: any) => {
    let postElements = props.postsData.map((postsData: { text: string; likes: number; }) =>
      <Post message={postsData.text} likes={postsData.likes}/>)

    return (
      <div>
          {postElements}
      </div>
    )
}

export default MyPosts;