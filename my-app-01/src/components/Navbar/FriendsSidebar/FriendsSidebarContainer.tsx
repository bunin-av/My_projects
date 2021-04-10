import React from "react";
import FriendsSidebar from "./FriendsSidebar";

const FriendsSidebarContainer = (props: any) => {
    debugger
    return <FriendsSidebar state={props.store.getState().friendsSidebar} />
}

export default FriendsSidebarContainer