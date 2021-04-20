import React from "react";
import styles from './Preloader.module.scss'

const Preloader = () => {
    return (
      <div className={styles.lds_roller}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
      </div>
    )
}

export default Preloader;