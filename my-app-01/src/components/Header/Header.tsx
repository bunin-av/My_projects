import React from "react";
import styles from "./Header.module.scss"
import {NavLink} from "react-router-dom";

const Header = (props: any) => {
    return (
      <header className={styles.header}>
          <div className={styles.header__logo}>
              <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="logo"/>
          </div>
          <div className={styles.login}>
              {
                  (props.isAuth)
                    ? <div>{props.login}</div>
                    : <NavLink to={`/login`}>
                        <div>Login</div>
                    </NavLink>
              }
          </div>

      </header>
    )
}

export default Header;