import {usersAPI} from "../API/API";
import {ThunkAction} from "redux-thunk";
import {InferActionTypes, RootState} from "./redux-store";
import {Dispatch} from "redux";


// actions
const SET_USERS = 'SET_USERS';
const TOGGLE_FRIEND = "TOGGLE_FRIEND";
const CHANGE_PAGE = "CHANGE_PAGE";
const SET_COUNT = "SET_COUNT";
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_FRIEND_LIST = 'SET_FRIEND_LIST';
const FOllOWING_IN_PROGRESS = 'FOllOWING_IN_PROGRESS';

export type User = {
    followed: boolean
    id: number
    name: string
    photos: { small: string | null, large: string | null }
    status?: string
    uniqueUrlName: string
}
//reducer
const initialState = {
    users: [] as User[],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    friendList: [] as User[],
    followingInProgress: [] as number[],
};

type StateType = typeof initialState

type ActionTypes = InferActionTypes<typeof findFriendsActions>

const findFriendsReducer = (state: StateType = initialState, action: ActionTypes): StateType => {
    switch (action.type) {
        case TOGGLE_FRIEND:
            return {
                ...state,
                users: state.users.map((u: User) => {
                    if (u.id === action.payload.id) {
                        return {...u, followed: !u.followed}
                    }
                    return u
                })
            }
        case FOllOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress:
                  (action.payload.isFetching)
                    ? [...state.followingInProgress, action.payload.userId]
                    : state.followingInProgress.filter((id: number) => id !== action.payload.userId)
            }
        case SET_USERS:
        case CHANGE_PAGE:
        case SET_COUNT:
        case TOGGLE_IS_FETCHING:
        case SET_FRIEND_LIST:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}


export default findFriendsReducer;

//AC
export const findFriendsActions = {
    setUsers: (users: User[]) => ({type: SET_USERS, payload: {users}} as const),
    toggleFriend: (id: number) => ({type: TOGGLE_FRIEND, payload: {id}} as const),
    changePage: (currentPage: number) => ({type: CHANGE_PAGE, payload: {currentPage}} as const),
    setTotalCount: (totalUsersCount: number) => ({type: SET_COUNT, payload: {totalUsersCount}} as const),
    toggleIsFetching: (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, payload: {isFetching}} as const),
    setFriendList: (friendList: User[]) => ({type: SET_FRIEND_LIST, payload: {friendList}} as const),
    followingProgress: (isFetching: boolean, userId: number) => ({
        type: FOllOWING_IN_PROGRESS, payload: {isFetching, userId}
    } as const),
}


// thunks
type ThunkType = ThunkAction<void, RootState, unknown, ActionTypes>
export const getUsers = (currentPage: number, pageSize: number, isChangePage: boolean): ThunkType => {
    return async (dispatch) => {
        dispatch(findFriendsActions.toggleIsFetching(true));
        const data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(findFriendsActions.toggleIsFetching(false));
        dispatch(findFriendsActions.setUsers(data.items));
        dispatch(findFriendsActions.setFriendList(data.items.filter((u: User) => u.followed)));
        (isChangePage)
          ? dispatch(findFriendsActions.changePage(currentPage))
          : dispatch(findFriendsActions.setTotalCount(data.totalCount / 100))
    }
}


export const followUnfollowUser = (isUserFollowed: boolean, userId: number): ThunkType => {
    return async (dispatch
      , getState: () => RootState) => {
        dispatch(findFriendsActions.followingProgress(true, userId));
        (!isUserFollowed)
          ? await followUnfollowFunc(dispatch, usersAPI.followUser, userId, getState)
          : await followUnfollowFunc(dispatch, usersAPI.unfollowUser, userId, getState)
    }
}

const followUnfollowFunc = async (dispatch: Dispatch,
                                  APIMethod: typeof usersAPI.followUser,
                                  userId: number,
                                  getState: () => RootState) => {
    const data = await APIMethod(userId)
    if (data.resultCode === 0) {
        dispatch(findFriendsActions.toggleFriend(userId));
        dispatch(findFriendsActions.setFriendList(getState().findFriendsPage.users.filter((u: User) => u.followed)));
        dispatch(findFriendsActions.followingProgress(false, userId));
    }
}
