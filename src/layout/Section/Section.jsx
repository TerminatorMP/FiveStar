import React from "react";

import styles from "./Section.module.scss";

export default function Section({ children, type }) {

  const typeEnum = {
    dark: styles["dark"],
    primary: styles["primary"],
  }

  return(
      <section className={typeEnum[type]}>
        {children}
      </section>
  )
}
