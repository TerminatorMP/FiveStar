import React from "react";

import styles from './Homepage.module.scss';
import skyline from '../../assets/images/skyline.jpg';


export default function Begin() {
  return(
      <>
        <div className={styles["begin_divider"]} />
        <div className={styles["begin"]}>
          <div style={{backgroundImage: `url("${skyline}")`}} className={styles["begin_img"]} />
          <div className={styles["begin_img_overlay"]} />
        </div>
      </>
  )
}