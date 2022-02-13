import React from "react";


import styles from './Star.module.scss';
import { ReactComponent as StarSvg } from "../../assets/images/star.svg";

export default function Star({color = "white", height, width}) {
  return(
    <div className={`${styles["star"]} ${styles["star--" + color]}`}
         style={{minHeight: ""+height, height: height, minWidth: ""+width, width: width}}>
      <StarSvg />
    </div>
  )
}