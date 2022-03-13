import React from "react";

import styles from "./Onboarding.module.scss";
import Content from "../../layout/Content/Content";

const Info = () => {
  return(
    <div>
      <div className={styles["anleitung_info"]}>
        <p className={styles["heading"]}>Discord</p>
          <div className={styles["link"]}>
              <a href={"https://discord.gg/c2DgzzpKXR"} target={"_blank"} >
                  https://discord.gg/c2DgzzpKXR
              </a>
          </div>
        <p className={styles["heading"]}>TeamSpeak</p>
        <div className={styles["link"]}>
          45.142.114.56
        </div>
        <p className={styles["heading"]}>FiveM</p>
        <div className={styles["link"]}>
          45.142.114.56
        </div>
    </div>
  </div>
  )
}

const AnleitungContent = () => {
  return(
      <div className={styles["anleitung_content"]}>
        <div className={`${styles["anleitung_subheading"]} marginBottomSmall`}>
          So kommst du auf den Server
        </div>
        <p>
            Wer Zugang zu unserem fiveSTARS RP Server haben möchte muss im Teamspeak ein lockeres Einführungs-Gespräch mit einem Supporter führen.
            Damit wollen wir erreichen das jeder Spieler genau weiß worum es bei uns geht.
        </p>
          <p>
              Das Gespräch dient zur Sicherheit und garantiert einen angenehmen Spielspaß damit wir weniger Modder und Trolls auf dem Server haben.
          </p><br/><br/>
          <p><b>Gespraechs-Zeiten:</b></p>
          <p>
              16:00 - 18:00 Uhr<br/>
              20:00 - 21:30 Uhr
          </p>
          <p><br/>
              Komme dazu in den Einreise Warteraum im Teamspeak und warte bis du von einem Teammitglied gezogen wirst.
          </p><br/><br/>
          <p><b>Nach dem Einfuehrungs-Gespraech:</b></p><br/>
          <p>Tritt dem Server ueber diesem Link bei: </p><br/>
          <div className={styles["link"]}>
              <a href={"https://servers.fivem.net/servers/detail/k66dqr"} target={"_blank"} rel={"noopener noreferrer"}>
                  https://servers.fivem.net/servers/detail/k66dqr
              </a>
          </div>
          <br/><br/>
          <p>oder</p>
          <br/><br/>
          <p>
              1. Starte dein FiveM <br/>
              2. Drücke in FiveM auf F8 um die Konsole zu öffnen <br/>
              3. Dann fügst du den unten stehenden Text in die Konsole ein und bestätigst mit Enter. <br/>
          </p><br/>
          <p><i>connect 45.142.114.56</i></p> <br/>
          <p>
              Du kannst den Text kopieren (STRG+C) und dann in die Konsole einfügen (STRG+V)
          </p>
          <br/><br/><br/>
          <p>
              Viel Spaß
              <br/>
              Euer fiveSTARS Team
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