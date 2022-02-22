import React from "react";
import NavLinks from "../NavLinks/NavLinks";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {faBars} from "@fortawesome/free-solid-svg-icons";
import styles from "./NavLinksResponsive.module.scss";


export default function NavLinksResponsive() {
    return (
        <div className={styles["nav_responsive"]}>
            <div><NavLinks /></div>
            <div className={styles["nav_burger"]}><FontAwesomeIcon icon={faBars} /></div>
        </div>
    )
}