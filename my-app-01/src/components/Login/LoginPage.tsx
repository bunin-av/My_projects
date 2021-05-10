import React from "react";
import LoginForm from "./LoginForm/LoginFrom";
import {connect} from "react-redux";
import {AuthStateType, doLogIn} from "../../redux/auth-reducer";
import style from './Login.module.scss'


const LoginPage = (props: any) => {
    return (
      <div className={style.wrapper}>
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

