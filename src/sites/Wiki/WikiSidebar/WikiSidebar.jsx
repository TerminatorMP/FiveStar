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

    return(
        <div>
            <div onClick={() => {setIsAktive(!isAktive)}}
                 className={styles["toggler"]}>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <div className={styles["sidebar_spacer"]}/>
            <div className={isAktive ? `${styles["wiki_sidebar"]} ${styles["aktive"]}` : styles["wiki_sidebar"]}>
                <div onClick={() => {setIsAktive(false)}} className={styles["closer"]}><FontAwesomeIcon icon={faBars} /></div>
                <div onClick={() => {setIsAktive(false)}} className={styles["sidebar_box"]}>
                    {sidebarItemList}
                </div>
            </div>
        </div>

  )
}