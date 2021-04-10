const newMessageUpdateType = "NEW-MESSAGE-UPDATE";
const sendMessageType = "SEND-MESSAGE";

type actionType = {type: string, newText: string}
const messagesReducer = (state: any, action: actionType) => {
    switch (action.type) {
        case sendMessageType:
            let newMessage = {id: 5, text: state.newMessageText};
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            return state;
        case newMessageUpdateType:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({type: sendMessageType});
export const newMessageUpdateActionCreator = (text: any) => ({type: newMessageUpdateType, newText: text});

export default messagesReducer