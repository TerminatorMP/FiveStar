import React from "react";

import { homepageTextData } from "./homepageTextData";

import styles from './Homepage.module.scss';
import Content from "../../layout/Content/Content";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import Section from "../../layout/Section/Section";
import Button from "../../components/Button/Button";


const data = homepageTextData.unique;

export default function Unique() {

  return(
      <Section type={'primary'}>
        <Content>
          <div className={styles["unique"]}>
            <div className={styles["unique_left"]}>
              <SectionHeading text={data.heading} />
              <ul>
                {data.text.map((txt, index) => {
                  return <li className={"marginTopMedium"} key={index}>{txt}</li>
                })}
              </ul>
              <Button type={'dark'} customStyle={'marginTopLarge'}>
                Join us
              </Button>
            </div>
          </div>
        </Content>
      </Section>
  )
}