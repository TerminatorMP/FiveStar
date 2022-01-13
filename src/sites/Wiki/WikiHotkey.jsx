import React from "react";

import styles from './Wiki.module.scss';
import WikiEntry from "./WikiEntry";
import SectionHeading from "../../components/SectionHeading/SectionHeading";

const dataHotkeysF = [
  {taste: 'F1', funktion: 'Handy rausnehmen'},
  {taste: 'F2', funktion: 'Emote Menü'},
  {taste: 'F3', funktion: 'Inventar öffnen'},
  {taste: 'F5', funktion: 'Charakter Menü'},
  {taste: 'F6', funktion: 'Job Menü (legal)'},
  {taste: 'F7', funktion: 'Rechnungen'},
  {taste: 'F10', funktion: 'Hände hoch'},
  {taste: 'F11', funktion: 'Bug Report'},
]

const dataHotkeyControl = [
  {taste: 'ESC', funktion: 'Map / Optionen'},
  {taste: 'CAPS Lock', funktion: 'Sprachradius>Einstellungen>Tastaturbelegung> fiveM>saltychat>voicerange'},
  {taste: 'Tabulator', funktion: 'Waffenrad'},
  {taste: 'Control', funktion: 'Ducken'},
]

const dataHotkeyAllg = [
  {taste: 'Q', funktion: 'Deckung suchen'},
  {taste: 'R', funktion: 'Waffe nachladen / Faustschlag'},
  {taste: 'T', funktion: 'OOC Chat'},
  {taste: 'P', funktion: 'Map / Optionen'},
  {taste: 'G', funktion: 'Fahrzeuge auf / abschließen'},
  {taste: 'H', funktion: 'Mit dem Finger zeigen'},
  {taste: 'B', funktion: 'Kleider Menü'},
  {taste: 'Y', funktion: 'Waffe im Anschlag Emote'},
  {taste: 'C', funktion: 'Blick zurück'},
  {taste: 'V', funktion: 'Kamera Ansicht'},
  {taste: 'K', funktion: 'Kofferraum öffnen'},
  {taste: 'M', funktion: 'Motor ein / aus'},
  {taste: 'H', funktion: 'Scheinwerfer beim Fahrzeug'},
  {taste: 'L', funktion: 'OOC Chat ein- / ausblenden'},
  {taste: 'Num +', funktion: 'Tempomat'},
]

const dataHotkeyCombat = [
  {taste: 'Zielen + Leertaste', funktion: 'Körper Rolle'},
  {taste: 'Rechte Maustaste', funktion: 'Zielen'},
  {taste: 'Linke Maustaste', funktion: 'Schießen / Schlagen'},
]

const dataHotkeyChat = [
  {taste: '/twt', funktion: 'Twitterchat'},
  {taste: '/anontwt', funktion: 'anonymer Twitterchat'},
  {taste: '/toggleui', funktion: 'UI ein-/ ausblenden'},
  {taste: '/togglewm', funktion: 'Logo ein-/ ausblenden'},
  {taste: '/info', funktion: 'ID Anzeige im Chat'},
  {taste: '/shuff', funktion: 'Zum Fahrersitz wechseln'},
]

const WikiHotkeyTable = ({caption, data}) => {
  return(
      <table>
        <thead>
          <th>{caption}</th>
          <th/>
        </thead>
        <tbody>
        {data.map(({taste, funktion}) =>
            <tr>
              <td>{taste}</td>
              <td>{funktion}</td>
            </tr>)}
        </tbody>
      </table>
  )
}


export default function WikiHotkey() {

  return(
      <WikiEntry>
        <div className={styles["hotkeys"]}>
          <SectionHeading text={'Tastenbelegung'} />
          <WikiHotkeyTable caption={'Funktionstasten'} data={dataHotkeysF} />
          <WikiHotkeyTable caption={'Option'} data={dataHotkeyControl} />
          <WikiHotkeyTable caption={'Allgemein'} data={dataHotkeyAllg} />
          <WikiHotkeyTable caption={'Kampf'} data={dataHotkeyCombat} />
          <WikiHotkeyTable caption={'Chat'} data={dataHotkeyChat} />
        </div>
      </WikiEntry>
  )
}