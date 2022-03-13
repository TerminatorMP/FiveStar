import React from "react";
import {Link, NavLink} from 'react-router-dom';

import styles from './NavLinks.module.scss';


const activeClass = `${styles["link"]} ${styles["link_active"]}`;
const defaultClass = `${styles["link"]}`;

export default function NavLinks() {

  const NavItem = ({children, to}) => {
    return(
        <li>
          <NavLink to={to} className={({isActive}) => isActive ? activeClass : defaultClass}>
            {children}
          </NavLink>
        </li>
    )
  }

  return(
      <div className={styles["navlinks"]}>
        <ul>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/anleitung">Zugang</NavItem>
          <NavItem to="/wiki">Wiki</NavItem>
        <li>
            <a
                className={defaultClass}
                href={"https://five-stars-roleplay.tebex.io/"}
                target={"_blank"}
                rel={"noopener noreferrer"}>
                Spenden
            </a>
        </li>
        </ul>
      </div>
  )
}