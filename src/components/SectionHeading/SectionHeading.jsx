import React from "react";

import styles from './SectionHeading.module.scss';


export default function SectionHeading({ text, color }) {
  return(
      <h2 className={styles[color]}>
        {text}
      </h2>
  )
}