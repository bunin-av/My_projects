import React from "react";
import {Route} from "react-router-dom";
import styles from "./Bio.module.scss"
import MyStatus from "./MyStatus/MyStatus";
import UserStatus from "./UserStatus/UserStatus";


const Bio = (props: any) => {
    const loadPhoto = ((e:React.ChangeEvent<HTMLInputElement>)=>{
        e.target.files && e.target.files.length &&
            props.loadPhoto(e.target.files[0])
    })

    return (
      <div className={styles.Bio}>
          <h3>{props.fullName}</h3>
          {!props.isUser && <input type={'file'} onChange={loadPhoto}/>}
          <ul>
              {/*<li>About me: {props?.aboutMe}</li>*/}
              <li>Web-site: {props.contacts?.website}</li>
              <li>Looking for: {props?.lookingForAJobDescription}</li>
              Contacts:
              <li>Facebook: {props.contacts?.facebook}</li>
              <li>VK: {props.contacts?.vk}</li>
              <li>Twitter: {props.contacts?.twitter}</li>
              <li>Instagram: {props.contacts?.instagram}</li>
              <li>YouTube: {props.contacts?.youtube}</li>
          </ul>
          <Route exact path={'/profile'}
                 render={() => <MyStatus
                   updateMyStatus={props.updateMyStatus}
                   status={props.userStatus}/>}/>
          <Route exact path={`/profile/${props.userId}`}
                 render={() => <UserStatus status={props.userStatus}/>}/>
      </div>
    )
}

export default Bio;