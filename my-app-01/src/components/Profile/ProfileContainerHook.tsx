import React, {useEffect} from "react";
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


export function ProfileCont(props: any) {


    useEffect(() => {
        if (props.match.params.userId) {
            props.getUserProfile(+props.match.params.userId)
            props.getUserStatus(+props.match.params.userId)
        }
        if (props.authId) {
            props.getUserProfile(props.authId)
            props.getUserStatus(props.authId)
        }
    },[props])



    return <Profile {...props} />

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
    deletePost
})

export const ProfileCC = compose<React.ComponentType>(
  connector,
  withAuthRedirect,
  withRouter,
)(ProfileCont)


