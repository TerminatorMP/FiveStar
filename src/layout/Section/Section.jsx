import React from "react";

import styles from "./Section.module.scss";

export default function Section({ children, type, customStyle }) {

  const typeEnum = {
    dark: styles["dark"],
    primary: styles["primary"],
    white: styles["white"],
  }

  return(
      <section style={customStyle} className={typeEnum[type]}>
        {children}
      </section>
  )
}
