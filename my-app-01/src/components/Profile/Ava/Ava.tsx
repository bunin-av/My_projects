import React from "react";
import styles from "./Ava.module.scss"
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/userS1.png";
import {UserProfileType} from "../../../redux/profile-reducer";


const Ava = (props: UserProfileType) => {
    if (!props.photos) {
        return <Preloader/>
    }
    return <div className={styles.Ava}>
        <img src={props.photos.large ? props.photos.large : userPhoto} alt="user_photo"/>
    </div>
}

export default Ava;