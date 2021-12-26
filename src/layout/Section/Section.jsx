import React from "react";

import styles from "./Section.module.scss";

export default function Section({ children, type, customStyle }) {

  const typeEnum = {
    dark: styles["dark"],
    black: styles["black"],
    blackLight: styles["black-light"],
    primary: styles["primary"],
    white: styles["white"],
    spot: styles["spot"],
  }

  return(
      <section style={customStyle} className={typeEnum[type]}>
        {children}
      </section>
  )
}
