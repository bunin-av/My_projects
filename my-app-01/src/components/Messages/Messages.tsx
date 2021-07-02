import React from "react";
import Dialog from "./Dialog/Dialog";
import MessageInput from "./MessageInput/MessageInput";
import styles from './Messages.module.scss'
import Message from "./Message/Message";
import {MessagesProps} from "./MessagesContainer";
import {DialogType, MessageType} from "../../redux/messages-reducer";


const Messages = (props: MessagesProps) => {
    let messagesElements =
      props.messagesData.map((m: MessageType, i) =>
        <Message messageText={m.text} key={m.id + i}/>)
    let dialogsElements =
      props.dialogsData.map((d: DialogType, i) =>
        <Dialog id={d.id} userName={d.userName} avaUrl={d.avaUrl} key={d.id + i}/>)
    return (
      <div className={styles.messagesWrapper}>
          <div className={styles.searchBar}>Search Alex's messages</div>
          <div className={styles.dialogs}>
              {dialogsElements}
          </div>
          <div className={styles.messages}>
              {messagesElements}
              <div className={styles.message_input}>
                  <MessageInput sendMessage={props.sendMessage}/>
              </div>
          </div>

      </div>
    )
}

export default Messages