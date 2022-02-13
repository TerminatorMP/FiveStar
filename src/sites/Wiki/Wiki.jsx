import React from 'react';

import styles from './Wiki.module.scss';
import Navigation from "../../layout/Navigation/Navigation";
import WikiSidebar from "./WikiSidebar/WikiSidebar";
import { Outlet } from "react-router-dom";
import Content from "../../layout/Content/Content";

export default function Wiki() {
    return (
        <>
            <Navigation/>
            <div style={{display: "flex"}}>
                <WikiSidebar/>
                <Content>
                    <main>
                        <div className={styles["wiki"]}>
                            <Outlet/>
                        </div>
                    </main>
                </Content>
            </div>
        </>
    )
}