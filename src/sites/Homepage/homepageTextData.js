import {faTachometerAlt, faShieldAlt, faUser, faThumbsUp, faPaintRoller, faQuestion} from "@fortawesome/free-solid-svg-icons";

import civilImg from "../../assets/images/path_2.jpeg";
import lspdImg from "../../assets/images/path_3.jpeg";
import medicImg from "../../assets/images/path_medic.jpeg";
import gangImg from "../../assets/images/path_4.jpeg";
import deinerImg from "../../assets/images/path_1.jpeg";

export const homepageTextData = {
  welcome: {
    heading: 'Willkommen',
    text: 'Schön das du zu uns gefunden hast. ' +
        'Es ist ziemlich einfach auf unserem Server spielen zu können. ' +
        'Join unserem Teamspeak-Server komm in den Whitelist-Warteraum Dort werden wir in einem entspannten Gespräch dein Wissen zum Thema RP und unseren Serverregeln abfragen. ' +
        'Wenn du das verfahren erfolgreich bestanden hast kann es auch schon los gehen. Du betrittst unseren Server und gestaltest deine Gesichte. Wir freuen uns auf dich!'
  },
  unique: {
    heading: 'Was uns Ausmacht',
    text: [
      'Roleplay an erster Stelle',
      'Leidenschaft fuer Autos und Rennen',
      'Chillige Leute',
    ]
  }
}

export const benefitsData = [
    {
      heading: "Schneller Server",
      text: "Beste Performance von Server und Scripten garantiert ein reibungloses Spielerlebnis ",
      icon: faTachometerAlt,
      color: '#ff6200'
    },
    {
      heading: "Anti Cheat",
      text: "Niemand mag Hacker, deshalb bekaempfen wir sie mit voller Haerte",
      icon: faShieldAlt,
      color: '#ff6200'
    },
    {
      heading: "Aktive Admins",
      text: "Jeden Tag sind unsere Admins fuer eure Wuensche und Probleme online und helfen euch gern",
      icon: faUser,
      color: '#ff6200'
    },
    {
      heading: "Einsteiger freundlich",
      text: "Dank Guides und unserer hilfsbereiten Community wirst du dich schnell zurechtfinden ",
      icon: faThumbsUp,
      color: '#ff6200'
    },
    {
      heading: "Du gestaltest mit",
      text: "Wir unterstuezen euch bei euren Ideen und erweitern den Server nach euren Vorstellungen",
      icon: faPaintRoller,
      color: '#ff6200'
    }
  ];

export const pathData = [
  {
    path: "Zivilist",
    text: `Mache worauf du Lust hast, keine Verpflichtungen und absolute Freiheit. Knüpfe Kontakte, erkunde und probiere aus. Finde deinen Weg`,
    image: civilImg,
  },
  {
    path: "Polizei",
    text: `Lege den Kriminellen das Handwerk und sorge in der Stadt fuer Recht und Ordnung. Rette Geiseln in Not. Wilde Verfolgungsjagten und das alltaegliche Chaos.`,
    image: lspdImg,
  },
  {
    path: "Medic",
    text: "Du hilfst gernen Leuten? Dann sei die letzte Rettung in der Not oder der erste Ansprechpartner rund um Gesundheit.",
    image: medicImg,
  },
  {
    path: "Gangster",
    text: `Es gibt natürlich auch aktive Gangs die immer Nachwuchs suchen und für eine Bewerbung immer ein offenes Ohr haben. 
    Hier kannst du dann deine kriminelle Seite ausleben.
    Ob du einen Zivilisten als Geisel nimmst und Geld vom Staat erpresst oder gleich einen kleinen Laden an der Ecke ausraubst und anschließend dir eine Verfolgungsjagt mit der Polizei lieferst. 
    Mit einem guten Plan gelingen dann auch größere Sachen wie Juwelenraub oder du holst dir ein Stück vom Kuchen bei einen riesigen Staatsbankraub.
    Am Ende kann der absolute Reichtum warten...`,
    image: gangImg,
  },
  {
    path: "Deiner",
    text: `Dies ist recht selten in der deutschen GTA 5 RP Community aber wir können es anbieten!
    Du kannst bei uns auf dem Server tatsächlich deinen ganz eigenen Shop betreiben. 
    Dein eigener Laden mit voll funktionierenden Job-Menü und Aktivitäten (farmen, craften, verkaufen).
    Du bestimmst sogar welches Produkt du anbieten möchtest, wie es hergestellt werden soll und wie dein Abverkauf läuft. 
    Lass dir ein gutes Konzept einfallen und werde damit Erfolgreich.`,
    image: deinerImg,
  },
]