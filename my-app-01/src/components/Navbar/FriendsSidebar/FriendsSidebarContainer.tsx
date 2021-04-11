import FriendsSidebar from "./FriendsSidebar";
import {connect} from "react-redux";



let mapStateToProps = (state:any)=>{
    return {
        friendsSidebar: state.friendsSidebar
    }
}

const FriendsSidebarContainer = connect(mapStateToProps)(FriendsSidebar)


export default FriendsSidebarContainer






// const FriendsSidebarContainer = () => {
//
//     return (
//       <StoreContext.Consumer>
//           {(store) => (
//             <FriendsSidebar state={store.getState().friendsSidebar}/>
//           )}
//       </StoreContext.Consumer>
//     )
// }