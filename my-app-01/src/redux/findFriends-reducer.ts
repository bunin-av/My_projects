import {usersAPI} from "../API/API";


// actions
const SET_USERS = 'SET_USERS';
const TOGGLE_FRIEND = "TOGGLE_FRIEND";
const CHANGE_PAGE = "CHANGE_PAGE";
const SET_COUNT = "SET_COUNT";
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_FRIEND_LIST = 'SET_FRIEND_LIST';
const FOllOWING_IN_PROGRESS = 'FOllOWING_IN_PROGRESS';


//reducer
const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    friendList: [],
    followingInProgress: [],
};

const findFriendsReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case TOGGLE_FRIEND:
            return {
                ...state,
                users: state.users.map((u: { id: number; followed: boolean; }) => {
                    if (u.id === action.id) {
                        return {...u, followed: !u.followed}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                // users: [...state.users, ...action.users]
                users: [...action.users]
            }
        case CHANGE_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case SET_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case SET_FRIEND_LIST:
            return {
                ...state,
                friendList: action.friends
            }
        case FOllOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress:
                  (action.isFetching)
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter((id: number) => id !== action.userId)
            }
        default:
            return state;
    }
}


export default findFriendsReducer;

//AC
export const setUsers = (users: any) => ({type: SET_USERS, users: users});
export const toggleFriend = (id: number) => ({type: TOGGLE_FRIEND, id: id});
export const changePage = (page: number) => ({type: CHANGE_PAGE, page});
export const setTotalCount = (count: number) => ({type: SET_COUNT, count});
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const setFriendList = (friends: any) => ({type: SET_FRIEND_LIST, friends});
export const followingProgress = (isFetching: boolean, userId: number) => ({
    type: FOllOWING_IN_PROGRESS, isFetching, userId
});

// thunks
export const getUsers = (currentPage: number, pageSize: number, isChangePage: boolean) => {
    return async (dispatch: any) => {
        dispatch(toggleIsFetching(true));
        const data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setFriendList(data.items.filter((u: any) => u.followed)))
        (isChangePage)
          ? dispatch(changePage(currentPage))
          : dispatch(setTotalCount(data.totalCount / 100))
    }
}


export const followUnfollowUser = (isUserFollowed: boolean, userId: number) => {
    return async (dispatch: (arg0: { type: string; isFetching?: boolean; userId?: number; id?: number; friends?: any; }) => void, getState: Function) => {
        dispatch(followingProgress(true, userId));
        if (!isUserFollowed) {
            const data = await usersAPI.followUser(userId)
            if (data.resultCode === 0) {
                dispatch(toggleFriend(userId));
                dispatch(setFriendList(getState().findFriendsPage.users.filter((u: any) => u.followed)));
                dispatch(followingProgress(false, userId));
            }
        } else if (isUserFollowed) {
            const data = await usersAPI.unfollowUser(userId)
            if (data.resultCode === 0) {
                dispatch(toggleFriend(userId));
                dispatch(setFriendList(getState().findFriendsPage.users.filter((u: any) => u.followed)));
                dispatch(followingProgress(false, userId));
            }
        }
    }
}
