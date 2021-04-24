import React from "react";
import Profile from "./Profile";
import {getUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component<any, any> {
    componentDidMount() {
        // let userId = this.props.match.params.userId
        // if (!userId) userId = this.props.authId;
        // profileAPI.getUserProfile(userId)
        //   .then((data) => {
        //       this.props.setUserProfile(data);
        //   });
        this.props.getUserProfile(this.props.match.params.userId, this.props.authId)
    }

    render() {
        return <Profile {...this.props} />
    }
}

let mapState = (state: any) => ({
    userProfile: state.profilePage.userProfile,
    authId: state.auth.id,
})

let WithRouterProfileContainer = withRouter(ProfileContainer)

export default connect(mapState, {getUserProfile})(WithRouterProfileContainer);

