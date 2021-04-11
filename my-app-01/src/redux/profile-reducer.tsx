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

// type actionType = { type: string, newText: string }
const profileReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case addPostType:
            let newPost: { id: number; text: string; likes: number } = {
                id: 5,
                text: state.newPostText,
                likes: 0
            };
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;
        case postUpdateType:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: addPostType});
export const newPostUpdateActionCreator = (text: string) => ({type: postUpdateType, newText: text});

export default profileReducer;