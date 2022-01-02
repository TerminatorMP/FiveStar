import React from 'react';

import styles from './Wiki.module.scss';
import Navigation from "../../layout/Navigation/Navigation";
import Footer from "../../layout/Footer/Footer";
import WikiSidebar from "./WikiSidebar/WikiSidebar";
import {Outlet, Route, Routes} from "react-router-dom";
import Content from "../../layout/Content/Content";

export default function Wiki() {
  return(
      <>
      <Navigation />
        <Content>
          <main>
            <WikiSidebar />
            <div className={styles["wiki"]}>
              <Outlet />
            </div>
          </main>
        </Content>
      <Footer />
      </>
  )
}