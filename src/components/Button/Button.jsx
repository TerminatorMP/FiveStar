import React from "react";

import styles from "./Button.module.scss";

export default function Button({children, type="primary", customStyle}) {



  return(
      <div className={`${styles["btn-wrapper"]} ${customStyle}`}>
        <button className={`${styles["offset"]} ${styles[type]}`}
        >
          {children}
        </button>
      </div>
  )
}