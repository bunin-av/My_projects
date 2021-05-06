import {profileAPI} from "../API/API";
import {Dispatch} from "redux";

const SET_AUTH: string = 'SET_AUTH'

type actionType = {
    type: string
    data: { id: number, email: string, login: string }
}


const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}
const authReducer = (state = initialState, action: actionType) => {
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
    return (dispatch: Dispatch<actionType>) => {
        profileAPI.getAuthMe()
          .then((data) => {
              if (data.resultCode === 0) {
                  let {id, email, login} = data.data;
                  dispatch(setAuth(id, email, login));
              }
          })
    }
}