import {profileAPI} from "../API/API";
import {Dispatch} from "redux";

const ADD_POST: string = "ADD_POST";
const NEW_POST_UPDATE: string = "NEW_POST_UPDATE";
const SET_USER_PROFILE: string = 'SET_USER_PROFILE';

// types
type postsDataType = Array<postType>
type postType = {
    id: number
    text: string
    likes: number
}
type initialStateType = {
    postsData: postsDataType
    newPostText: string
    userProfile: UserProfileType
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
type actionType = {
    type: string
    newText: string
    userProfile: UserProfileType
}

// reducer
let initialState: initialStateType = {
    postsData: [
        {id: 1, text: "Hi, man!", likes: 10},
        {id: 2, text: "It's my first app!", likes: 12},
        {id: 3, text: "Yo guys", likes: 12},
    ],
    newPostText: '',
    userProfile: {},
};

const profileReducer = (state = initialState, action: actionType) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: { id: number; text: string; likes: number } = {
                id: 5,
                text: state.newPostText,
                likes: 0
            };
            return {...state, postsData: [...state.postsData, newPost], newPostText: ''};
        }
        case NEW_POST_UPDATE: {
            return {...state, newPostText: action.newText};
        }
        case SET_USER_PROFILE: {
            return {...state, userProfile: action.userProfile}
        }
        default:
            return state;
    }
}

export default profileReducer;

//AC
export const addPostActionCreator = () => ({type: ADD_POST});
export const newPostUpdateActionCreator = (text: string) => ({type: NEW_POST_UPDATE, newText: text});
export const setUserProfile = (userProfile: UserProfileType) => ({type: SET_USER_PROFILE, userProfile})

//thunks
export const getUserProfile = (userId: number, authId: number) => {
    return (dispatch: Dispatch<actionType>) => {
        if (!userId) userId = authId;
        profileAPI.getUserProfile(userId)
          .then((data) => {
              dispatch(setUserProfile(data) as actionType);
          });
    }
}


