// const addFriendActionType = "ADD-FRIEND";
// const unFriendActionType = "UNFRIEND";
const setUsersType = 'SET-USERS';
const ToggleFriendType = "TOGGLE-FRIEND";
const changePageType = "CHANGE-PAGE";
const setTotalCountType = "SET-COUNT";
const toggleIsFetchingType = 'TOGGLE-IS-FETCHING'

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
};

const findFriendsReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
      // case addFriendActionType:
      //     return {
      //         ...state,
      //         users: state.users.map(u => {
      //             if (u.id === action.id) {
      //                 return {...u, friend: true}
      //             }
      //             return u;
      //         })
      //     }
      // case unFriendActionType:
      //     return {
      //         ...state,
      //         users: state.users.map(u => {
      //             if (u.id === action.id) {
      //                 return {...u, friend: false}
      //             }
      //             return u;
      //         })
      //     }
        case ToggleFriendType:
            debugger
            return {
                ...state,
                users: state.users.map((u: { id: number; followed: boolean; }) => {
                    if (u.id === action.id) {
                        return {...u, followed: !u.followed}
                    }
                    return u;
                })
            }
        case setUsersType:
            return {
                ...state,
                // users: [...state.users, ...action.users]
                users: [...action.users]
            }
        case changePageType:
            return {
                ...state,
                currentPage: action.page
            }
        case setTotalCountType:
            return {
                ...state,
                totalUsersCount: action.count
            }
        case toggleIsFetchingType:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
}


export default findFriendsReducer;

// export const addFriendActionCreator = (id: number) => ({type: addFriendActionType, id: id});
// export const unFriendActionCreator = (id: number) => ({type: addFriendActionType, id: id});
export const setUsersActionCreator = (users: any) => ({type: setUsersType, users: users});
export const toggleFriendActionCreator = (id: number) => ({type: ToggleFriendType, id: id});
export const changePageAC = (page: number) => ({type: changePageType, page});
export const setTotalCountAC = (count: number) => ({type: setTotalCountType, count});
export const togglePreloaderAC = (isFetching: boolean) => ({type:toggleIsFetchingType, isFetching})

