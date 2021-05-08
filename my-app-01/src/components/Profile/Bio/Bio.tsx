import React from "react";
import {Route} from "react-router-dom";
import styles from "./Bio.module.scss"
import MyStatus from "./MyStatus/MyStatus";
import UserStatus from "./UserStatus/UserStatus";


const Bio = (props: any) => {
    return (
      <div className={styles.Bio}>
          <h3>{props.fullName}</h3>
          <ul>
              <li>Date of Birth: 05.05.1990</li>
              <li>City: Moscow</li>
              <li>About me: {props?.aboutMe}</li>
              <li>Web-site: {props.contacts?.website}</li>
              <li>Looking for: {props?.lookingForAJobDescription}</li>
              Contacts:
              <li>Facebook: {props.contacts?.facebook}</li>
              <li>VK: {props.contacts?.vk}</li>
              <li>Twitter: {props.contacts?.twitter}</li>
              <li>Instagram: {props.contacts?.instagram}</li>
              <li>YouTube: {props.contacts?.youtube}</li>
          </ul>
          <Route exact path={'/profile'} render={() => <MyStatus updateMyStatus={props.updateMyStatus} status={props.userStatus}/>}/>
          <Route exact path={`/profile/${props.userId}`} render={() => <UserStatus status={props.userStatus}/>}/>
      </div>
    )
}

export default Bio;