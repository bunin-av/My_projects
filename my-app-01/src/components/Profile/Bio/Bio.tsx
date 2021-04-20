import React from "react";
import styles from "./Bio.module.scss"


const Bio = (props: any) => {
    // return <div className={styles.Bio}>
    //     <h3>Alex B.</h3>
    //     <ul>
    //         <li>Date of Birth: 05.05.1990</li>
    //         <li>City: Moscow</li>
    //         <li>Web-site: none</li>
    //     </ul>
    // </div>
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
      </div>
    )
}

export default Bio;