import React from "react";
import Messages from "./Messages";
import {newMessageUpdateActionCreator, sendMessageActionCreator} from "../../redux/messages-reducer";
import StoreContext from "../../StoreContext";


const MessagesContainer = () => {

    return (
      <StoreContext.Consumer>
          {(store) => {
              let sendMessage = () => {
                  let action = sendMessageActionCreator();
                  store.dispatch(action);
              }

              let updateMessageText = (text: string) => {
                  let action = newMessageUpdateActionCreator(text);
                  store.dispatch(action);
              }

              return <Messages
                messagesData={store.getState().messagesPage.messagesData}
                dialogsData={store.getState().messagesPage.dialogsData}
                newMessageText={store.getState().messagesPage.newMessageText}
                sendMessage={sendMessage}
                updateMessageText={updateMessageText}/>
          }}
      </StoreContext.Consumer>
    )
}


export default MessagesContainer