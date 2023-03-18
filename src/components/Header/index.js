import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <header className={styles.header}>
      <NavLink to="/">
        <img src="/static/images/Logo.png" alt="logo squadhelp" className={styles.img}/>
      </NavLink>
      {pathname === "/login" ? (
        <NavLink to="/signup" className={styles.link}>Signup</NavLink>
      ) : (
        <NavLink to="/login" className={styles.link}>Login</NavLink>
      )}
    </header>
  );
};

export default Header;
