import FriendsSidebar from "./FriendsSidebar";
import {connect} from "react-redux";
import React from "react";


class FriendsSidebarContainer extends React.Component<any, any> {
    render() {
        return <FriendsSidebar {...this.props} />
    }
}

let mapStateToProps = (state: any) => {
    return {
        friendList: state.findFriendsPage.friendList
    }
}

export default connect(mapStateToProps)(FriendsSidebarContainer)


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