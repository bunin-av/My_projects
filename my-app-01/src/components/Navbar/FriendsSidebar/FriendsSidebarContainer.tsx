import React from "react";
import FriendsSidebar from "./FriendsSidebar";
import StoreContext from "../../../StoreContext";

const FriendsSidebarContainer = () => {

    return (
      <StoreContext.Consumer>
          {(store) => (
            <FriendsSidebar state={store.getState().friendsSidebar}/>
          )}
      </StoreContext.Consumer>
    )
}

export default FriendsSidebarContainer