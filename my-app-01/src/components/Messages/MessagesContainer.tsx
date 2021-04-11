import Messages from "./Messages";
import {newMessageUpdateActionCreator, sendMessageActionCreator} from "../../redux/messages-reducer";
import {connect} from "react-redux";


let mapStateToProps = (state: { messagesPage: { dialogsData: any; messagesData: any; newMessageText: any; }; }) => {
    return {
        dialogsData: state.messagesPage.dialogsData,
        messagesData: state.messagesPage.messagesData,
        newMessageText: state.messagesPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch: (arg0: { type: string; newText?: string; }) => void) => {
    return {
        sendMessage: () => {
            let action = sendMessageActionCreator();
            dispatch(action);
        },
        updateMessageText: (text: string) => {
            let action = newMessageUpdateActionCreator(text);
            dispatch(action);
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)


export default MessagesContainer


// const MessagesContainer = () => {
//
//     return (
//       <StoreContext.Consumer>
//           {(store) => {
//               let sendMessage = () => {
//                   let action = sendMessageActionCreator();
//                   store.dispatch(action);
//               }
//
//               let updateMessageText = (text: string) => {
//                   let action = newMessageUpdateActionCreator(text);
//                   store.dispatch(action);
//               }
//
//               return <Messages
//                 messagesData={store.getState().messagesPage.messagesData}
//                 dialogsData={store.getState().messagesPage.dialogsData}
//                 newMessageText={store.getState().messagesPage.newMessageText}
//                 sendMessage={sendMessage}
//                 updateMessageText={updateMessageText}/>
//           }}
//       </StoreContext.Consumer>
//     )
// }