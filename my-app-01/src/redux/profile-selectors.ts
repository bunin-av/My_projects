import {MSTPType} from "../components/Profile/ProfileContainer";

export const getUserProfileSl = (state: MSTPType) => {
    return state.profilePage.userProfile
}
export const getAuthIDSl = (state: MSTPType) => {
    return state.auth.id
}
export const getIsAuthSl = (state: MSTPType) => {
    return state.auth.isAuth
}
export const getUserStatusSl = (state: MSTPType) => {
    return state.profilePage.userStatus
}
export const getPostDataSl = (state: MSTPType) => {
    return state.profilePage.postsData
}