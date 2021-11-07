import React from "react";


import styles from './Star.module.scss';
import { ReactComponent as StarSvg } from "../../assets/images/star.svg";

export default function Star() {
  return(
    <div className={styles["star"]}>
      <StarSvg />
    </div>
  )
}