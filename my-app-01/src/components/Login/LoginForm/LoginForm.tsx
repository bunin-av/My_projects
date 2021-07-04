import {ErrorMessage, Field, Form, Formik} from "formik";
import React from "react";
import {AuthStateType, LogInDataType} from "../../../redux/auth-reducer";
import {emailValidation, passwordValidation} from "../../../assets/validations/validations";
import styles from '../Login.module.scss'

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


type LoginFromPropsType = {
    auth: AuthStateType
    doLogIn: (logInData: LogInDataType) => void
}

const LoginForm = (props: LoginFromPropsType) => {
    const submit = (values: LogInDataType,
                    {setSubmitting, setStatus, setErrors}: {
                        setSubmitting: (isSubmitting: boolean) => void,
                        setStatus: (status?: any) => void,
                        setErrors: (fields: { [field: string]: string }) => void
                    }) => {
        props.doLogIn(values)
        setSubmitting(false);
    }
    let error
    return (
        <Formik
            initialValues={{email: '', password: '', rememberMe: false, captcha: false}}
            validate={() => ({})}
            onSubmit={submit}
        >
            {({isSubmitting, errors, touched}) => (
                <Form>
                    <div className={styles.field_wrapper}>
                        <Field type="email"
                               name="email"
                               placeholder="Email address"
                               validate={emailValidation}
                               className={`${styles.input} ${(errors.email) ? styles.errorInput : ''}`}/>
                        {touched.email && <ErrorMessage name="email" component="div" className={styles.errorMessage}/>}
                    </div>
                    <div className={styles.field_wrapper}>
                        <Field type="password"
                               name="password"
                               placeholder="Password"
                               validate={passwordValidation}
                               className={`${styles.input} ${(errors.password) ? styles.errorInput : ''}`}/>
                        {touched.password &&
                        <ErrorMessage name="password" component="div" className={styles.errorMessage}/>}
                    </div>
                    <label>
                        <Field type="checkbox" name="rememberMe"/>
                        Remember me
                    </label>
                    <div>
                        {(errors.email && errors.password) ? error = true : error = false}
                        <button type="submit" className={styles.button} disabled={error || isSubmitting}>
                            Log In
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}


export default LoginForm;