import React from "react";
import Profile from "./Profile";
import {
    addPost,
    deletePost,
    getUserProfile,
    getUserStatus,
    updateMyStatus,
    UserProfileType
} from "../../redux/profile-reducer";
import {connect, ConnectedProps} from "react-redux";
import {withRouter} from "react-router-dom";
import withAuthRedirect from "../HOC/withAuthRedirect";
import {compose} from "redux";
import {RouteComponentProps} from "react-router";
import {
    getAuthIDSl,
    getIsAuthSl,
    getPostDataSl,
    getUserProfileSl,
    getUserStatusSl
} from "../../redux/profile-selectors";
import {RootState} from "../../redux/redux-store";


export type MSTPType = {
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

export type ProfileProps = ConnectedProps<typeof connector> & RouteComponentProps<{ userId?: string }>


class ProfileContainer extends React.Component<ProfileProps> {
    componentDidMount() {
        this.props.match.params.userId && this.props.authId &&
        this.props.getUserProfile(+this.props.match.params.userId, this.props.authId)
        if (this.props.match.params.userId ){
            this.props.getUserStatus(+this.props.match.params.userId)
        }
        if (this.props.authId){
            this.props.getUserStatus(this.props.authId)
        }
    }

    render() {
        return <Profile {...this.props} />
    }
}

let mapState = (state: RootState) => ({
    userProfile: getUserProfileSl(state),
    authId: getAuthIDSl(state),
    isAuth: getIsAuthSl(state),
    userStatus: getUserStatusSl(state),
    postsData: getPostDataSl(state),
})

const connector = connect(mapState, {
      getUserProfile,
      getUserStatus,
      updateMyStatus,
      addPost,
      deletePost})
export default compose<React.ComponentType>(
  connector,
  withAuthRedirect,
  withRouter,
)(ProfileContainer)
