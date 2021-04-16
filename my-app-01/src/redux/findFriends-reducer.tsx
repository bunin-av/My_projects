// const addFriendActionType = "ADD-FRIEND";
// const unFriendActionType = "UNFRIEND";
const setUsersType = 'SET-USERS';
const ToggleFriendType = "TOGGLE-FRIEND";

const initialState = {
    users: [],
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
            return {
                ...state,
                users: state.users.map((u: { id: any; friend: any; }) => {
                    if (u.id === action.id) {
                        return {...u, friend: !u.friend}
                    }
                    return u;
                })
            }
        case setUsersType:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }
}


export default findFriendsReducer;

// export const addFriendActionCreator = (id: number) => ({type: addFriendActionType, id: id});
// export const unFriendActionCreator = (id: number) => ({type: addFriendActionType, id: id});
export const setUsersActionCreator = (users: any) => ({type: setUsersType, users: users});
export const toggleFriendActionCreator = (id: number) => ({type: ToggleFriendType, id: id})