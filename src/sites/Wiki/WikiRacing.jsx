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
            <div className={styles["racing_beispiel_wrapper"]}>
              <p><em>Chat öffen</em></p>
              <p><em>/races loadPublic 00</em> [enter]</p>
              <p> <em>/races register 500 1 300</em> [enter]</p>
              <p> <em>/races start 10</em> [enter]</p>
              <br/>
              <p>Nach dem Rennen:</p>
              <p> <em>/races clear</em> [enter]</p>
              <br/>
              <p>Wenn du nicht weiterfahren kannst:</p>
              <p> <em>/races leave</em> [enter]</p>
            </div>

            <div className={styles["racing_regeln"]}>
              <h3>Regeln</h3>
              <div className={styles["racing_regeln_wrapper"]}>
                <p>
                  Der Ersteller des Races bestimmt welche Klasse gefahren wird z.B GTA Sport Autos
                  oder aus der Fahrzeuginfo Liste z.B B+
                  Falls bei einem B+ Rennen ein A Klasse Wagen antreten will muss dieser gedrosselt werden
                </p><br />
                <p>
                  Es gilt Rücksichtsvolles Fahren und es gelten die Normalen VDM Regeln
                  Unfälle können passieren aber fordert es nicht heraus.
                </p><br />
                <p>
                  Es ist erlaubt nach einem Crash sein Fahrzeug mit einem Reparatur-Kit zu reparieren.
                  Es ist nicht erlaubt sich ein Kopflosen-Fahrzeug zu klauen und damit das Rennen zu beenden
                </p>
              </div>
            </div>
          </div>
        </div>
      </WikiEntry>
  )
}