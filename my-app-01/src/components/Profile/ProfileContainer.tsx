import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {setUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component<any, any> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = 2;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then((response) => {
            this.props.setUserProfile(response.data);
        });
    }

    render() {
        return <Profile {...this.props} />
    }
}

let mapState = (state: any) => ({
    userProfile: state.profilePage.userProfile,
})

let WithRouterProfileContainer = withRouter(ProfileContainer)

export default connect(mapState, {setUserProfile})(WithRouterProfileContainer);

