import MyPosts from "./MyPosts";
import {connect} from "react-redux";





// const MyPostsContainer = () => {
//     return (
//       <StoreContext.Consumer>
//           {(store) => {
//               let addNewPost = () => {
//                   let action = addPostActionCreator();
//                   store.dispatch(action);
//               }
//               let updateNewPost = (text: string) => {
//                   let action = newPostUpdateActionCreator(text);
//                   store.dispatch(action);
//               }
//               return <MyPosts newPostText={store.getState().profilePage.newPostText}
//                               addNewPost={addNewPost}
//                               updateNewPost={updateNewPost}
//                               postsData={store.getState().profilePage.postsData}/>
//           }}
//       </StoreContext.Consumer>
//     )
// }