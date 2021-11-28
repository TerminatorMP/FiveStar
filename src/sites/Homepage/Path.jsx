import React, {useEffect, useState} from "react";

import { v4 as uuidv4 } from 'uuid';

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
        <ul className="marginBottomSmall">
          {pathData.map((data, index) => {
            return <li
                key={index}
                className={data.path === path ? styles["aktive"]: ''}
                onClick={() => handleSelect(data)}>
              {data.path}
            </li>
          })}
        </ul>
        <p>
          {text}
        </p>
      </div>
  )
}


  return(
      <Section type='white'>
        <span className={styles["noise"]} />
        <div className={styles["skidmark"]}><img src={skidmark} alt='Reifenspur' /></div>
        <Content>
          <SectionHeading text='Wähle deinen Weg' color={'dark'}/>
          <div className={`${styles["path"]} marginTopLarge`}>
            <Selection />

            <div className={styles["emblem"]}>

            </div>
          </div>
        </Content>
      </Section>
  )
}