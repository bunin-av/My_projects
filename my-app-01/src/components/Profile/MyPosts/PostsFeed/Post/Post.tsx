import React from "react";
import styles from "./Post.module.scss"


type PostPropsType = {
    message: string,
    likes: number
    Ava: React.FC
    deletePost: (id:number)=>void
    postID: number
}

const Post = (props: PostPropsType) => {
    return (
      <div className={styles.Post}>
          <div>
              {props.Ava}
              {props.message}
          </div>
          <div>
              <img src="https://www.iconpacks.net/icons/2/free-instagram-like-icon-3507-thumb.png" alt=""/>
          </div>
          <div>
              {props.likes}
          </div>
          <button className={styles.deleteButton} onClick={()=> props.deletePost(props.postID)}>x</button>
      </div>
    )
}

export default Post;