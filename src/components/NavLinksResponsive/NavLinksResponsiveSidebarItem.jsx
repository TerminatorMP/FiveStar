import React from "react";

import styles from "./NavLinksResponsiveSidebar.module.scss";
import {NavLink} from "react-router-dom";

const activeClass = `${styles["sidebar_item"]} ${styles["sidebar_item_active"]}`
const defaultClass = `${styles["sidebar_item"]}`

export default function NavLinksResponsiveSidebarItem({ to, description }) {
  return(
      <NavLink to={to}
               className={({isActive}) => isActive ? activeClass : defaultClass}>
        {description}
      </NavLink>
  )
}