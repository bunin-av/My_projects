import {applyMiddleware, combineReducers, createStore} from "redux";
import friendsSidebarReducer from "./friendsSidebar-reducer";
import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import findFriendsReducer from "./findFriends-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {appReducer} from "./app-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    friendsSidebar: friendsSidebarReducer,
    findFriendsPage: findFriendsReducer,
    auth: authReducer,
    app: appReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

declare global {
    interface Window {
        store: any
    }
}
window.store = store

export default store