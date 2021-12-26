import React, {useEffect, useState} from "react";


import styles from './Homepage.module.scss';
import Section from "../../layout/Section/Section";
import Content from "../../layout/Content/Content";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import skidmark from "../../assets/images/skidmark.png";

import {pathData} from "./homepageTextData";


export default function Path() {
  const [path, setPath] = useState('');
  const [text, setText] = useState('');
  const [image, setImage] = useState();

  useEffect(() => {
    handleSelect(pathData[0])
  }, [])

  const handleSelect = (data) => {
    setPath(data.path);
    setText(data.text);
    setImage(data.image);
  }

const Selection = () => {
  return(
    <div className={styles["selection"]}>
        <ul className="marginBottomMedium">
          {pathData.map((data, index) => {
            return <li
                key={index}
                className={data.path === path ? styles["aktive"]: ''}
                onClick={() => handleSelect(data)}>
              {data.path}
            </li>
          })}
        </ul>
      <div className="flex-split">
        <p>{text}</p>
        <div className={styles["emblem"]}>
          <img src={image} className={styles["emblem_img"]} />
        </div>
      </div>
    </div>
  )
}


  return(
      <Section type='blackLight'>
        <Content>
          <SectionHeading text='Wähle deinen Weg' />
          <div className={`${styles["path"]} marginTopLarge`}>
            <Selection />
          </div>
        </Content>
        <img className={styles["skidmark"]} src={skidmark} alt='Reifenspur' />
      </Section>
  )
}