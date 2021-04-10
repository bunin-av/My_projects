import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, text: "Hi, man!", likes: 10},
                {id: 2, text: "It's my first app!", likes: 12},
                {id: 3, text: "Yo guys", likes: 12},
            ],
            newPostText: ''
        },
        messagesPage: {
            messagesData: [
                {id: 1, text: "Hi, man"},
                {id: 2, text: "Hi, yo"},
                {id: 3, text: "Hi, ook"},
            ],
            dialogsData: [
                {
                    id: 1,
                    userName: "Andrey",
                    avaUrl: "https://astromix.net/ru/blog/wp-content/themes/yootheme/cache/taurus-460d9827.jpeg"
                },
                {
                    id: 2,
                    userName: "Lena",
                    avaUrl: "https://img.freepik.com/free-photo/young-and-beautiful-woman-in-pink-warm-sweater-natural-look-smiling-portrait-on-isolated-long-hair_285396-896.jpg?size=626&ext=jpg&ga=GA1.2.1377952299.1616630400"
                },
                {
                    id: 3,
                    userName: "Maria",
                    avaUrl: "https://st2.depositphotos.com/2923991/10508/i/600/depositphotos_105089962-stock-photo-a-smiling-young-woman.jpg"
                },
                {
                    id: 4,
                    userName: "Pavel",
                    avaUrl: "https://videozhara.com/storage/xhp6gfqVvUbp0DYMxBic3rlDvh85C4xYAJZNX3vI.jpeg"
                },
            ],
            newMessageText: ''
        },
        friendsSidebar: [
            {
                id: 1,
                userName: "Andrey",
                avaUrl: "https://astromix.net/ru/blog/wp-content/themes/yootheme/cache/taurus-460d9827.jpeg"
            },
            {
                id: 2,
                userName: "Lena",
                avaUrl: "https://img.freepik.com/free-photo/young-and-beautiful-woman-in-pink-warm-sweater-natural-look-smiling-portrait-on-isolated-long-hair_285396-896.jpg?size=626&ext=jpg&ga=GA1.2.1377952299.1616630400"
            },
            {
                id: 3,
                userName: "Maria",
                avaUrl: "https://st2.depositphotos.com/2923991/10508/i/600/depositphotos_105089962-stock-photo-a-smiling-young-woman.jpg"
            },
        ]
    },
    _callSubscriber(state: any) {
        console.log("State is changed")
    },
    getState() {
        return this._state;
    },
    subscribe(observer: any) {
        this._callSubscriber = observer;
    },

    dispatch(action: any) {
        profileReducer(this._state.profilePage, action);
        messagesReducer(this._state.messagesPage, action)
        this._callSubscriber(this._state);
    }
};


// let state = {
//     profilePage: {
//         postsData: [
//             {id: 1, text: "Hi, man!", likes: 10},
//             {id: 2, text: "It's my first app!", likes: 12},
//             {id: 3, text: "Yo guys", likes: 12},
//         ],
//         newPostText: ''
//     },
//     messagesPage: {
//         messagesData: [
//             {id: 1, text: "Hi, man"},
//             {id: 2, text: "Hi, yo"},
//             {id: 3, text: "Hi, ook"},
//         ],
//         dialogsData: [
//             {
//                 id: 1,
//                 userName: "Andrey",
//                 avaUrl: "https://astromix.net/ru/blog/wp-content/themes/yootheme/cache/taurus-460d9827.jpeg"
//             },
//             {
//                 id: 2,
//                 userName: "Lena",
//                 avaUrl: "https://img.freepik.com/free-photo/young-and-beautiful-woman-in-pink-warm-sweater-natural-look-smiling-portrait-on-isolated-long-hair_285396-896.jpg?size=626&ext=jpg&ga=GA1.2.1377952299.1616630400"
//             },
//             {
//                 id: 3,
//                 userName: "Maria",
//                 avaUrl: "https://st2.depositphotos.com/2923991/10508/i/600/depositphotos_105089962-stock-photo-a-smiling-young-woman.jpg"
//             },
//             {
//                 id: 4,
//                 userName: "Pavel",
//                 avaUrl: "https://videozhara.com/storage/xhp6gfqVvUbp0DYMxBic3rlDvh85C4xYAJZNX3vI.jpeg"
//             },
//         ],
//         newMessageText: ''
//     },
//     friendsSidebar: [
//         {
//             id: 1,
//             userName: "Andrey",
//             avaUrl: "https://astromix.net/ru/blog/wp-content/themes/yootheme/cache/taurus-460d9827.jpeg"
//         },
//         {
//             id: 2,
//             userName: "Lena",
//             avaUrl: "https://img.freepik.com/free-photo/young-and-beautiful-woman-in-pink-warm-sweater-natural-look-smiling-portrait-on-isolated-long-hair_285396-896.jpg?size=626&ext=jpg&ga=GA1.2.1377952299.1616630400"
//         },
//         {
//             id: 3,
//             userName: "Maria",
//             avaUrl: "https://st2.depositphotos.com/2923991/10508/i/600/depositphotos_105089962-stock-photo-a-smiling-young-woman.jpg"
//         },
//     ]
// }
//
// export const addPost = () => {
//     let newPost: { id: number; text: string; likes: number } = {
//         id: 5,
//         text: state.profilePage.newPostText,
//         likes: 0
//     };
//     state.profilePage.postsData.push(newPost);
//     state.profilePage.newPostText = '';
//     rerenderEntireTree(state);
// }
//
// export const newPostUpdate = (newText: string) => {
//     state.profilePage.newPostText = newText;
//     rerenderEntireTree(state);
// }
//
// export const sendMessage = () => {
//     let newMessage = {id: 5, text: state.messagesPage.newMessageText};
//     state.messagesPage.messagesData.push(newMessage);
//     state.messagesPage.newMessageText = '';
//     rerenderEntireTree(state);
// }
//
// export const newMessageUpdate = (newText: string) => {
//     state.messagesPage.newMessageText = newText;
//     rerenderEntireTree(state);
// }
//
// export const subscriber = (observer: any) => {
//     rerenderEntireTree = observer;
// }

export default store