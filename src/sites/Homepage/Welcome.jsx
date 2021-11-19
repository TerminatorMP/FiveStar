import React from "react";

import styles from './Homepage.module.scss';
import Section from "../../layout/Section/Section";
import Content from "../../layout/Content/Content";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import Text from "../../components/Text/Text";

import { homepageTextData } from './homepageTextData';

export default function Welcome() {
  return(
      <Section type={'dark'}>
        <Content>
          <div className={styles["welcome"]}>
            <SectionHeading text={homepageTextData.welcome.heading} />
            <Text content={homepageTextData.welcome.text} />
          </div>
        </Content>
      </Section>
  )
}