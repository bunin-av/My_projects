import React from "react";
import styles from "./Header.module.scss"

const Header = () => {
  return <header className={styles.header}>
    <div className={styles.header__logo}>
      <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="logo"/>
    </div>
  </header>
}

export default Header;