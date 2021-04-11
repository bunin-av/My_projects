import React from "react";
import MyPosts from "./MyPosts";
import {addPostActionCreator, newPostUpdateActionCreator} from "../../../redux/profile-reducer";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = () => {


    return (
      <StoreContext.Consumer>
          {(store) => {
              let addNewPost = () => {
                  let action = addPostActionCreator();
                  store.dispatch(action);
              }
              let updateNewPost = (text: string) => {
                  let action = newPostUpdateActionCreator(text);
                  store.dispatch(action);
              }
              return <MyPosts newPostText={store.getState().profilePage.newPostText}
                              addNewPost={addNewPost}
                              updateNewPost={updateNewPost}
                              postsData={store.getState().profilePage.postsData}/>
          }}
      </StoreContext.Consumer>
    )
}


export default MyPostsContainer;