import preloader from '../../../assets/images/preloader.gif'
import React from "react";
import styles from './Preloader.module.scss'

const Preloader = () => {
    return (
      <div><img src={preloader} className={styles.preloader} alt=""/></div>
    )
}

export default Preloader;