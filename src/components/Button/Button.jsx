import React from "react";

import styles from "./Button.module.scss";

export default function Button({children, onClick, type="primary", customStyle}) {



  return(
      <div className={`${styles["btn-wrapper"]} ${customStyle}`}>
        <button onClick={onClick} className={`${styles["offset"]} ${styles[type]}`}
        >
          {children}
        </button>
      </div>
  )
}