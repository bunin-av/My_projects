import React from "react";
import Profile from "./Profile";
import {
    addPost,
    deletePost,
    getUserProfile,
    getUserStatus, loadPhoto, updateMyProfileInfo,
    updateMyStatus,
    UserProfileType
} from "../../redux/profile-reducer";
import {connect, ConnectedProps} from "react-redux";
import {withRouter} from "react-router-dom";
import withAuthRedirect from "../HOC/withAuthRedirect";
import {compose} from "redux";
import {RouteComponentProps} from "react-router";
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

export type ProfileProps = ConnectedProps<typeof connector>
  & RouteComponentProps<{ userId: string }>


class ProfileContainer extends React.PureComponent<ProfileProps> {

    refreshProfile() {
        let userId: number = +this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authId;
        }
        if (!userId) {
            console.error("ID should exists in URI params or in state ('authorizedUserId')");
        } else {
            this.props.getUserStatus(userId)
            this.props.getUserProfile(userId)
        }
    }

    componentDidMount() {
        this.refreshProfile()
    }

    /*shouldComponentUpdate(nextProps: Readonly<ProfileProps>): boolean {
        return this.props.userProfile.userId !== nextProps.userProfile.userId
    }*/

    componentDidUpdate(prevProps: ProfileProps) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return <Profile {...this.props} />
    }
}

/*let mapState = (state: RootState) => ({
    userProfile: getUserProfileSl(state),
    authId: getAuthIDSl(state),
    isAuth: getIsAuthSl(state),
    userStatus: getUserStatusSl(state),
    postsData: getPostDataSl(state),
})*/
let mapState = (state: RootState) => ({

    userProfile: state.profilePage.userProfile,
    authId: state.auth.id,
    isAuth: state.auth.isAuth,
    userStatus: state.profilePage.userStatus,
    postsData: state.profilePage.postsData,
})

const connector = connect(mapState, {
    getUserProfile,
    getUserStatus,
    updateMyStatus,
    addPost,
    deletePost,
    loadPhoto,
    updateMyProfileInfo,
})
export default compose<React.ComponentType>(
  connector,
  withAuthRedirect,
  withRouter,
)(ProfileContainer)
