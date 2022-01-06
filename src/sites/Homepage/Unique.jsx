import React from "react";

import { homepageTextData } from "./homepageTextData";

import styles from './Homepage.module.scss';
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import Section from "../../layout/Section/Section";
import Button from "../../components/Button/Button";
import strandImg from "../../assets/images/strand.jpg";


const data = homepageTextData.unique;

export default function Unique() {

  return(
      <Section customStyle={{"padding": "0"}} type="primary">
        <div className={styles["unique"]}>
          <div className={styles["unique_left"]}>
            <div className={`${styles["heading_wrapper"]}`}>
              <SectionHeading text={data.heading} />
            </div>
            <ul>
              {data.text.map((txt, index) => {
                return <li className={"marginBottomSmall"} key={index}>{txt}</li>
              })}
            </ul>
            <Button type={'dark'} customStyle="marginTopSmall">
              Join us
            </Button>
          </div>

          <div className={styles["unique_right"]}>
            <div style={{backgroundImage: `url("${strandImg}")`}} className={styles["strand"]} />
          </div>
        </div>
      </Section>
  )
}