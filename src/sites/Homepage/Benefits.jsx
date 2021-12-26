import React from "react";

import styles from "./Homepage.module.scss"
import Section from "../../layout/Section/Section";
import Content from "../../layout/Content/Content";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import  { benefitsData }  from "./homepageTextData";
import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Card = ({ heading, text, icon, color, coloralpha }) => {
  return(
      <div
          style={{"--color-card": color, "--color-card-alpha": coloralpha}}
          className={`${styles["benefits_card"]} marginTopLarge`}
      >
        <div className={`${styles["heading"]} marginBottomSmall`}>
          <FontAwesomeIcon icon={icon} />
          <h3>{heading}</h3>
        </div>
        <p>
          {text}
        </p>
      </div>
  )
}



export default function Benefits() {
  return(
      <Section type="black">
        <Content>
          <div className={styles["benefits"]}>
            <SectionHeading text="Das bieten wir" />
            <div className={`${styles["cards"]} marginTopSmall`}>
              {benefitsData.map((data) => {
                return <Card
                    heading={data.heading}
                    text={data.text}
                    icon={data.icon}
                    color={data.color}
                    coloralpha={data.color + "20"}
                />
              })}
            </div>
          </div>
        </Content>
      </Section>
  )
}