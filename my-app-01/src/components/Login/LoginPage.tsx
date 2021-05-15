import React from "react";
import LoginForm from "./LoginForm/LoginFrom";
import {connect} from "react-redux";
import {AuthStateType, doLogIn} from "../../redux/auth-reducer";
import styles from './Login.module.scss'
import { Redirect } from "react-router-dom";


const LoginPage = (props: any) => {
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

const MSTP = (state: { auth: AuthStateType }) => {
    return {
        auth: state.auth
    }
}

export default connect(MSTP, {doLogIn})(LoginPage)

