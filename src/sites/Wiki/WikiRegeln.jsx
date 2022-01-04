import React from 'react';

import styles from './Wiki.module.scss';
import WikiEntry from "./WikiEntry";
import SectionHeading from "../../components/SectionHeading/SectionHeading";

const SubRule = ({ children, number }) => {
  return(
      <li>
        <span>§{number}</span>
        {children}
      </li>
  )
}

const ruleData = [
  {
    number: 1,
    topic: "Regelwerk",
    subrules: [
        "Das Regelwerk muss stets eingehalten werden!",
        "Wir behalten uns jegliche Änderung am Regelwerk vor.",
        "Der Spieler muss sich selbständig über Änderungen informieren.",
        "Unwissenheit schützt vor Strafe nicht.",
        "Das Team behält sich das Recht vor jegliche Spieler bei Regelverstößen aus der Community auszuschließen.",
        "Verwarnungen durch das fiVe STARS-Roleplay Team erfolgen mündlich im Teamspeak.",
        "Die Auslegung jeglicher Regeln behält sich das fiVe STARS-Roleplay Team vor.",
        "Die Projektleitung ist von jeglichen Regeln ausgeschlossen.",
        "Das Umgehen der Regeln oder Ausnutzen von Lücken im Regelwerk ist verboten! ( Wir bitten Lücken im Regelwerk im Support zu melden ).",
    ]
  },
  {
    number: 2,
    topic: "Account / Erste Schritte",
    subrules: [
        "Der Spielername ist frei wählbar, sofern:",
        "Vor und Nachname realistisch gestaltet sind. (inkl. Geburtsdatum)",
        "Er nicht gegen die guten Sitten oder gegen das Regelwerk verstößt.",
        "Er nicht durch das Team verboten wurde. Keine berühmten Namen!",
        "Dem Namen eine Teammitglied zu sehr ähnelt. Ausnahmen auf Nachfrage erlaubt.",
        "Jeder Spieler darf nur einen Account besitzen. (Multichar ausgenommen)",
     ]
  },
  {
    number: 3,
    topic: "Discord",
    subrules: [
        "Jegliche Art von Infos die vom Discord genommen werden \n" +
        "sind OOC (Out of Character)\n" +
        "Ausgenommen davon sind lediglich der Kanal RP Bilder und Schwarzmarkt.",
        "Ist jemand jedoch unmaskiert erkennt man anhand des Charakters wer es ist und nicht anhand des Namen des Veröffentlichers.",
    ]
  },
  {
    number: 4,
    topic: "Werbung",
    subrules: [
      "Werbung für fiVe STARS-Roleplay ist erlaubt und erwünscht. \n" +
      "Steigende Mitgliederzahlen kommen zum Wohle des Projekts.",
        "Fremdwerbung auf anderen Roleplay Server für uns ist nicht erlaubt.",
        "Fremdwerbung bei uns ist nicht erlaubt. Das heißt, Werbung und Diskussionen die aktiv von einem Spieler ausgehen oder von ihm angespielt werden, mit der Absicht den Nutzer auf ein anderes Projekt zu verweisen so, dass er wesentlich weniger, oder gar nicht mehr auf fiVe STARS-Roleplay zuhause ist.",
        "Werbung für eigene Projekte und Foren sind ausschließlich nach Absprache mit fiVe STARS-Roleplay zugelassen.",

    ]
  },
  {
    number: 5,
    topic: "Bugs, Fehler und Exploits",
    subrules: [
      "Das Ausnutzen von Bugs, Fehlern oder Exploits im Spiel ist nicht erlaubt.",
        "Alle Bugs, Fehler oder Exploits sind unverzüglich im Support zu melden. (F11 inGame)",
        "Das verwenden von Programmen oder Funktionen die einem einen Vorteil gegenüber anderen verschaffen ist verboten (Hacks,Cheats,Mod Menüs. div. Einstellungen)",
    ]
  },
  {
    number: 6,
    topic: "Umgang, Verhalten, Auftreten und Wichtiges",
    subrules: [
      "Keine rassistischen oder beleidigenden Ausdrücke ohne RP-Hintergrund.",
        "Gute Umgangsformen sind stets zu wahren.",
        "Spieler in ihrer Persönlichkeit anzugreifen, diffamieren(Ruf schädigen) oder irgendwie bloßzustellen ist unter allen Umständen untersagt.",
        "Diskussionen jeglicher Art sind sachlich und freundlich zu führen.",
        "Das verwenden von Soundboards in angemessener Lautstärke ist grundsätzlich erlaubt. Sollte ein Spieler sich dadurch belästigt fühlen und weist darauf hin es auszuschalten ist dem folge zu leisten!",
        "Der Spieler sollte stets für eine ausreichende Mikrofon Qualität sorge tragen.",
        "Die zu sprechende Sprache auf Unserer Plattform ist Deutsch. Einzelne Worte (zb. Grußformeln) sind in einer anderen Sprache gestattet.",
        "OOC Hass und Hetze gegen andere Spieler/Fraktionen wird bei fiVe STARS nicht geduldet!",
        "Das generelle Reden im bewusstlosen Zustand am Boden ist Untersagt.",
        "Das vorsätzliche stören von RP Situationen und provozieren anderer Spieler (Trolling) ist untersagt.",
    ]
  },
  {
    number: 7,
    topic: "Multichar",
    subrules: [
      "Einen zweit Charakter zu erstellen erfordert die Zustimmung des Teams",
        "Es ist eine Charaktervorstellung erforderlich (kein zwei Zeiler)",
        "Es darf wie folgt ein zweit Char erstellt werden ausgehend von Char 1: \n" +
        "\n" +
        "Kriminell / Zivil\t\t\t<->\t\tStaatlich* \n" +
        "Staatlich Polizei/ADAC\t<->\t\tStaatlich Medic\n" +
        "\n" +
        "*(Medic/Polizei/ADAC/Justiz)",
        "Charaktere können abgelehnt werden"
    ]
  },
  {
    number: 8,
    topic: "Allgemeine Regeln",
    subrules: [
      "Für jeden Supportfall den ein Spieler eröffnet ( Beispiel: VDM/RDM/Meta etc. ) sind Beweise erforderlich. Welche Beweise es sind ( Video, Screenshot, Voice Records etc. ) ist erstmal egal. Wichtig ist das die Situation deutlich aus den Beweisen nachzuverfolgen ist. Jede Manipulation an Beweisen ist unzulässig und wird sofort mit einem Ausschluss aus der Community bestraft.",
        "Der Twitter Chat darf nicht für mehrfache Chat Meldungen genutzt werden z.B. alle \"2 Minuten” : Verkaufe Fahrzeug XYZ.",
        "Irreführende und unrealistische Preise/Produktnamen auf dem Schwarzmarkt (Discord) sind verboten.",
        "Ständiges Hupen, Reifen durchdrehen lassen, Mittelfinger zeigen sowie das rasen in der Stadt sind zu unterlassen. Sollte ein Polizist euch darauf hinweisen es zu unterlassen so ist dem folge zu leisten. Im Fall von ignorieren ist der Beamte befugt den Support einzuschalten.",
        "Sex-RP oder Sexuelle Aktivitäten sind erlaubt. Allerdings müssen beide Seiten damit einverstanden sein ein Zwang ist verboten.",
        "Das missbrauchen von Dispatches ( mehrfaches Spammen ) ist verboten. Ein Dispatch ohne vernünftigen Inhalt zählt als missbrauch.",
        "Das benutzen und fahren eines Fahrzeugs wo ein oder mehrere Reifen defekt sind ist mit Schrittgeschwindigkeit zu fahren. Andernfalls würden die Felgen zerbersten!  Das reparieren (/fix) während einer RP-Situation (Verfolgungsjagd) ist verboten.",
        "RDM bedeutet Random Deathmatch. Darunter versteht man das töten von Spielern ohne RP Hintergrund und ohne Schusscall. (Waffen/Fäusten). Dies ist untersagt.",
        "VDM bedeutet Vehicle Deathmatch. Darunter versteht man das töten von Spielern ohne Hintergrund mit einem Fahrzeug oder das grundlose rammen eines anderen Fahrzeuges. Dies ist untersagt.",
        "Bewusstlosigkeit/Verletzt: Informationen die Ihr bekommt, während Ihr am Boden liegt, dürfen nicht weitergegeben werden. Solltet ihr von einem Mediziner aufgehoben werden, so habt ihr mit dem Medic ein RP zu führen. Abhängig von den Verletzungen darf der Verletzte nicht so tun als wäre nichts gewesen.",
        "FailRP: Als FailRP zählen alle unrealistischen Aktionen sowie Verhalten. (Beispiel: Mit 200 gegen einen Baum fahren,aussteigen und wegrennen) Sich aus RP Situationen zu befreien, in dem gesagt wird: “ich bin im Kopf”, ist verboten. Im gefesselten Zustand sind unrealistische Aktionen (z.b funken) Fail. In RP Situationen mit dem Team oder mit einem Support zu drohen, ist untersagt.",
        "Metagaming: Das verwenden von OOC Informationen welche ihr von z.b Twitch, Discord, Teamspeak etc. bekommt dürfen nicht im Spiel verwendet werden.\n" +
        "Ausnahmen für Metagaming gelten bei folgendem Punkt:\n" +
        "-Organisatorische Dokumente für Fraktionen (Google Docs, VPS/AES)\n",
        "PowerRP: Unter PowerRP versteht man jegliche Handlungen die einen anderen Spieler in eine Richtung drängen in der er sich nicht verteidigen kann.\n" +
        "z.B Nach der Tötung eines Polizisten darf nach wiederbelebung der Polizist nicht gelootet werden, da er sich 10 Minuten lang nicht dagegen wehren kann. Jedoch darf er weiterhin als Geisel genutzt werden nach wiederbelebung.",
        "Streamen: Das Streamen ist ohne Genehmigung nicht erlaubt. Diese könnt ihr euch im Support abholen. Solltet ihr in den Support gehen oder gerufen werden, so muss der Stream für die Supportzeit gemutet werden. (stöpseln)\n" +
        "Das Streamen muss im Discord angekündigt werden. Nutze dazu den “Streams” Channel.",
        "Combat Logging / RP Flucht \n" +
        "Das Ausloggen bei laufender RP-Situation um diesen zu entkommen wird nicht geduldet. Das Reloggen nach dem Tod wird als Combat Logging bezeichnet und ist verboten!\n",
        "Eine Corona Infektion oder eine Pandemie vortäuschen/ankündigen ist strengstens Verboten!",
        "Gruppierungen ist es erlaubt jedes Fahrzeug zu nutzen solange sie privat unterwegs sind. In Angelegenheiten der Gruppierung dürfen ausschließlich Fahrzeuge der Gruppierung verwendet werden. Bei Aggressiven Handlungen sind stets Fraktions Fahrzeuge zu nutzen in einer passiv aggressiven Handlung (Mitglied der Fraktion wird überfallen) so ist es gestattet, mit seinem derzeitigen Fahrzeug zu unterstützen.",
        "Falls man AFK geht sprich in den Kopf hat man sich im Teamspeak zu stummen und die Hände nach oben zu nehmen. (F10)",
        "Für Supportfälle spricht man ingame davon eine Suppe essen zu gehen.",
        "Das Umgehen der Regeln oder Ausnutzen von Lücken im Regelwerk ist verboten! ( Wir bitten Lücken im Regelwerk im Support zu melden ).",
    ]
  },
  {
    number: 9,
    topic: "Allgemine Verbote",
    subrules: [
      "Das erfinden von nicht existenten Gegenständen, Personen oder Eigenschaften zum verschaffen eines eigenen Vorteils ist Power RP und ist Untersagt.",
        "RDM / VDM ist verboten, es muss aber nicht zwingend Verletzung oder Tod zur Folge haben, um als RDM / VDM gewertet zu werden.",
        "Es ist nicht erlaubt durch Bedrohungen direkt oder indirekt, jemanden zur Konto-Auszahlung zu zwingen und dieses Geld einzusacken.",
        "Offroad fahren, mit nicht geländetauglichen Fahrzeugen, ist Fail RP. Geländereifen machen ein Fahrzeug nicht geländetauglich!",
        "Das ausrauben von Spielern an Geldautomaten ist verboten!",
        "Das zerstören oder stören von RP Situationen ist verboten!",
        "RP Flucht ist verboten!",
        "Einer Gruppierung dürfen \"aktuell\" nicht mehr als 5-10 Leute beitreten.",
        "Das allgemeine Baiten von Fraktionen ist verboten. Sprich vor dem PD oder eines Fraktionsanwesen Stress zu machen das die andere Fraktion gezwungen ist nachzuschauen was los ist.\n" +
        "Darin sind beinhaltet vor dem PD oder Fraktionsanwesen die Reifen durchdrehen zu lassen, zu schiessen oder vandalismus zu betreiben.",
        "Allgemeiner Vandalismus ohne RP Hintergrund ist verboten. Sprich einfach so ein Auto anzünden oder demolieren ist verboten.",
        "Es ist verboten sich aus einem Kopflosen Polizeiauto eine Schrotflinte zu holen",
    ]
  },
  {
    number: 10,
    topic: "OOC / IC",
    subrules: [
      "Sobald man den Server/Stadt betritt hat man in seinem Charakter zu bleiben.\n" +
      "“OOC sprich, Privat Gespräche kann man auch IC (In Charakter) führen und RP Technisch ausspielen”",
        "Falls Probleme bestehen die der Spieler klären muss so stehen ihm die Support Kanäle im Teamspeak zur Verfügung, oder die Ticket Funktion im Discord.",
    ]
  },
  {
    number: 11,
    topic: "Safezone / Grüne Wiese",
    subrules: [
      "In einer Safezone darf keine Straftat verübt werden.",
        "Der Spawnbereich (Jobcenter) ist eine bedingungslose Safezone im regulären Spielbetrieb.",
        "Bankautomaten, Kleiderläden, Würfel Park, Bennys \n" +
        "und das Krankenhaus sind eine Safezone.\n",
        "Während eines Banküberfalls wird die betroffene Safezone an den betroffen Geldautomaten außer Kraft gesetzt.",
        "Wird eine RP Situation in eine Safezone gebracht, hebt sich für die Zeit des RP´s der beteiligten die Safezone auf! Ausgenommen davon ist das Krankenhaus.",
    ]
  },
  {
    number: 12,
    topic: "Account / Erste Schritte",
    subrules: [
      ""
    ]
  },
  {
    number: 13,
    topic: "Account / Erste Schritte",
    subrules: [
      ""
    ]
  },
  {
    number: 14,
    topic: "Account / Erste Schritte",
    subrules: [
      ""
    ]
  },
  {
    number: 15,
    topic: "Account / Erste Schritte",
    subrules: [
      ""
    ]
  },
  {
    number: 16,
    topic: "Account / Erste Schritte",
    subrules: [
      ""
    ]
  },
  {
    number: 17,
    topic: "Account / Erste Schritte",
    subrules: [
      ""
    ]
  },
  {
    number: 18,
    topic: "Account / Erste Schritte",
    subrules: [
      ""
    ]
  },
  {
    number: 19,
    topic: "Account / Erste Schritte",
    subrules: [
      ""
    ]
  },
  {
    number: 20,
    topic: "Account / Erste Schritte",
    subrules: [
      ""
    ]
  },
  {
    number: 21,
    topic: "Account / Erste Schritte",
    subrules: [
      ""
    ]
  },
  {
    number: 22,
    topic: "Account / Erste Schritte",
    subrules: [
      ""
    ]
  },
  {
    number: 23,
    topic: "Account / Erste Schritte",
    subrules: [
      ""
    ]
  },
]




export default function WikiRegeln() {
  return(
      <WikiEntry>
        <SectionHeading text="Regeln" />
        <p>Der Spass steht bei uns an erster Stelle.</p>
        <p>Deswegen gibt es auch Regeln die zu beachten sind.</p>
        <p>Lies dir das Regelwerk gut durch bevor du auf den Server kommst.</p>

        {ruleData.map(({number,topic, subrules}) =>
          <div className={styles["rule"]}>
            <h3>§{number} {topic}</h3>
            <ul>
              {subrules.map((text, index) =>
                    <SubRule number={number + "." + (index + 1) +" "}>
                      {text}
                    </SubRule>
                )
              }
            </ul>
          </div>)
        }

      </WikiEntry>
  )
}