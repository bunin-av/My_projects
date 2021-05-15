import {authAPI} from "../API/API";
import {Dispatch} from "redux";

const SET_AUTH: string = 'SET_AUTH'
const LOG_IN: string = 'LOG_IN'
const LOG_OUT: string = 'LOG_OUT'

type ActionType = {
    type: string
    authData: { id: number, email: string, login: string }
    loginData: LogInDataType
}

export type LogInDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: boolean
}

export type AuthStateType = {
    id: string | null
    email: string | null
    login: string | null
    isAuth: boolean
    password: string | null
    rememberMe: boolean
    captcha: boolean
}

const initialState: AuthStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    password: null,
    rememberMe: false,
    captcha: false,
}

const authReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                ...action.authData,
                // isAuth: true,
            }
        case LOG_IN:
            return {
                ...state,
                ...action.loginData,
            }
        case LOG_OUT:
            return {
                ...state,
                ...initialState
            }
        default:
            return state
    }
}

export default authReducer

//AC
export const setAuth = (id: number, email: string, login: string, isAuth: boolean) => ({type: SET_AUTH, authData: {id, email, login, isAuth}})



//thunks
export const getAuthMe = () => {
    return (dispatch: Dispatch<any>) => {
        authAPI.getAuthMe()
          .then((data) => {
              if (data.resultCode === 0) {
                  let {id, email, login} = data.data;
                  dispatch(setAuth(id, email, login, true));
              }
          })
    }
}

export const doLogIn = (logInData: LogInDataType) => {
    return (dispatch: (data: {}) => void) => {
        authAPI.logIn(logInData)
          .then((data) => {
              if (data.resultCode === 0) {
                  dispatch(getAuthMe())
              }
          })
    }
}

export const doLogOut = () => {
    return (dispatch: Dispatch<any>) => {
        authAPI.logOut()
          .then((data) => {
              if (data.resultCode === 0) {
                  dispatch(setAuth(0,'','',false))
              }
          })
    }
}
