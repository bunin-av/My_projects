import {getAuthMe} from "./auth-reducer";
import {ThunkDispatch} from "redux-thunk";

const INITIALIZE_APP = 'INITIALIZE_APP'

type StateType = typeof initialState
const initialState = {
    isInitialized: false,
}

type ActionType = ReturnType<typeof initializeApp>

export const appReducer = (state: StateType = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case INITIALIZE_APP:
            return {
                ...state,
                isInitialized: true
            }
        default:
            return state
    }
}

//AC
const initializeApp = () => ({type: INITIALIZE_APP}) as const


//thunks
export const getInitialized = () => (dispatch: ThunkDispatch<typeof initialState, unknown, ReturnType<typeof initializeApp>>) => {
    const promise = dispatch(getAuthMe())
    //do something else
    Promise.all([promise])
      .then(() => {
          dispatch(initializeApp())
      })
}

