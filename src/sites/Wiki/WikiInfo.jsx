import React from "react";

import styles from './Wiki.module.scss';
import WikiEntry from "./WikiEntry";
import SectionHeading from "../../components/SectionHeading/SectionHeading";

export default function WikiInfo() {
  return(
      <WikiEntry>
        <SectionHeading text='Das Wiki' />
        <div>
          <p>
            Willkommen im Wiki hier findest du alle wichtigen Information zur Stadt an einem Ort
          </p>
        </div>
      </WikiEntry>
  )
}