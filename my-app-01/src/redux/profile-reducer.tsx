const addPostType = "ADD-POST";
const postUpdateType = "NEW-POST-UPDATE";
const setUserProfileType = 'SET-USER-PROFILE';

let initialState = {
    postsData: [
        {id: 1, text: "Hi, man!", likes: 10},
        {id: 2, text: "It's my first app!", likes: 12},
        {id: 3, text: "Yo guys", likes: 12},
    ],
    newPostText: '',
    userProfile: null,
};


const profileReducer = (state = initialState, action: { type: string; newText: string; userProfile: any}) => {
    switch (action.type) {
        case addPostType: {
            let newPost: { id: number; text: string; likes: number } = {
                id: 5,
                text: state.newPostText,
                likes: 0
            };
            return {...state, postsData: [...state.postsData, newPost], newPostText: ''};
        }
        case postUpdateType: {
            return {...state, newPostText: action.newText};
        }
        case setUserProfileType: {
            return {...state, userProfile: action.userProfile}
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: addPostType});
export const newPostUpdateActionCreator = (text: string) => ({type: postUpdateType, newText: text});
export const setUserProfile = (userProfile: boolean) => ({type: setUserProfileType, userProfile})

export default profileReducer;