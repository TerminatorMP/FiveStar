import React from "react";

import Logo from "../../components/Logo/Logo";
import NavLinks from "../../components/NavLinks/NavLinks";

import styles from './Navigation.module.scss';

export default function Navigation() {
  return(
      <nav className={styles["nav"]}>
        <Logo />
        <NavLinks />
      </nav>
  )
}