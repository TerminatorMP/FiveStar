import {faTachometerAlt, faShieldAlt, faUser, faThumbsUp, faPaintRoller, faQuestion} from "@fortawesome/free-solid-svg-icons";

import civilImg from "../../assets/images/civil.png";
import lspdImg from "../../assets/images/lspd.png";
import medicImg from "../../assets/images/medic.png";
import gangImg from "../../assets/images/gang.png";

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
      'Roleplay an erster Stelle',
      'Roleplay an erster Stelle',
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
      color: '#0057FF'
    },
    {
      heading: "Aktive Admins",
      text: "Jeden Tag sind unsere Admins fuer eure Wuensche und Probleme online und helfen euch gern",
      icon: faUser,
      color: '#ff0000'
    },
    {
      heading: "Einsteiger freundlich",
      text: "Dank Guides und unserer hilfsbereiten Community wirst du dich schnell zurechtfinden ",
      icon: faThumbsUp,
      color: '#8400EC'
    },
    {
      heading: "Du gestaltest mit",
      text: "Wir unterstuezen euch bei euren Ideen und erweitern den Server nach euren Vorstellungen",
      icon: faPaintRoller,
      color: '#22F000'
    }
  ];

export const pathData = [
  {
    path: "Civil",
    text: "civil",
    image: civilImg,
  },
  {
    path: "Police",
    text: "police",
    image: lspdImg,
  },
  {
    path: "Medic",
    text: "medic",
    image: medicImg,
  },
  {
    path: "Gang",
    text: "gang",
    image: gangImg,
  },
  {
    path: "Deiner",
    text: "Werde kreativ und erfinde deine eigene Rolle oder Job",
    image: faQuestion,
  },
]