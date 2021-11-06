import React from 'react';

import heroImg from '../../assets/images/hero_bg.jpg';
import styles from './Hero.module.scss';

export default function Hero() {
  return(
      <div className={styles["hero"]}>
        <img src={heroImg} alt={"Polizei Auto"}/>
      </div>
  )
}