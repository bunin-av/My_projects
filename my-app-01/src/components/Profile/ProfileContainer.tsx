import React from "react";
import Profile from "./Profile";
import {setUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {profileAPI} from "../../API/API";


class ProfileContainer extends React.Component<any, any> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = this.props.authId;
        profileAPI.getUserProfile(userId)
          .then((data) => {
              this.props.setUserProfile(data);
          });
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

export default connect(mapState, {setUserProfile})(WithRouterProfileContainer);

