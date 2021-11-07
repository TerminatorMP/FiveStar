import React from "react";

import styles from './Logo.module.scss';
import logo from '../../assets/images/logo.png';

export default function Logo() {
  return(
      <div className={styles["logo"]}>
        <img src={logo} alt="Logo: 5Star" />
      </div>
  )
}