import React from "react";
import MyPosts from "./MyPosts";
import {addPostActionCreator, newPostUpdateActionCreator} from "../../../redux/profile-reducer";


const MyPostsContainer = (props: any) => {
    let addNewPost = () => {
        let action = addPostActionCreator();
        props.store.dispatch(action);
    }
    let updateNewPost = (text: string) => {
        let action = newPostUpdateActionCreator(text);
        props.store.dispatch(action);
    }

    return (
      <MyPosts newPostText={props.store.getState().profilePage.newPostText}
               addNewPost={addNewPost}
               updateNewPost={updateNewPost}
               postsData={props.store.getState().profilePage.postsData}/>
    )
}


export default MyPostsContainer;