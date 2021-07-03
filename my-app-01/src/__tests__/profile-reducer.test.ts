import profileReducer, {addPost, deletePost, InitialStateType} from "../redux/profile-reducer";

const state: InitialStateType = {
    postsData: [
        {id: 1, text: "Hi, man!", likes: 10},
        {id: 2, text: "It's my first app!", likes: 12},
        {id: 3, text: "Yo guys", likes: 12},
    ],
    userProfile: {},
    userStatus: '',
};

test('add new post', () => {
    const action = addPost('yoyo')

    const newState = profileReducer(state, action);

    expect(newState.postsData.length).toBe(4)
    expect(newState.postsData[0].text).toBe('yoyo')
    expect(newState.postsData[0].likes).toBe(0)
})

test('delete post', () => {
    const action = deletePost(2)

    const newState = profileReducer(state, action);

    expect(newState.postsData.length).toBe(2)
    expect(newState.postsData[0].text).toBe("Hi, man!")
    expect(newState.postsData[1].text).toBe("Yo guys")
})