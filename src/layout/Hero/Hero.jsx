import React from 'react';

import styles from './Hero.module.scss';
import heroImg from '../../assets/images/hero_bg.jpg';
import Star from "../../components/Star/Star";
import Button from "../../components/Button/Button";
import heroVideo from "../../assets/video/hero_video.mp4";


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
          <Button type={'primary'} customStyle={"marginTopMedium"}>
            Join us
          </Button>
        </div>
        <div className={styles["overlay"]} />
        <div className={styles["video_container"]}>
          <video height="100%" muted loop autoPlay>
            <source src={heroVideo} type="video/mp4" />
            Video wird nicht unterstützt
          </video>
        </div>
      </div>
  )
}