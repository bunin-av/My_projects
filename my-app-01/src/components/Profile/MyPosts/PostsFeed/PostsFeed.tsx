import React from "react";
import Post from "./Post/Post";

const PostsFeed = (props: any) => {
    let postElements = props.postsData.map((postsData: { text: string; likes: number; }) =>
      <Post message={postsData.text} likes={postsData.likes} key={Math.random()*100} Ava={props.Ava}/>)

    return (
      <div>
          {postElements}
      </div>
    )
}

export default PostsFeed;