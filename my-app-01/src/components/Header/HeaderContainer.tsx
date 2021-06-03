import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {doLogOut} from "../../redux/auth-reducer";




class HeaderContainer extends React.Component<any, any> {

    render() {
        return <Header {...this.props}/>
    }
}

const mapState = (state: { auth: { login: string, isAuth: boolean } }) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapState, {doLogOut})(HeaderContainer)