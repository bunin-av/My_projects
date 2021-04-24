import {profileAPI} from "../API/API";

const SET_AUTH = 'SET_AUTH'

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state = initialState, action: { type: string, data: { id: number, email: string, login: string } }) => {
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        default:
            return state
    }
}

export default authReducer


export const setAuth = (id: number, email: string, login: string) => ({type: SET_AUTH, data: {id, email, login}})

export const getAuthMe = () => {
    return (dispatch: (arg0: { type: string; data: { id: number; email: string; login: string; }; }) => void) => {
        profileAPI.getAuthMe()
          .then((data) => {
              let {id, email, login} = data.data;
              dispatch(setAuth(id, email, login));
          })
    }
}