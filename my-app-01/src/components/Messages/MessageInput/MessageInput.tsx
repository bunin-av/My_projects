import React from "react";
import styles from "./MessageInput.module.scss"

let sendMessageRef: any = React.createRef()

const MessageInput = (props: any) => {
    let sendMessage = () => {
        let action = {type: "SEND-MESSAGE"};
        props.dispatch(action);
    }

    let updateMessageText = () => {
        let text = sendMessageRef.current.value;
        let action = {type: "NEW-MESSAGE-UPDATE", newText: text};
        props.dispatch(action);
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