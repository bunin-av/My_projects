import React from "react";
import styles from "../MyPosts.module.scss";
import {Field, Form, Formik} from "formik";

type PostInputType = {
    addNewPost: (text: string) => void
}

const PostInput = (props: PostInputType) => {
    // const submit = () => props.addNewPost
    const submit = (values: { postText: string }, {setSubmitting, resetForm}: { setSubmitting: (isSubmitting: boolean) => void, resetForm: () => void }) => {
        props.addNewPost(values.postText)
        resetForm()
        setSubmitting(false);
    }
    return (
      <Formik initialValues={{postText: ''}}
              validate={() => ({})}
              onSubmit={submit}
      >
          {({isSubmitting}) => (
            <Form>
                <div>
                    <Field type="postText" name="postText" placeholder="What's new?"/>
                </div>
                <div>
                    <button type="submit" disabled={isSubmitting} className={styles.MyPosts__sendButton}>
                        Post
                    </button>
                </div>
            </Form>
          )}
      </Formik>
    )
}
/*
const qq = (props: any) => {
    let onTextChange = (e: any) => {
        let text = e.target.value;
        props.updateNewPost(text);
    }
    return (
      <div className={styles.MyPosts__inputItems}>
          <div>
              <textarea onChange={onTextChange}
                        placeholder="Your news..."
                        value={props.newPostText}
                        className={styles.MyPosts__input}/>
          </div>
          <div>
              <button onClick={props.addNewPost} className={styles.MyPosts__sendButton}>Send</button>
          </div>
      </div>
    )
}*/

export default PostInput;