import Messages from "./Messages";
import {messageActions} from "../../redux/messages-reducer";
import {connect, ConnectedProps} from "react-redux";
import withAuthRedirect from "../HOC/withAuthRedirect";
import {compose} from "redux";
import React from "react";
import {RootState} from "../../redux/redux-store";


let mapStateToProps = (state: RootState) => {
    return {
        dialogsData: state.messagesPage.dialogsData,
        messagesData: state.messagesPage.messagesData,
        isAuth: state.auth.isAuth,
    }
}

export type MessagesProps = ConnectedProps<typeof connector>
const connector = connect(mapStateToProps, {sendMessage: messageActions.sendMessage})

export default compose<React.ComponentType>(
  connector,
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
