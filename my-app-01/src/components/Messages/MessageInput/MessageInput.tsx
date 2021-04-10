import React from "react";
import styles from "./MessageInput.module.scss"


// let sendMessageRef: any = React.createRef()

const MessageInput = (props: any) => {
    let onTextChange = (e: any) => {
        let text = e.target.value;
        props.updateMessageText(text);
    }

    return (
      <div>
          <div>
          <textarea
            // ref={sendMessageRef}
            value={props.newMessageText}
            onChange={onTextChange}
            placeholder="Type your message..."
            className={styles.textarea}/>
          </div>
          <div>
              <button onClick={props.sendMessage} className={styles.button}>Send</button>
          </div>
      </div>
    )
}

export default MessageInput