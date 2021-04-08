import React from "react";
import {newMessageUpdateActionCreator, sendMessageActionCreator } from "../../../redux/state";
import styles from "./MessageInput.module.scss"


let sendMessageRef: any = React.createRef()

const MessageInput = (props: any) => {
    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }

    let updateMessageText = () => {
        let text = sendMessageRef.current.value;
        props.dispatch(newMessageUpdateActionCreator(text));
    }

    return (
      <div>
          <div>
              <textarea
                ref={sendMessageRef}
                value={props.messagesPage.newMessageText}
                onChange={updateMessageText}
                placeholder="Type your message..."
                className={styles.textarea}/>
          </div>
          <div>
              <button onClick={sendMessage} className={styles.button}>Send</button>
          </div>
      </div>
    )
}

export default MessageInput