import React, {useState} from 'react';

import styles from './WikiSidebar.module.scss';
import SidebarItem from "./SidebarItem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

export default function WikiSidebar() {
    const [isAktive, setIsAktive] = useState(false);

    const sidebarItemList = [
        <SidebarItem to="regeln" description="Regeln" />,
        <SidebarItem to="hotkeys" description="Tastenbelegung" />,
        <SidebarItem to="racing" description="Racing" />
    ]

    const toggle = () => {
        setIsAktive(!isAktive);
    }

    const close = () => {
        setIsAktive(false);
    }

    return(
        <div>
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