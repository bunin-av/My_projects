import styles from './Content.module.scss';
import Settings from "../Settings/Settings";
import Music from "../Music/Music";
import News from "../News/News";
import {Redirect, Route} from "react-router-dom";
import React from "react";
import MessagesContainer from "../Messages/MessagesContainer";
import FindFriendsContainer from "../FindFriends/FindFriendsContainer";
import ProfileContainer from "../Profile/ProfileContainer";
import LoginPage from "../Login/LoginPage";


const Content = () => {
    return (
      <div className={styles.wrapper}>
          {/*<Redirect to={'/profile'}/>*/}
          <Route path={'/profile/:userId?'} render={() => <ProfileContainer />}/>
          <Route path={'/messages'} render={() => <MessagesContainer />}/>
          <Route path={'/find_friends'} render={() => <FindFriendsContainer />}/>
          <Route path={'/login'} render={() => <LoginPage />}/>
          <Route path={'/music'} component={Music}/>
          <Route path={'/news'} component={News}/>
          <Route path={'/settings'} component={Settings}/>
      </div>
    )
}

export default Content;