import React from "react";

import { homepageTextData } from "./homepageTextData";

import styles from './Homepage.module.scss';
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import Section from "../../layout/Section/Section";
import Button from "../../components/Button/Button";
import strandImg from "../../assets/images/strand.jpg";
import Star from "../../components/Star/Star";
import {useNavigate} from "react-router-dom";


const data = homepageTextData.unique;

export default function Unique() {
  const navigate = useNavigate();

  return(
      <Section customStyle={{"padding": "0"}} type="primary">
        <div className={styles["unique"]}>
          <div className={styles["unique_left"]}>
            <div className={`${styles["heading_wrapper"]}`}>
              <SectionHeading text={data.heading} />
            </div>
            <ul>
              {data.text.map((txt, index) => {
                return(
                    <div style={{display: "flex", alignItems: "center"}} className={"marginBottomSmall"}>
                      <Star color={"primary"} height={"2rem"} width={"2rem"}/>
                      <li key={index}>{txt}</li>
                    </div>
                )
              })}
            </ul>
            <Button onClick={() => {navigate('/anleitung')}} type={'dark'} customStyle="marginTopSmall">
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