import React, {useState} from 'react';

import styles from './NavLinksResponsiveSidebar.module.scss';
import NavLinksResponsiveSidebarItem from "./NavLinksResponsiveSidebarItem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

export default function NavLinksResponsiveSidebar() {
    const [isAktive, setIsAktive] = useState(false);

    const sidebarItemList = [
        <NavLinksResponsiveSidebarItem to="/" description="Regeln" />,
        <NavLinksResponsiveSidebarItem to="/anleitung" description="Zugang" />,
        <NavLinksResponsiveSidebarItem to="/wiki" description="Wiki" />
    ]

    const toggle = () => {
        setIsAktive(!isAktive);
    }

    const close = () => {
        setIsAktive(false);
    }

    return(
        <div className={styles["container"]}>
            <div onClick={toggle}
                 className={styles["toggler"]}>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <div className={styles["sidebar_spacer"]}/>
            <div className={isAktive ? `${styles["wiki_sidebar"]} ${styles["aktive"]}` : styles["wiki_sidebar"]}>
                <div onClick={close} className={styles["closer"]}><FontAwesomeIcon icon={faBars} /></div>
                <div onClick={close} className={styles["sidebar_box"]}>
                    {sidebarItemList}
                </div>
            </div>
            {isAktive ? <div onClick={close} className={styles["overlay"]} /> : null}
        </div>

  )
}