import React from "react";
import styles from "./Header.module.scss"
import {NavLink} from "react-router-dom";
import {HeaderProps} from "./HeaderContainer";
import logo from "./../../assets/images/logo.png"

const Header = (props: HeaderProps) => {
    return (
      <header className={styles.header}>
          <div className={styles.header__logo}>
              <img src={logo} alt="logo"/>
          </div>
          <div className={styles.login}>
              {
                  (props.isAuth)
                    ? <div>{props.login} <button onClick={props.doLogOut}>Log out</button></div>
                    : <NavLink to={`/login`}>
                        <div>Login</div>
                    </NavLink>
              }
          </div>
      </header>
    )
}

export default Header;