import React from "react";

import {NavLink} from "react-router-dom";
import Content from "../Content/Content";

import styles from './Footer.module.scss';
import Star from "../../components/Star/Star";

export default function Footer() {
  return(
      <footer>
          <Content>
              <div className={styles["container"]}>
                  <div className={styles["category"]}>
                      <NavLink to={"/"}>Home</NavLink>
                      <NavLink to={"/anleitung"}>Zugang</NavLink>
                      <NavLink to={"/wiki"}>Wiki</NavLink>
                  </div>
                  <div className={styles["category"]}>
                      <NavLink to={"/impressum"}>Impressum</NavLink>
                      <NavLink to={"/datenschutz"}>Datenschutz</NavLink>
                  </div>
              </div>
              <h2>FiveStars</h2>
          </Content>
      </footer>
  )
}