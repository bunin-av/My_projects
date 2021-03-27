import React from "react";
import styles from "./Navbar.module.scss"

const Navbar = () => {
  return <nav className={styles.nav}>
    <div className={styles.menu}>
      <div className={styles.menu__elem}><a href="#">Profile</a></div>
      <div className={styles.menu__elem}><a href="#">Messages</a></div>
      <div className={styles.menu__elem}><a href="#">News</a></div>
      <div className={styles.menu__elem}><a href="#">Music</a></div>
      <div className={styles.menu__elem}><a href="#">Settings</a></div>
    </div>

  </nav>
}

export default Navbar;