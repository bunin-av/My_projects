import {connect} from "react-redux";
import {followingProgress, followUnfollowUser, getUsers, toggleFriend,} from "../../redux/findFriends-reducer";
import React from "react";
import FindFriends from "./FindFriends";
import Preloader from "../common/Preloader/Preloader";


class FindFriendsContainerAPI extends React.Component<any, any> {

    componentDidMount() {
/*        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
          .then((data) => {
              this.props.toggleIsFetching(false);
              this.props.setUsers(data.items);
              this.props.setTotalCount(data.totalCount / 100);
              this.props.setFriendList(this.props.users.filter((u: any) => u.followed))
          });*/
        this.props.getUsers(this.props.currentPage, this.props.pageSize, false)
    }

    onPageChange = (pageNum: number) => {
/*        this.props.toggleIsFetching(true);
        this.props.changePage(pageNum);
        usersAPI.getUsers(pageNum, this.props.pageSize)
          .then((data) => {
              this.props.toggleIsFetching(false);
              this.props.setUsers(data.items);
          });*/
        this.props.getUsers(pageNum, this.props.pageSize, true);
    }

    render() {
        return <>
            {(this.props.isFetching) ? <Preloader/> : null}
            <FindFriends {...this.props} onPageChange={this.onPageChange}/>
        </>
    }
}

let mapState = (state: any) => {
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

// const FindFriendsContainer = connect(mapState, mapDispatch)(FindFriendsContainerAPI);
export default connect(mapState,
  {
      // setUsers,
      toggleFriend,
      // changePage,
      // setTotalCount,
      // toggleIsFetching,
      // setFriendList,
      followingProgress,
      getUsers,
      followUnfollowUser,
  })(FindFriendsContainerAPI);

