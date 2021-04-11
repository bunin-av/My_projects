const newMessageUpdateType = "NEW-MESSAGE-UPDATE";
const sendMessageType = "SEND-MESSAGE";

let initialState = {
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
};

const messagesReducer = (state = initialState, action: { type: string; newText: string; }) => {
    switch (action.type) {
        case sendMessageType: {
            let newMessage = {id: 5, text: state.newMessageText};
            let stateCopy = {...state};
            stateCopy.messagesData = [...state.messagesData];
            console.log(stateCopy.messagesData)
            stateCopy.messagesData.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        }
        case newMessageUpdateType: {
            let stateCopy = {...state}
            stateCopy.newMessageText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({type: sendMessageType});
export const newMessageUpdateActionCreator = (text: string) => ({type: newMessageUpdateType, newText: text});

export default messagesReducer