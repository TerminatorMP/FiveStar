import React from "react";

import styles from './Homepage.module.scss';
import skyline from '../../assets/images/skyline.jpg';
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import Button from "../../components/Button/Button";
import {useNavigate} from "react-router-dom";


export default function Begin() {
    const navigate = useNavigate();
  return(
      <>
        <div className={styles["begin_divider"]} />
        <div className={styles["begin"]}>
          <div style={{backgroundImage: `url("${skyline}")`}} className={styles["begin_img"]} />
          <div className={styles["begin_img_overlay"]} />
          <div className={styles["begin_content"]}>
            <SectionHeading text='Beginne deine Geschichte' />
            <Button onClick={() => navigate("/anleitung")} customStyle="marginTopMedium">HIER</Button>
          </div>
        </div>
      </>
  )
}