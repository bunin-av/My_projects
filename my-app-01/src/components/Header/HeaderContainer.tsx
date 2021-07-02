import React from "react";
import Header from "./Header";
import {connect, ConnectedProps} from "react-redux";
import {doLogOut} from "../../redux/auth-reducer";
import {RootState} from "../../redux/redux-store";


export type HeaderProps = ConnectedProps<typeof connector>

class HeaderContainer extends React.Component<HeaderProps> {

    render() {
        return <Header {...this.props}/>
    }
}

const mapState = (state: RootState) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}
const connector = connect(mapState, {doLogOut})
export default connector(HeaderContainer)