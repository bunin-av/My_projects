import {connect} from "react-redux";
import FindFriends from "./FindFriends";
import {
    changePageAC, setTotalCountAC,
    setUsersActionCreator,
    toggleFriendActionCreator,
} from "../../redux/findFriends-reducer";


let mapState = (state: any) => {
    return {
        users: state.findFriendsPage.users,
        pageSize: state.findFriendsPage.pageSize,
        totalUsersCount: state.findFriendsPage.totalUsersCount,
        currentPage: state.findFriendsPage.currentPage,
    }
}

let mapDispatch = (dispatch: any) => {
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
    }
}

const FindFriendsContainer = connect(mapState, mapDispatch)(FindFriends);

export default FindFriendsContainer;