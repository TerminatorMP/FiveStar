import React from "react";

import styles from "./Onboarding.module.scss";
import Navigation from "../../layout/Navigation/Navigation";
import Anleitung from "./Anleitung";
import Footer from "../../layout/Footer/Footer";

export default function Onboarding() {
  return(
      <>
        <Navigation />
        <Anleitung />
        <Footer />
      </>
  )
}