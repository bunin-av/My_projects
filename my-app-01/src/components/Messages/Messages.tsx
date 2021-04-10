import React from "react";
import Dialog from "./Dialog/Dialog";
import MessageInput from "./MessageInput/MessageInput";
import styles from './Messages.module.scss'


type MessagePropsType = {
    messageText: string;
}
const Message = (props: MessagePropsType) => {
    return <div className={styles.message}>{props.messageText}</div>
}

const Messages = (props: any) => {
    debugger
    let messagesElements =
      props.state.messagesData.map((message: { text: string }) =>
        <Message messageText={message.text}/>)
    let dialogsElements =
      props.state.dialogsData.map((dialogs: { id: number; userName: string; avaUrl: string }) =>
        <Dialog userId={dialogs.id} userName={dialogs.userName} avaUrl={dialogs.avaUrl}/>)

    return (
      <div className={styles.messagesWrapper}>
          <div className={styles.searchBar}>Search Alex's messages</div>
          <div className={styles.dialogs}>
              {dialogsElements}
          </div>
          <div className={styles.messages}>
              {messagesElements}
              <MessageInput messagesPage={props.state} dispatch={props.dispatch}/>

          </div>

      </div>
    )
}

export default Messages