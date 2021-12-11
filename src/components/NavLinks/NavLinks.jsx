import React from "react";
import { NavLink } from 'react-router-dom';

import styles from './NavLinks.module.scss';


export default function NavLinks() {

  return(
      <div className={styles["navlinks"]}>
        <ul>
          <li><NavLink to="/" activeClassName="link_active">Home</NavLink></li>
          <li><NavLink to="/anleitung" activeClassName="link_active">Anleitung</NavLink></li>
        </ul>
      </div>
  )
}