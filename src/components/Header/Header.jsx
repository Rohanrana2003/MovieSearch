import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logoLink}>
        <h1 className={styles.heading}>Movie Finder</h1>
      </NavLink>

      <nav className={styles.navLinks}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.navLink
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.navLink
          }
        >
          Favorites
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
