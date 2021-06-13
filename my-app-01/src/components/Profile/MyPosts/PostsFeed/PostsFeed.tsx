import React from "react";
import Post from "./Post/Post";

const PostsFeed = (props: any) => {
    let postElements = props.postsData.map((postsData: { id: number, text: string; likes: number; }) =>
      <Post
        message={postsData.text}
        likes={postsData.likes}
        key={postsData.id}
        Ava={props.Ava}
        deletePost={props.deletePost}
        postID={postsData.id}
      />)

    return (
      <div>
          {postElements}
      </div>
    )
}

export default PostsFeed;