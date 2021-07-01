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
export type RootState = ReturnType<typeof store.getState>

export type InferActionTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never


//@ts-ignore
window.store = store

export default store