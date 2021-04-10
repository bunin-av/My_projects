import React from "react";
import Post from "./Post/Post";

const PostsFeed = (props: any) => {
    debugger
    let postElements = props.postsData.map((postsData: { text: string; likes: number; }) =>
      <Post message={postsData.text} likes={postsData.likes}/>)

    return (
      <div>
          {postElements}
      </div>
    )
}

export default PostsFeed;