// const NEW_MESSAGE_UPDATE: string = "NEW_MESSAGE_UPDATE";
import {InferActionTypes} from "./redux-store";

const SEND_MESSAGE: string = "SEND_MESSAGE";

//types
type InitialStateType = typeof initialState

type MessagesDataType = Array<MessageType>
export type MessageType = {
    id: number
    text: string
}
export type DialogsDataType = Array<DialogType>
export type DialogType = {
    id: number
    userName: string
    avaUrl: string
}


// reducer
let initialState = {
    messagesData: [
        {id: 1, text: "Hi man"},
        {id: 2, text: "Whazzup dude"},
        {id: 3, text: "I'm fine"},
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
    // newMessageText: ''
};

type ActionTypes = InferActionTypes<typeof messageActions>

const messagesReducer = (state:InitialStateType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {id: 5, text: action.messageText};
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
                // newMessageText: ''
            };
        }
      // case NEW_MESSAGE_UPDATE: {
      //     return {
      //         ...state,
      //         newMessageText: action.newText
      //     };
      // }
        default:
            return state;
    }
}

// AC
export const messageActions = {
    sendMessage: (messageText: string) => ({type: SEND_MESSAGE, messageText}) as const,
}


export default messagesReducer