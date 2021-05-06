import React from "react";
import Profile from "./Profile";
import {getUserProfile, UserProfileType} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import withAuthRedirect from "../HOC/AuthRedirect";
import {compose} from "redux";
import {RouteComponentProps} from "react-router";


type MSTPType = {
    auth: {
        id: number
        isAuth: boolean
    }
    profilePage: {
        userProfile: UserProfileType
    }
    authId: number
    isAuth: boolean
}

type MDTPType = any


type PropsType = MSTPType & MDTPType
  & RouteComponentProps<{ userId?: string }>


class ProfileContainer extends React.Component<PropsType, {}> {
    componentDidMount() {
        this.props.getUserProfile(this.props.match.params.userId, this.props.authId)
    }

    render() {
        debugger
        return <Profile {...this.props} />
    }
}

let mapState = (state: MSTPType) => ({
    userProfile: state.profilePage.userProfile,
    authId: state.auth.id,
    isAuth: state.auth.isAuth,
})

export default compose<React.ComponentType>(
  connect(mapState, {getUserProfile}),
  withAuthRedirect,
  withRouter,
)(ProfileContainer)

// let WithRouterProfileContainer = withRouter(ProfileContainer)
// let AuthRedirectComponent = withAuthRedirect(WithRouterProfileContainer)
//
// export default connect(mapState, {getUserProfile})(AuthRedirectComponent);

