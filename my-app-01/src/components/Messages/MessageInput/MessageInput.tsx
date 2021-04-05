import React from "react";

let sendMessageRef: any = React.createRef()

const MessageInput = () => {
    let sendMessage = () => {
        let text = sendMessageRef.current.value;
        alert(text);
    }
    return (
      <div>
          <textarea ref={sendMessageRef} placeholder="Type your message..."/>
          <div>
              <button onClick={sendMessage}>Send</button>
          </div>
      </div>
    )
}

export default MessageInput