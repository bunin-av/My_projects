import {authAPI} from "../API/API";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {RootState} from "./redux-store";

const SET_AUTH = 'SET_AUTH'
// const LOG_IN = 'LOG_IN'
// const LOG_OUT = 'LOG_OUT'
const SET_CAPTCHA = 'SET_CAPTCHA'
const SET_ERROR = 'SET_ERROR'

export type LogInDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

export type AuthStateType = {
    id: number
    email: string | null
    login: string | null
    isAuth: boolean
    password: string | null
    rememberMe: boolean
    captcha: string
    error: string[]
}

const initialState: AuthStateType = {
    id: 0,
    email: null,
    login: null,
    isAuth: false,
    password: null,
    rememberMe: false,
    captcha: '',
    error: [],
}

const authReducer = (state = initialState, action: ActionType): AuthStateType => {
    switch (action.type) {
        case SET_AUTH:
        case SET_CAPTCHA:
        case SET_ERROR:
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
    | ReturnType<typeof setCaptcha>
    | ReturnType<typeof setError>

//AC
export const setAuth = (id: number, email: string, login: string, isAuth: boolean) => ({
    type: SET_AUTH,
    payload: {id, email, login, isAuth}
}) as const
export const setCaptcha = (captcha:string) => ({
    type: SET_CAPTCHA,
    payload: {captcha}
}) as const
export const setError = (error:string[]) => ({
    type: SET_ERROR,
    payload: {error}
}) as const


//thunks
export const getAuthMe = () => {
    return async (dispatch: Dispatch<ReturnType<typeof setAuth | typeof setError>>) => {
        const data = await authAPI.getAuthMe()
        if (data.resultCode === 0) {
            let {id, email, login} = data.data;
            dispatch(setAuth(id, email, login, true));
        } else{
            dispatch(setError(data.messages))
        }
    }
}

export const doLogIn = (logInData: LogInDataType): ThunkAction<void, RootState, unknown, ActionType> => {
    return async (dispatch) => {
        const data = await authAPI.logIn(logInData)
        if (data.resultCode === 0) {
            await dispatch(getAuthMe())
        } else{
            dispatch(setError(data.messages))
            const captchaData = await authAPI.getCaptcha()
            dispatch(setCaptcha(captchaData.url))
        }
    }
}

export const doLogOut = () => {
    return async (dispatch: Dispatch<ReturnType<typeof setAuth>>) => {
        const data = await authAPI.logOut()
        if (data.resultCode === 0) {
            dispatch(setAuth(0, '', '', false))
        }
    }
}

export const getCaptcha = () => {
    return async (dispatch: Dispatch<ReturnType<typeof setCaptcha>>) => {
        const data = await authAPI.getCaptcha()
        console.log(data)
        dispatch(setCaptcha(data))
    }
}

