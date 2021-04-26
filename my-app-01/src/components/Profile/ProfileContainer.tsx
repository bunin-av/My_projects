import React from "react";
import Profile from "./Profile";
import {getUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import withAuthRedirect from "../HOC/AuthRedirect";


class ProfileContainer extends React.Component<any, any> {
    componentDidMount() {
        this.props.getUserProfile(this.props.match.params.userId, this.props.authId)
    }

    render() {
        return <Profile {...this.props} />
    }
}

let mapState = (state: any) => ({
    userProfile: state.profilePage.userProfile,
    authId: state.auth.id,
    isAuth: state.auth.isAuth,
})


let WithRouterProfileContainer = withRouter(ProfileContainer)
let AuthRedirectComponent = withAuthRedirect(WithRouterProfileContainer)

export default connect(mapState, {getUserProfile})(AuthRedirectComponent);

