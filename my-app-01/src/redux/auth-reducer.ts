import {authAPI} from "../API/API";
import {Dispatch} from "redux";

const SET_AUTH: string = 'SET_AUTH'
const LOG_IN: string = 'LOG_IN'
const LOG_OUT: string = 'LOG_OUT'

/*type ActionType = {
    type: string
    authData: { id: number, email: string, login: string }
    loginData: LogInDataType
}*/

export type LogInDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: boolean
}

export type AuthStateType = {
    id: number | null
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

const authReducer = (state = initialState, action: ActionType): AuthStateType => {
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                ...action.payload,
            }
/*        case LOG_IN:
            return {
                ...state,
                ...action.loginData,
            }*/
/*        case LOG_OUT:
            return {
                ...state,
                ...initialState
            }*/
        default:
            return state
    }
}

export default authReducer

type ActionType = ReturnType<typeof setAuth>

//AC
export const setAuth = (id: number, email: string, login: string, isAuth: boolean) => ({
    type: SET_AUTH,
    payload: {id, email, login, isAuth}
}) as const


//thunks
export const getAuthMe = () => {
    return async (dispatch: Dispatch<any>) => {
        const data = await authAPI.getAuthMe()
        if (data.resultCode === 0) {
            let {id, email, login} = data.data;
            dispatch(setAuth(id, email, login, true));
        }
    }
}

export const doLogIn = (logInData: LogInDataType) => {
    return async (dispatch: (data: {}) => void) => {
        const data = await authAPI.logIn(logInData)
        if (data.resultCode === 0) {
            dispatch(getAuthMe())
        }
    }
}

export const doLogOut = () => {
    return async (dispatch: Dispatch<any>) => {
        const data = await authAPI.logOut()
        if (data.resultCode === 0) {
            dispatch(setAuth(0, '', '', false))
        }
    }
}
