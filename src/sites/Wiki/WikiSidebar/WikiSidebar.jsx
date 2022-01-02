import React from 'react';

import styles from './WikiSidebar.module.scss';
import SidebarItem from "./SidebarItem";

export default function WikiSidebar() {
  return(
      <>
        <div className={styles["wiki_sidebar"]}>
          <div className={styles["sidebar_box"]}>
            <SidebarItem to="hotkeys" description="Tastenbelegung" />
            <SidebarItem to="racing" description="Racing" />
          </div>
        </div>

        <div className={styles["placeholder"]} />
      </>

  )
}