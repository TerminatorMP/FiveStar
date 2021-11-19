import React from "react";

import styles from './Text.module.scss';

export default function Text({ content }) {
  return(
      <p>
        {content}
      </p>
  )
}