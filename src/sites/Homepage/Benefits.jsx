import React from "react";

import styles from "./Homepage.module.scss"
import Section from "../../layout/Section/Section";
import Content from "../../layout/Content/Content";
import SectionHeading from "../../components/SectionHeading/SectionHeading";

const Card = () => {
  return(
      <div className={styles["benefits_card"]}>
      </div>
  )
}

export default function Benefits() {
  return(
      <Section type="dark">
        <Content>
          <SectionHeading text="Das bieten wir" />
          <Card />
        </Content>
      </Section>
  )
}