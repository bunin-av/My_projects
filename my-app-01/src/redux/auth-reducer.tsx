const SET_AUTH = 'SET_AUTH'

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}
const authReducer = (state: any = initialState, action: { type: string, data: { id: number, email: string, login: string } }) => {
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        default:
            return state;
    }
}

export const setAuth = (id: number, email: string, login: string) => ({type: SET_AUTH, data: {id, email, login}})

export default authReducer