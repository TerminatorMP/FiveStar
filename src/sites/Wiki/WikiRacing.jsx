import React from 'react';

import racing from "../../assets/images/racing.jpg";
import styles from './Wiki.module.scss';
import WikiEntry from "./WikiEntry";
import SectionHeading from "../../components/SectionHeading/SectionHeading";

export default function WikiRacing() {
  return(
      <WikiEntry>
        <SectionHeading text={"Racing"} />
        <img width={"60%"}
             height={"auto"}
             style={{display: "block", borderRadius: "5px", border: "solid 3px black"}}
             src={racing}
             alt={"Rennen gegen deinen Rivalen"} />

        <div className={styles["racing"]}>
          <div className={styles["racing_commands"]}>
            <h3>Commands</h3>
            <p><b>/races loadPublic [Name*]</b> Lädt das ausgewählte Rennen</p>
            <p><b>/races reverse</b> Dreht die Wegpunkte um Start &lt->Ziel</p>
            <p><b>/races register [Startgeld] [Runden] [Disqual. Timer in Sek. empf. 300]</b></p>
            <p><b>/races start [Start Timer in Sekunden]</b> Startet das Rennen</p>
            <p><b>/races clear </b> Löscht die Wegpunkte (Erst nach beenden oder ausscheiden)</p>
            <p><b>/races leave </b> Du verlässt das Rennen</p>
            <p><b>/races rivals </b> Liste aller Fahrer des jeweiligen Rennen (zeigt nur Registrierte Fahrer)</p>
            <p><b>/races bltPublic [Name*] </b> Liste der besten 10 Runden des jeweiligen Rennen [Name*]</p>
            <p><b>/races results</b> Zeigt die letzten Resultate des jeweiligen Rennen (nur wenn noch Aktiv)</p>
          </div>
          <div className={styles["racing_beispiel"]}>
            <h3>Beispiel</h3>
            <p>Hier ein Beispiel um ein Rennen zu starten:</p>
            <div className={styles["racing_beispiel_wrapper"]}>
              <p><em>Chat öffen</em></p>
              <p>/races loadPublic 00 <em>[enter]</em></p>
              <p>/races register 500 1 300 <em>[enter]</em></p>
              <p>/races start 10 <em>[enter]</em></p>
            </div>


          </div>
        </div>
      </WikiEntry>
  )
}