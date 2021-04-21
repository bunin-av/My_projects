import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuth} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component<any, any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then((response) => {
            let {id, email, login} = response.data.data;
            this.props.setAuth(id, email, login);
        })
    }

    render() {
        return <Header {...this.props}/>;
    }
}

const mapState = (state: { auth: { login: string, isAuth: boolean } }) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapState, {setAuth})(HeaderContainer)