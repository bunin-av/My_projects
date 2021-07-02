import {connect, ConnectedProps} from "react-redux";
import {
    findFriendsActions,
    followUnfollowUser,
    getUsers,
} from "../../redux/findFriends-reducer";
import React from "react";
import FindFriends from "./FindFriends";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import withAuthRedirect from "../HOC/withAuthRedirect";
import {RootState} from "../../redux/redux-store";


class FindFriendsContainerAPI extends React.Component<FindFriendsProps> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize, false)
    }

    onPageChange = (pageNum: number) => {
        this.props.getUsers(pageNum, this.props.pageSize, true);
    }

    render() {
        return <>
            {(this.props.isFetching) ? <Preloader/> : null}
            <FindFriends {...this.props} onPageChange={this.onPageChange}/>
        </>
    }
}

let mapState = (state: RootState) => {
    return {
        users: state.findFriendsPage.users,
        pageSize: state.findFriendsPage.pageSize,
        totalUsersCount: state.findFriendsPage.totalUsersCount,
        currentPage: state.findFriendsPage.currentPage,
        isFetching: state.findFriendsPage.isFetching,
        friendList: state.findFriendsPage.friendList,
        followingInProgress: state.findFriendsPage.followingInProgress,
    }
}

/*let mapDispatch = (dispatch: any) => {
    return {
        setUsers: (users: any) => {
            dispatch(setUsersActionCreator(users));
        },
        toggleFriend: (id: number) => {
            dispatch(toggleFriendActionCreator(id));
        },
        changePage: (page: number) => {
            dispatch(changePageAC(page));
        },
        setTotalCount: (count: number) => {
            dispatch(setTotalCountAC(count));
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(togglePreloaderAC(isFetching));
        }
    }
}*/
const connector = connect(mapState,
  {
      toggleFriend: findFriendsActions.toggleFriend,
      followingProgress: findFriendsActions.followingProgress,
      getUsers,
      followUnfollowUser,
  })
type FindFriendsProps = ConnectedProps<typeof connector>

export default compose<React.ComponentType>(
  connector,
  withAuthRedirect
)(FindFriendsContainerAPI)







