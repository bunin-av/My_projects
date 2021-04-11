import styles from './Content.module.scss';
import Settings from "../Settings/Settings";
import Music from "../Music/Music";
import News from "../News/News";
import Profile from "../Profile/Profile";
import {Route} from "react-router-dom";
import React from "react";
import MessagesContainer from "../Messages/MessagesContainer";

const Content = () => {
    return (
      <div className={styles.wrapper}>
           <Route path={'/profile'} render={() => <Profile />}/>
          <Route path={'/messages'} render={() => <MessagesContainer />}/>
          <Route path={'/music'} component={Music}/>
          <Route path={'/news'} component={News}/>
          <Route path={'/settings'} component={Settings}/>
      </div>
    )
}

export default Content;