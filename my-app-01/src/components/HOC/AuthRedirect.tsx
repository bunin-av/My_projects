import React from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";


const withAuthRedirect = (Component: any) => {
    class AuthRedirectComponent extends React.Component<any, any> {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'}/>
            return <Component {...this.props}/>
        }
    }
    return connect(mapState)(AuthRedirectComponent)
}

let mapState = (state: { auth: { isAuth: boolean } }) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default withAuthRedirect