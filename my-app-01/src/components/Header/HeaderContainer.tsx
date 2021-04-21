import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuth} from "../../redux/auth-reducer";
import {profileAPI} from "../../API/API";


class HeaderContainer extends React.Component<any, any> {
    componentDidMount() {
        profileAPI.getAuthMe()
          .then((data) => {
            let {id, email, login} = data.data;
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