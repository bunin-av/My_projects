import styles from './Content.module.scss';
import Settings from "../Settings/Settings";
import Music from "../Music/Music";
import News from "../News/News";
import {Route} from "react-router-dom";
import React from "react";
import FindFriendsContainer from "../FindFriends/FindFriendsContainer";
import ProfileContainer from "../Profile/ProfileContainer";
import LoginPage from "../Login/LoginPage";
const MessagesContainer = React.lazy(() => import('../Messages/MessagesContainer'));
// import MessagesContainer from "../Messages/MessagesContainer";


const Content = () => {
    return (
      <div className={styles.wrapper}>
          <React.Suspense fallback={<div style={{color: 'white'}}>Loading...</div>}>
              <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
              <Route path={'/messages'} render={() => <MessagesContainer/>}/>
              <Route path={'/find_friends'} render={() => <FindFriendsContainer/>}/>
              <Route path={'/login'} render={() => <LoginPage/>}/>
              <Route path={'/music'} component={Music}/>
              <Route path={'/news'} component={News}/>
              <Route path={'/settings'} component={Settings}/>
          </React.Suspense>
      </div>
    )
}

export default Content;