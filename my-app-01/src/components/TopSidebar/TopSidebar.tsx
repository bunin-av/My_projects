import React from "react";
import styles from "./TopSidebar.module.scss"
import img from '../../assets/images/exit.png'

const TopSidebar = () => {
    return (
      <div className={styles.topSidebar}>
          <div>
              <img src={img} alt=""/>
              Hi Alex
          </div>
      </div>

    )
}

export default TopSidebar;
