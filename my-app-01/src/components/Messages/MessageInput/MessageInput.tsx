import {Field, Form, Formik} from "formik";
import React from "react";
import styles from "./MessageInput.module.scss"
import sendImg from "./../../../assets/images/paper-plane.png"


// let sendMessageRef: any = React.createRef()

type MessageInputType = {
    sendMessage: (text: string) => void
}

type SubmitType = {
    setSubmitting: (isSubmitting: boolean) => void
    resetForm: () => void
}

function MessageInput(props: MessageInputType) {
    const submit = (values: { messageText: string }, {setSubmitting, resetForm}: SubmitType) => {
        props.sendMessage(values.messageText)
        resetForm()
        setSubmitting(false)
    }

    return (
      <Formik initialValues={{messageText: ''}}
              validate={() => ({})}
              onSubmit={submit}
      >
          {({isSubmitting,
                // errors, touched, isValidating
          }) => (
            <Form>
                <div className={styles.input_wrapper}>
                    <Field type="messageText"
                           name="messageText"
                           placeholder="Write a message..."
                    />
                    <div>
                        <button style={{backgroundImage: `url(${sendImg})`}}
                                type="submit"
                                className={styles.button}>
                        </button>
                    </div>
                </div>
            </Form>
          )}

      </Formik>
    )
}

/*const MessageInput2 = (props: any) => {
    let onTextChange = (e: any) => {
        let text = e.target.value;
        props.newMessageUpdate(text);
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
}*/

export default MessageInput