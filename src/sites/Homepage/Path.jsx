import React from "react";

import styles from './Homepage.module.scss';
import Section from "../../layout/Section/Section";
import Content from "../../layout/Content/Content";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import skidmark from "../../assets/images/skidmark.png";
import Text from "../../components/Text/Text";

const Selection = () => {
  return(
      <div className={styles["selection"]}>
        <ul>
          <li>Civil</li>
          <li>Polizei</li>
          <li>Medic</li>
          <li>Medic</li>
        </ul>
      </div>
  )
}

export default function Path() {
  return(
      <Section type='white'>
        <span className={styles["noise"]} />
        <div className={styles["skidmark"]}><img src={skidmark} alt='Reifenspur' /></div>
        <Content>
          <SectionHeading text='Wähle deinen Weg' color={'dark'}/>
          <div className={`${styles["path"]} marginTopLarge`}>

            <Selection />

            <div className={styles["emblem"]}>

            </div>
          </div>
        </Content>
      </Section>
  )
}