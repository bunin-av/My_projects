const addPostType = "ADD-POST";
const postUpdateType = "NEW-POST-UPDATE";

let initialState = {
    postsData: [
        {id: 1, text: "Hi, man!", likes: 10},
        {id: 2, text: "It's my first app!", likes: 12},
        {id: 3, text: "Yo guys", likes: 12},
    ],
    newPostText: ''
};


const profileReducer = (state = initialState, action: { type: string; newText: string; }) => {
    switch (action.type) {
        case addPostType: {
            let newPost: { id: number; text: string; likes: number } = {
                id: 5,
                text: state.newPostText,
                likes: 0
            };
            let stateCopy = {...state};
            stateCopy.postsData = [...state.postsData]
            stateCopy.postsData.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case postUpdateType: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: addPostType});
export const newPostUpdateActionCreator = (text: string) => ({type: postUpdateType, newText: text});

export default profileReducer;