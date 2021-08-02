import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <ul className={styles.navigation__list}>
          <li className={styles.navigation__item}>
            <NavLink
              to="/"
              className={styles.navigation__link}
              activeClassName={styles.navigation__link_active}
              exact
            >
              Home
            </NavLink>
          </li>
          <li className={styles.navigation__item}>
            <NavLink
              to="/movie"
              className={styles.navigation__link}
              activeClassName={styles.navigation__link_active}
            >
              Movie
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
