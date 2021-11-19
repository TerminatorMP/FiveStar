import React from "react";

import styles from './SectionHeading.module.scss';


export default function SectionHeading({ text }) {
  return(
      <h2>
        {text}
      </h2>
  )
}