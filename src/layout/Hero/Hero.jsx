import React, {useCallback} from 'react';

import styles from './Hero.module.scss';
import Star from "../../components/Star/Star";
import Button from "../../components/Button/Button";
import heroVideo from "../../assets/video/hero_video.mp4";
import {useNavigate} from 'react-router-dom';

const FiveStars = () => {
  return(
    <div className={styles["fivestars"]}><Star /><Star /><Star /><Star /><Star /></div>
  )
}


export default function Hero() {
    const navigate = useNavigate();
  return(
      <div className={styles["hero"]}>
        <div className={styles["heading"]}>
          <h1>Five<span>Stars</span></h1>
          <FiveStars />
          <Button onClick={() => {navigate('/anleitung')}}
                  type={'primary'}
                  customStyle={"marginTopMedium"}>
            Join us
          </Button>
        </div>
        <div className={styles["overlay_blur"]} />
        <div className={styles["overlay"]} />
        <div className={styles["video_container"]}>
          <video height="100%" muted loop autoPlay playsInline>
            <source src={heroVideo} type="video/mp4" />
            Video wird nicht unterstützt
          </video>
        </div>
      </div>
  )
}
