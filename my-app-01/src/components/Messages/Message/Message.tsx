import React from "react";
import styles from '../Messages.module.scss'


type MessagePropsType = { messageText: string; }

const Message = (props: MessagePropsType) => {
    return <div className={styles.message}>{props.messageText}</div>
}


export default Message