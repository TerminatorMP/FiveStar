import React from "react";

import styles from './Logo.module.scss';
import logo from '../../assets/images/logo_new.png';

export default function Logo() {
  return(
      <img className={styles["logo"]} width={"100%"} height={"100%"} src={logo} alt="Logo: 5Star" />
  )
}