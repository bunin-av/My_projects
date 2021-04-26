import React from "react";
import Dialog from "./Dialog/Dialog";
import MessageInput from "./MessageInput/MessageInput";
import styles from './Messages.module.scss'
import Message from "./Message/Message";



const Messages = (props: any) => {
    let messagesElements =
      props.messagesData.map((message: { text: string }) =>
        <Message messageText={message.text} key={Math.random()*100} />)
    let dialogsElements =
      props.dialogsData.map((dialogs: { id: number; userName: string; avaUrl: string }) =>
        <Dialog userId={dialogs.id} userName={dialogs.userName} avaUrl={dialogs.avaUrl} key={Math.random()*100}/>)
    return (
      <div className={styles.messagesWrapper}>
          <div className={styles.searchBar}>Search Alex's messages</div>
          <div className={styles.dialogs}>
              {dialogsElements}
          </div>
          <div className={styles.messages}>
              {messagesElements}
              <MessageInput newMessageText={props.newMessageText}
                            sendMessage={props.sendMessage}
                            updateMessageText={props.updateMessageText}/>

          </div>

      </div>
    )
}

export default Messages