import {MSTPType} from "../components/Profile/ProfileContainer";
import {RootState} from "./redux-store";

export const getUserProfileSl = (state: RootState) => {
    return state.profilePage.userProfile
}
export const getAuthIDSl = (state: RootState) => {
    return state.auth.id
}
export const getIsAuthSl = (state: RootState) => {
    return state.auth.isAuth
}
export const getUserStatusSl = (state: RootState) => {
    return state.profilePage.userStatus
}
export const getPostDataSl = (state: RootState) => {
    return state.profilePage.postsData
}