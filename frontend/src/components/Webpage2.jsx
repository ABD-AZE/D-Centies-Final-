import FormContainer1 from "./FormContainer1";
import styles from "../Webpage2.module.css";

import React from "react";

export default function Webpage2() {
  return (
    <div className={styles.webpage2}>
      <div className={styles.aboutMe}>
        <b className={styles.title}>About us</b>
        <div className={styles.text}>Introduction</div>
      </div>
      <div className={styles.bg2}>
        <div className={styles.bg2Child} />
        <img
          className={styles.pexelsArtemBeliaikin1832323Icon}
          alt=""
          src="/pexelsartembeliaikin1832323removebgpreview@2x.png"
        />
      </div>
      <FormContainer1
        showNav={false}
        rectangleDivTop="14px"
        rectangleDivRight="-73px"
        rectangleDivLeft="73px"
        propWhiteSpace="pre-wrap"
        propWhiteSpace1="unset"
        propWhiteSpace2="unset"
      />
      <div className={styles.tabDefault}>
        <div className={styles.sobre}>Home About</div>
      </div>
      <div className={styles.tabDefault1}>
        <div className={styles.sobre}>Contact us Connect wallet</div>
      </div>
    </div>
  );
}
