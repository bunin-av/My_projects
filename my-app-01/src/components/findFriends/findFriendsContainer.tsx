import {connect} from "react-redux";
import FindFriends from "./FindFriends-old";
import {
    setUsersActionCreator,
    toggleFriendActionCreator,
} from "../../redux/findFriends-reducer";


let mapState = (state: any) => {
    return {
        users: state.findFriendsPage.users
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
        }
    }
}

const FindFriendsContainer = connect(mapState, mapDispatch)(FindFriends);

export default FindFriendsContainer;