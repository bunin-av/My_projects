import {profileAPI} from "../API/API";
import {Dispatch} from "redux";
import {RootState} from "./redux-store";
import {ThunkAction} from "redux-thunk";
import {UserInfoDataType} from "../components/Profile/Bio/EditProfileForm/EditProfileForm";


//types of actions
export const ADD_POST = 'ADD_POST';
// const NEW_POST_UPDATE: string = "NEW_POST_UPDATE";
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SET_PHOTO = 'SET_PHOTO';
const DELETE_POST = 'DELETE_POST'

// types
export type PostsDataType = Array<PostType>
export type PostType = {
    id: number
    text: string
    likes: number
}
export type InitialStateType = typeof initialState

export type UserProfileType = {
    userId: number
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: { small: string, large: string }
}
export type ActionType = ReturnType<typeof addPost>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setUserStatus>
    | ReturnType<typeof deletePost>
    | ReturnType<typeof setUserPhoto>

// reducer
const initialState = {
    postsData: [
        {id: 1, text: "Hi, man!", likes: 10},
        {id: 2, text: "It's my first app!", likes: 12},
        {id: 3, text: "Yo guys", likes: 12},
    ],
    // newPostText: '',
    userProfile: {} as UserProfileType,
    userStatus: '',
    userPhoto: '',
};

export const profileReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: PostType = {
                ...action.payload,
                id: new Date().getTime(),
                likes: 0
            };
            return {...state, postsData: [newPost, ...state.postsData]};
        }
        case DELETE_POST:
            return {
                ...state,
                postsData: [...state.postsData].filter(p => p.id !== action.payload.id)
            }
        // case NEW_POST_UPDATE: {
        //     return {...state, newPostText: action.newText};
        // }
        case SET_PHOTO:
            return {
                ...state,
                userProfile: {
                    ...state.userProfile,
                    photos: {
                        ...state.userProfile.photos,
                        ...action.payload
                    }
                }
            }
        case SET_STATUS:
        case SET_USER_PROFILE:
            return {...state, ...action.payload}
        default:
            return state;
    }
}

export default profileReducer;

//AC
export const addPost = (text: string) =>
    ({type: ADD_POST, payload: {text} as PostType}) as const
export const deletePost = (id: number) =>
    ({type: DELETE_POST, payload: {id} as PostType}) as const
// export const newPostUpdateActionCreator = (text: string) => ({type: NEW_POST_UPDATE, newText: text});
export const setUserProfile = (userProfile: UserProfileType) =>
    ({type: SET_USER_PROFILE, payload: {userProfile} as InitialStateType}) as const
export const setUserStatus = (userStatus: string) =>
    ({type: SET_STATUS, payload: {userStatus} as InitialStateType}) as const
export const setUserPhoto = (file: string) => ({type: SET_PHOTO, payload: {file}}) as const
// export const setProfileInfo = (file: string) => ({type: SET_PHOTO, payload: {file}}) as const

//thunks
export const getUserProfile = (userId: number) => {
    return async (dispatch: Dispatch<ActionType>) => {
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

type UpdateProfile = ThunkAction<void, RootState, unknown, ActionType>
export const updateMyProfileInfo = (info: UserInfoDataType,
                                    callback: (err: { [key: string]: string }) => void,
                                    turnOffEditMode: () => void): UpdateProfile => {
    return async (dispatch, getState: () => RootState) => {
        const data = await profileAPI.loadProfileInfo(info)
        if (data.resultCode === 0) {
            await dispatch(getUserProfile(getState().auth.id))
            turnOffEditMode()
        } else {
            let err = data.messages[0]
            let key = err.split('->')[1].slice(0, err.split('->')[1].length - 1).toLowerCase()
            callback({['contacts.' + key]: err})
        }
    }
}

export const loadPhoto = (file: File) => {
    return async (dispatch: Dispatch<ActionType>) => {
        const data = await profileAPI.loadPhoto(file)
        if (data.resultCode === 0) {
            dispatch(setUserPhoto(data.data.large) as ActionType);
        }
    }
}


