import React from "react";
import styles from "./MessageInput.module.scss"
import {newMessageUpdateActionCreator, sendMessageActionCreator} from "../../../redux/messages-reducer";


// let sendMessageRef: any = React.createRef()

const MessageInput = (props: any) => {
    let sendMessage = () => {
        let action = sendMessageActionCreator();
        props.dispatch(action);
    }

    let updateMessageText = (e: any) => {
        let text = e.target.value;
        let action = newMessageUpdateActionCreator(text)
        props.dispatch(action);
    }

    return (
      <div>
        <div>
          <textarea
            // ref={sendMessageRef}
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