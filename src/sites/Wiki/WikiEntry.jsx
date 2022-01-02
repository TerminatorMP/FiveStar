import React from "react";

import styles from './Wiki.module.scss';

export default function WikiEntry({ children }) {
  return(
      <div className={styles["wiki_entry"]}>
        {children}
      </div>
  )
}