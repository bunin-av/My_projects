import {MSTPType} from "../components/Profile/ProfileContainer";
import {RootState} from "./redux-store";
import {createSelector} from "reselect";

const getUserProfile = (state: RootState) => {
    return state.profilePage.userProfile
}
export const getUserProfileSl = createSelector(getUserProfile, (users) => users)


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