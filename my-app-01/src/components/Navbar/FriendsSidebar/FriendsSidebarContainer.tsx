import FriendsSidebar from "./FriendsSidebar";
import {connect, ConnectedProps} from "react-redux";
import React from "react";
import {RootState} from "../../../redux/redux-store";


class FriendsSidebarContainer extends React.Component<FriendsSideBarProps> {
    render() {
        return <FriendsSidebar {...this.props} />
    }
}

let mapStateToProps = (state: RootState) => {
    return {
        friendList: state.findFriendsPage.friendList
    }
}

export type FriendsSideBarProps = ConnectedProps<typeof connector>
const connector = connect(mapStateToProps)
export default connector(FriendsSidebarContainer)


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