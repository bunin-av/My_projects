import React from "react";
import styles from '../Messages.module.scss'

const Message = (props: { messageText: string }) => {
    return <div className={styles.message}>{props.messageText}</div>
}


export default Message