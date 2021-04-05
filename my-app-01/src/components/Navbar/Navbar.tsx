import React from "react";
import styles from "./Navbar.module.scss"
import {NavLink} from "react-router-dom";
import FriendsSidebar from "./FriendsSidebar/FriendsSidebar";


const Navbar = (props:any) => {
    return (
      <nav className={styles.navbar}>
          <div className={styles.menu}>
              <div className={styles.menu__elem}>
                  <NavLink to="/profile" activeClassName={styles.active}>Profile</NavLink>
              </div>
              <div className={styles.menu__elem}>
                  <NavLink to="/messages" activeClassName={styles.active}>Messages</NavLink>
              </div>
              <div className={styles.menu__elem}>
                  <NavLink to="/news" activeClassName={styles.active}>News</NavLink>
              </div>
              <div className={styles.menu__elem}>
                  <NavLink to="/music" activeClassName={styles.active}>Music</NavLink>
              </div>
              <div className={styles.menu__elem}>
                  <NavLink to="/settings" activeClassName={styles.active}>Settings</NavLink>
              </div>
          </div>
          <FriendsSidebar state={props.state.friendsSidebar}/>
      </nav>
    )
}

export default Navbar;