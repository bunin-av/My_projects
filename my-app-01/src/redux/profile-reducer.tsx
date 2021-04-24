import {profileAPI} from "../API/API";

const ADD_POST = "ADD_POST";
const NEW_POST_UPDATE = "NEW_POST_UPDATE";
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    postsData: [
        {id: 1, text: "Hi, man!", likes: 10},
        {id: 2, text: "It's my first app!", likes: 12},
        {id: 3, text: "Yo guys", likes: 12},
    ],
    newPostText: '',
    userProfile: null,
};


const profileReducer = (state = initialState, action: { type: string; newText: string; userProfile: any }) => {
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
export const setUserProfile = (userProfile: boolean) => ({type: SET_USER_PROFILE, userProfile})

//thunks
export const getUserProfile = (userId: number, authId: number) => {
    return (dispatch: (arg0: { type: string; userProfile: boolean; }) => void) => {
        if (!userId) userId = authId;
        profileAPI.getUserProfile(userId)
          .then((data) => {
              dispatch(setUserProfile(data));
          });
    }
}


