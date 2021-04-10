import styles from './Content.module.scss';
import Settings from "../Settings/Settings";
import Music from "../Music/Music";
import News from "../News/News";
import Profile from "../Profile/Profile";
import {Route} from "react-router-dom";
import React from "react";
import MessagesContainer from "../Messages/MessagesContainer";

const Content = (props: any) => {
    debugger
    return (
      <div className={styles.wrapper}>
          {/*<Route path={'/profile'} render={() => <Profile state={props.state.profilePage} dispatch={props.dispatch}/>}/>*/}
          {/*<Route path={'/messages'} render={() => <Messages state={props.state.messagesPage} dispatch={props.dispatch}/>}/>*/}
          <Route path={'/profile'} render={() => <Profile store={props.store}/>}/>
          <Route path={'/messages'} render={() => <MessagesContainer store={props.store}/>}/>
          <Route path={'/music'} component={Music}/>
          <Route path={'/news'} component={News}/>
          <Route path={'/settings'} component={Settings}/>
      </div>
    )
}

export default Content;