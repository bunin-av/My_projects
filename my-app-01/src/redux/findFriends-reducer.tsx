// const addFriendActionType = "ADD-FRIEND";
// const unFriendActionType = "UNFRIEND";
const setUsersType = 'SET-USERS';
const ToggleFriendType = "TOGGLE-FRIEND";

const initialState = {
    users: [
        {
            id: 1,
            avaUrl: 'https://e-finland.ru/media/images/img_11/1930-6.jpg',
            userName: 'Ivan Klimchuk',
            location: {state: 'Ukraine', city: 'Kiev'},
            status: 'I am the boss',
            friend: false,
        },
        {
            id: 2,
            avaUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThe_PDLW4jcNRNTVNKia1MAInSv5o8CPp62CV803022gJBgLPdew5Xqsa6FzZHxF5fT9I&usqp=CAU',
            userName: 'Ivan Klimchuk',
            location: {state: 'Ukraine', city: 'Kiev'},
            status: 'I am the boss',
            friend: false,
        },
        {
            id: 3,
            avaUrl: 'https://fazarosta.com/wp-content/uploads/2018/09/jeto-vam-ne-babochki-v-zhivote-chto-chuvstvuet-muzhchina-kogda-hochet-zhenshhinu-1-945x630.jpg',
            userName: 'Ivan Klimchuk',
            location: {state: 'Ukraine', city: 'Kiev'},
            status: 'I am the boss',
            friend: false,
        },
        {
            id: 4,
            avaUrl: 'https://lh3.googleusercontent.com/proxy/a1Mcoipe32c-Pu3_4LBCBBsFQI23g9GptrlRRBmFqhXVrL5EC1q_gt32t_f_a9a82Iu-MFZbw-triI0r-xN7nlJ5cASoh-968LVTXl2rHpsVQP2yKLoWVpUWoI5JAu6qv4o-Qq_1E9Y2JOA9i4Q5g9iGS6BpNg',
            userName: 'Ivan Klimchuk',
            location: {state: 'Ukraine', city: 'Kiev'},
            status: 'I am the boss',
            friend: false,
        }
    ],
};

const findFriendsReducer = (state = initialState, action: any) => {
    debugger
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
                users: state.users.map(u => {
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