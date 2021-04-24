import React from "react";
import styles from "./Ava.module.scss"
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/userS1.png";

const Ava = (props: any) => {

    if (!props) {
        return <div className={styles.Ava}>
            <img
              src="http://sun9-44.userapi.com/s/v1/if1/qw3vWR63rnWIPexrEErujILvop-GpxX8MJRJx1emFNrgy2Ve9Hf3sqh5NLHETJNtyNMxaiTe.jpg?size=200x0&quality=96&crop=18,0,586,594&ava=1"
              alt=""/>
        </div>
    } else if (!props.photos){
        return <Preloader/>
    }
    return <div className={styles.Ava}>
        <img src={props.photos.large != null ? props.photos.large : userPhoto} alt=""/>
    </div>
}

export default Ava;