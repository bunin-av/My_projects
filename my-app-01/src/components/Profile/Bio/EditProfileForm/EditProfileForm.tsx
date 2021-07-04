import {ErrorMessage, Field, Form, Formik} from "formik";
import React from "react";
import styles from "../../../Login/Login.module.scss";


type Props = {
    state: any
    saveInfo: (info: UserInfoDataType) => void
}

export type UserInfoDataType = {
    FullName: string
    AboutMe: string
    LookingForAJob: boolean
    LookingForAJobDescription: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
}

type ErrorsType = { [key: string]: string | undefined };
const EditProfileForm = (props: any) => {
    const submit = (values: UserInfoDataType, {
        setSubmitting,
        setErrors,
    }: {
        setSubmitting: (isSubmitting: boolean) => void
        setErrors: (fields: { [field: string]: string }) => void
    }) => {
        props.saveInfo(values, setErrors)
        setSubmitting(false);
    }

    return (
        <Formik
            initialValues={{
                FullName: props.fullName,
                AboutMe: props.aboutMe,
                LookingForAJob: props.lookingForAJob,
                LookingForAJobDescription: props.lookingForAJobDescription,
                contacts: props.contacts
            }}
            validate={() => ({})}
            onSubmit={submit}
        >
            {({isSubmitting, errors, touched}) => (
                <Form>
                    <div><b>Full name: </b>
                        <Field type="FullName"
                               name="FullName"
                               placeholder="Full name"
                               className={`${styles.input} ${(errors.FullName) ? styles.errorInput : ''}`}/>
                    </div>
                    <div><b>About me: </b>
                        <Field type="AboutMe"
                               name="AboutMe"
                               placeholder="About me"
                               className={`${styles.input} ${(errors.AboutMe) ? styles.errorInput : ''}`}/>
                    </div>
                    <div>
                        <label>
                            <b>Looking for a job</b>
                            <Field type="checkbox" name="LookingForAJob"/>
                        </label>
                    </div>
                    <div><b>My skills: </b>
                        <Field type="LookingForAJobDescription"
                               name="LookingForAJobDescription"
                               placeholder="My Skills"
                               className={`${styles.input} ${(errors.LookingForAJobDescription) ? styles.errorInput : ''}`}/>
                    </div>
                    <div><b>Contacts</b></div>
                    {Object.keys(props.contacts).map((key)  => {
                        return <div style={{paddingLeft: '20px'}} key={key}>
                                <Field type={key}
                                       name={`contacts.${key}`}
                                       placeholder={key}
                                       className={`${styles.input} ${((errors as ErrorsType)[`contacts.${key}`]) ? styles.errorInput : ''}`}
                                />
                                <div className={styles.errorMessage}>{(errors as ErrorsType)[`contacts.${key}`]}</div>
                            <ErrorMessage name={`contacts.${key}`} component="div" className={styles.errorMessage}/>
                        </div>
                    })}
                    <div>
                         <button type="submit">
                            Save
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}


export default EditProfileForm;