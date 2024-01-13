import FormContainer1 from "./FormContainer1";
import styles from "../Webpage3.module.css";

import React from "react";

export default function Webpage3() {
  return (
    <div className={styles.webpage3}>
      <div className={styles.aboutMe}>
        <b className={styles.title}>Contact Us</b>
        <div className={styles.text}>Information</div>
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
        navLinks="Home       About"
        navigationLinks="Contact us      Connect wallet"
        showNav
        rectangleDivTop="46px"
        rectangleDivRight="30px"
        rectangleDivLeft="-30px"
        propWhiteSpace1="pre-wrap"
        propWhiteSpace2="pre-wrap"
      />
    </div>
  );
}
