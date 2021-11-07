import React from "react";

import styles from "./Button.module.scss";

export default function Button({children, customStyle}) {
  return(
      <div style={customStyle} className={styles["btn-wrapper"]}>
        <a href="#" className={
          [styles["btn"],
            styles["btn-sm"],
            styles["animated-button"],
            styles["victoria-one"]].join(' ')}
        >
          {children}
        </a>
      </div>
  )
}