import MyPosts from "./MyPosts";
import {addPostActionCreator, newPostUpdateActionCreator} from "../../../redux/profile-reducer";
import {connect} from "react-redux";


let mapState = (state: any) => {
    return {
        newPostText: state.profilePage.newPostText,
        postsData: state.profilePage.postsData
    }
}

let mapDispatch = (dispatch: any) => {
    return {
        addNewPost: () => {
            let action = addPostActionCreator();
            dispatch(action);
        },
        updateNewPost: (text: any) => {
            let action = newPostUpdateActionCreator(text);
            dispatch(action);
        }
    }
}

export default connect(mapState,mapDispatch)(MyPosts)






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