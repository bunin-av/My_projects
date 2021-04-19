import {connect} from "react-redux";
import {
    changePageAC,
    setTotalCountAC,
    setUsersActionCreator,
    toggleFriendActionCreator, togglePreloaderAC,
} from "../../redux/findFriends-reducer";
import React from "react";
import axios from "axios";
import FindFriends from "./FindFriends";
import Preloader from "../common/Preloader/Preloader";


class FindFriendsContainerAPI extends React.Component<any, any> {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((response) => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount / 100);
        });
    }

    onPageChange = (pageNum: number) => {
        this.props.toggleIsFetching(true);
        this.props.changePage(pageNum);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`).then((response) => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        return <>
            {(this.props.isFetching) ? <Preloader/> : null}
            <FindFriends totalUsersCount={this.props.totalUsersCount}
                         pageSize={this.props.pageSize}
                         currentPage={this.props.currentPage}
                         onPageChange={this.onPageChange}
                         toggleFriend={this.props.toggleFriend}
                         users={this.props.users}/>

        </>
    }
}

let
  mapState = (state: any) => {
      return {
          users: state.findFriendsPage.users,
          pageSize: state.findFriendsPage.pageSize,
          totalUsersCount: state.findFriendsPage.totalUsersCount,
          currentPage: state.findFriendsPage.currentPage,
          isFetching: state.findFriendsPage.isFetching
      }
  }

let
  mapDispatch = (dispatch: any) => {
      return {
          // addFriend: (id: number)=>{
          //     dispatch(addFriendActionCreator(id));
          // },
          // unFriend: (id: number)=>{
          //     dispatch(unFriendActionCreator(id));
          // },
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
              dispatch(setTotalCountAC(count))
          },
          toggleIsFetching: (isFetching: boolean) => {
              dispatch(togglePreloaderAC(isFetching))
          }
      }
  }

const
  FindFriendsContainer = connect(mapState, mapDispatch)(FindFriendsContainerAPI);

export default FindFriendsContainer