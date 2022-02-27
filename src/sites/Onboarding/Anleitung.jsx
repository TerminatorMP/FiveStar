import React from "react";

import styles from "./Onboarding.module.scss";
import Content from "../../layout/Content/Content";

const Info = () => {
  return(
    <div>
      <div className={styles["anleitung_info"]}>
        <p className={styles["heading"]}>Discord</p>
        <p className={styles["link"]}>
          https://discord.gg/HrxAvpVh
        </p>
        <p className={styles["heading"]}>TeamSpeak</p>
        <p className={styles["link"]}>
          45.142.114.56
        </p>
        <p className={styles["heading"]}>FiveM</p>
        <p className={styles["link"]}>
          45.142.114.56
        </p>
    </div>
  </div>
  )
}

const AnleitungContent = () => {
  return(
      <div className={styles["anleitung_content"]}>
        <div className={`${styles["anleitung_subheading"]} marginBottomSmall`}>
          Whitelist
        </div>
        <p>
          Wer Zugang zu unserem fiveSTARS Discord und RP Server haben möchte muss sich bei einem Teammitglied vorstellen.
          Dies dient zur Sicherheit und garantiert einen angenehmen Spielspaß!
          So wollen wir in Zukunft Engpässe in einzelnen Fraktionen vermeiden und das Gleichgewicht halten!
        </p>
      </div>
  )
}

export default function Anleitung() {
  return(
      <div className={styles["anleitung"]}>
        <Content>
          <div className={styles["anleitung_wrapper"]}>
            <Info />
            <AnleitungContent />
          </div>
        </Content>
      </div>
  )
}