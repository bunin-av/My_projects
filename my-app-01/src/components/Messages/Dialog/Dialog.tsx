import React from "react";
import styles from './Dialog.module.scss'
import {NavLink} from "react-router-dom";
import {DialogType} from "../../../redux/messages-reducer";

const Dialog = (props: DialogType) => {
    return (
      <div className={styles.dialogs}>
          <UserAva avaUrl={props.avaUrl}/>
          <div className={styles.userInfo}>
              <NavLink to={'/messages/' + props.id}>{props.userName}</NavLink>
          </div>
      </div>
    )
}

type UserAvaPropsType = {
    avaUrl: string;
}
const UserAva = (props: UserAvaPropsType) => {
    return (
      <div className={styles.userAva}>
          <img src={props.avaUrl} alt=""/>
      </div>
    )
}

export default Dialog