import React from "react";
import styles from "../MyPosts.module.scss";

const PostInput = (props: any) => {

    let onTextChange = (e: any) => {
        let text = e.target.value;
        props.updateNewPost(text);
    }

    return (
      <div className={styles.MyPosts__inputItems}>
          <div>
              <textarea onChange={onTextChange}
                        placeholder="Your news..."
                        value={props.newPostText}
                        className={styles.MyPosts__input}/>
          </div>
          <div>
              <button onClick={props.addNewPost} className={styles.MyPosts__sendButton}>Send</button>
          </div>
      </div>
    )
}

export default PostInput;