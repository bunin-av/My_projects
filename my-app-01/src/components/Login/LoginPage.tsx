import React from "react";
import LoginForm from "./LoginForm/LoginForm";
import {connect, ConnectedProps} from "react-redux";
import {doLogIn} from "../../redux/auth-reducer";
import styles from './Login.module.scss'
import {Redirect} from "react-router-dom";
import {RootState} from "../../redux/redux-store";

type LoginProps = ConnectedProps<typeof connector>

const LoginPage = (props: LoginProps) => {
    if (props.auth.isAuth) {
        return <Redirect to={`/profile`}/>
    }

    return (
      <div className={styles.wrapper}>
          <h1>LOGIN</h1>
          <LoginForm {...props} />
      </div>
    )
}

const MSTP = (state: RootState) => {
    return {
        auth: state.auth
    }
}
const connector = connect(MSTP, {doLogIn})
export default connector(LoginPage)

