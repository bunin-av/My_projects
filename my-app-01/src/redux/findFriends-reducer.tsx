import {usersAPI} from "../API/API";

const SET_USERS = 'SET_USERS';
const TOGGLE_FRIEND = "TOGGLE_FRIEND";
const CHANGE_PAGE = "CHANGE_PAGE";
const SET_COUNT = "SET_COUNT";
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_FRIEND_LIST = 'SET_FRIEND_LIST';
const FOllOWING_IN_PROGRESS = 'FOllOWING_IN_PROGRESS';

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
                friendList: [...state.friendList, ...action.friends]
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

// action creators
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
    return (dispatch: (arg0: { type: string; isFetching?: boolean; count?: number; friends?: any; }) => void) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize)
          .then((data) => {
              dispatch(toggleIsFetching(false));
              dispatch(setUsers(data.items));
              dispatch(setFriendList(data.items.filter((u: any) => u.followed)))
              if (isChangePage) {
                  dispatch(changePage(currentPage))
              } else {
                  dispatch(setTotalCount(data.totalCount / 100))
              }
          });
    }
}

export const followUnfollowUser = (isUserFollowed: boolean, userId: number, users: any) => {
    return (dispatch: (arg0: { type: string; isFetching?: boolean; userId?: number; id?: number; friends?: any; }) => void) => {
        dispatch(followingProgress(true, userId));
        if (!isUserFollowed) {
            usersAPI.followUser(userId)
              .then((data) => {
                  if (data.resultCode === 0) {
                      dispatch(toggleFriend(userId));
                      dispatch(setFriendList(users.filter((u: any) => u.followed)));
                      dispatch(followingProgress(false, userId));
                  }
              })
        } else if (isUserFollowed) {
            usersAPI.unfollowUser(userId)
              .then((data) => {
                  if (data.resultCode === 0) {
                      dispatch(toggleFriend(userId));
                      dispatch(setFriendList(users.filter((u: any) => u.followed)));
                      dispatch(followingProgress(false, userId));
                  }
              })
        }
    }
}
