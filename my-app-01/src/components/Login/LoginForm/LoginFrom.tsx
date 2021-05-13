import {ErrorMessage, Field, Form, Formik} from "formik";
import React from "react";
import {LogInDataType} from "../../../redux/auth-reducer";



// const validate = (values: { email: string; }) => {
//     const errors = {email: ''};
//     if (!values.email) {
//         errors.email = 'Required';
//     } else if (
//       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//     ) {
//         errors.email = 'Invalid email address';
//     }
//     return errors;
// }

type AuthType = {
    captcha: boolean
    email: string
    id: number
    isAuth: boolean
    login: string
    password: string | null
    rememberMe: boolean
}
type LoginFromPropsType = {
    auth: AuthType
    doLogIn: (logInData: LogInDataType) => void
}

const LoginForm = (props: LoginFromPropsType) => {
    const submit = (values: LogInDataType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        props.doLogIn(values)
        setSubmitting(false);
    }
    return (
      <Formik
        initialValues={{email: '', password: '', rememberMe: false, captcha: false}}
        validate={() => ({})}
        onSubmit={submit}
      >
          {({isSubmitting}) => (
            <Form>
                <div>
                    <Field type="email" name="email" placeholder="Email address"/>
                    <ErrorMessage name="email" component="div"/>
                </div>
                <div>
                    <Field type="password" name="password" placeholder="Password"/>
                    <ErrorMessage name="password" component="div"/>
                </div>
                <label>
                    <Field type="checkbox" name="rememberMe"/>
                    Remember me
                </label>
                <div>
                    <button type="submit" disabled={isSubmitting}>
                        Log In
                    </button>
                </div>
            </Form>
          )}
      </Formik>
    )
}


export default LoginForm;