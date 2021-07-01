import {profileAPI} from "../API/API";
import {Dispatch} from "redux";


//types of actions
export const ADD_POST = 'ADD_POST';
// const NEW_POST_UPDATE: string = "NEW_POST_UPDATE";
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST'

// types
export type postsDataType = Array<postType>
export type postType = {
    id: number
    text: string
    likes: number
}
export type initialStateType = {
    postsData: postsDataType
    // newPostText: string
    userProfile: UserProfileType
    userStatus: string
}
export type UserProfileType = {
    userId?: number
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    fullName?: string
    contacts?: {}
    github?: string
    vk?: string
    facebook?: string
    instagram?: string
    twitter?: string
    website?: string
    youtube?: string
    mainLink?: string
    photos?: { small: string, large: string }
}
export type ActionType = ReturnType<typeof addPost>
  | ReturnType<typeof setUserProfile>
  | ReturnType<typeof setUserStatus>
  | ReturnType<typeof deletePost>

// reducer
const initialState: initialStateType = {
    postsData: [
        {id: 1, text: "Hi, man!", likes: 10},
        {id: 2, text: "It's my first app!", likes: 12},
        {id: 3, text: "Yo guys", likes: 12},
    ],
    // newPostText: '',
    userProfile: {},
    userStatus: '',
};

export const profileReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: postType = {
                id: new Date().getTime(),
                text: action.newText,
                likes: 0
            };
            return {...state, postsData: [newPost, ...state.postsData]};
        }
        case DELETE_POST:
            return {...state, postsData: [...state.postsData].filter(p => p.id !== action.id)}
      // case NEW_POST_UPDATE: {
      //     return {...state, newPostText: action.newText};
      // }
        case SET_USER_PROFILE: {
            return {...state, userProfile: action.userProfile}
        }
        case SET_STATUS: {
            return {...state, userStatus: action.status}
        }
        default:
            return state;
    }
}

export default profileReducer;

//AC
export const addPost = (newText: string) => ({type: ADD_POST, newText}) as const
export const deletePost = (id: number) => ({type: DELETE_POST, id}) as const
// export const newPostUpdateActionCreator = (text: string) => ({type: NEW_POST_UPDATE, newText: text});
export const setUserProfile = (userProfile: UserProfileType) => ({type: SET_USER_PROFILE, userProfile}) as const
export const setUserStatus = (userStatus: string) => ({type: SET_STATUS, status: userStatus}) as const

//thunks
export const getUserProfile = (userId: number, authId: number) => {
    return async (dispatch: Dispatch<ActionType>) => {
        if (!userId) userId = authId;
        const data = await profileAPI.getUserProfile(userId)
        dispatch(setUserProfile(data) as ActionType);
    }
}

export const getUserStatus = (userId: number) => {
    return async (dispatch: Dispatch<ActionType>) => {
        const data = await profileAPI.getUserStatus(userId)
        dispatch(setUserStatus(data) as ActionType);
    }
}

export const updateMyStatus = (status: string) => {
    return async (dispatch: Dispatch<ActionType>) => {
        const data = await profileAPI.updateMyStatus(status)
        if (data.resultCode === 0) {
            dispatch(setUserStatus(status) as ActionType);
        }
    }
}


