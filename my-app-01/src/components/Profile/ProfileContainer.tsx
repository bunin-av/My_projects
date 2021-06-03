import React from "react";
import Profile from "./Profile";
import {addPost, getUserProfile, getUserStatus, updateMyStatus, UserProfileType} from "../../redux/profile-reducer";
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
        userStatus: string
        postsData: []
    }
    authId: number
    isAuth: boolean
}
type MDTPType = any
type PropsType = MSTPType & MDTPType & RouteComponentProps<{ userId?: string }>


class ProfileContainer extends React.Component<PropsType, {}> {
    componentDidMount() {
        this.props.getUserProfile(this.props.match.params.userId, this.props.authId)
        this.props.getUserStatus(this.props.match.params.userId || this.props.authId)
    }

    render() {
        return <Profile {...this.props} />
    }
}

let mapState = (state: MSTPType) => ({
    userProfile: state.profilePage.userProfile,
    authId: state.auth.id,
    isAuth: state.auth.isAuth,
    userStatus: state.profilePage.userStatus,
    postsData: state.profilePage.postsData,
})

export default compose<React.ComponentType>(
  connect(mapState, {getUserProfile, getUserStatus, updateMyStatus, addPost}),
  withAuthRedirect,
  withRouter,
)(ProfileContainer)
