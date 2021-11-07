import React from 'react';

import styles from './Hero.module.scss';
import heroImg from '../../assets/images/hero_bg.jpg';
import Star from "../../components/Star/Star";
import Button from "../../components/Button/Button";


const FiveStars = () => {
  return(
    <div className={styles["fivestars"]}><Star /><Star /><Star /><Star /><Star /></div>
  )
}

export default function Hero() {
  return(
      <div className={styles["hero"]}>
        <div className={styles["heading"]}>
          <h1>Five<span>Stars</span></h1>
          <FiveStars />
          <div className={styles["subtext"]}>
            The most wanted Roleplay Server
          </div>
          <Button customStyle={{marginTop:"3rem"}}>
            Join us
          </Button>
        </div>

        <div className={styles["overlay"]} />
        <img src={heroImg} alt={"Polizei Auto"}/>
      </div>
  )
}