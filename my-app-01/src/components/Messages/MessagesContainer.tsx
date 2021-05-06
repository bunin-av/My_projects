import Messages from "./Messages";
import {newMessageUpdate, sendMessage} from "../../redux/messages-reducer";
import {connect} from "react-redux";
import withAuthRedirect from "../HOC/AuthRedirect";
import {compose} from "redux";
import React from "react";


let mapStateToProps = (state: { messagesPage: { dialogsData: any; messagesData: any; newMessageText: any; }; auth: { isAuth: boolean; }; }) => {
    return {
        dialogsData: state.messagesPage.dialogsData,
        messagesData: state.messagesPage.messagesData,
        newMessageText: state.messagesPage.newMessageText,
        isAuth: state.auth.isAuth,
    }
}

/*let mapDispatchToProps = (dispatch: (arg0: { type: string; newText?: string; }) => void) => {
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
}*/

export default compose<React.ComponentType>(
  connect(mapStateToProps, {sendMessage, newMessageUpdate}),
  withAuthRedirect
)(Messages)

/*
let AuthRedirectComponent = withAuthRedirect(Messages)

export default connect(mapStateToProps, {sendMessage,newMessageUpdate})(AuthRedirectComponent)
*/


/*
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
}*/
