import React from "react";
import Messages from "./Messages";
import {newMessageUpdateActionCreator, sendMessageActionCreator} from "../../redux/messages-reducer";


const MessagesContainer = (props: any) => {
    let sendMessage = () => {
        let action = sendMessageActionCreator();
        props.store.dispatch(action);
    }

    let updateMessageText = (text: string) => {
        let action = newMessageUpdateActionCreator(text);
        props.store.dispatch(action);
    }

    return <Messages
      messagesData={props.store.getState().messagesPage.messagesData}
      dialogsData={props.store.getState().messagesPage.dialogsData}
      newMessageText={props.store.getState().messagesPage.newMessageText}
      sendMessage={sendMessage}
      updateMessageText={updateMessageText}/>
}


export default MessagesContainer