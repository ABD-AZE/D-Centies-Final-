import CardForm from "./CardForm";
import Header from "./Header";
import styles from "../Webpage1.module.css";

import React from "react";

export default function Webpage1() {
  
  return (
    <div className={styles.webpage1}>
      <div className={styles.desktop1} />
      <CardForm homeAboutContactUsDisconn="Home           About         Contact us        Connect wallet" />
      <Header
        sobre2=" "
        headerWidth="100%"
        headerPosition="absolute"
        headerTop="15px"
        headerRight="14px"
        headerLeft="-14px"
      />
      <div className={styles.intro}>
        <div className={styles.content}>
          <div className={styles.title}>
            <span>Only</span>
            <span className={styles.quizz}>Quizz</span>
          </div>
          <div className={styles.subheadline}>
            <div className={styles.text}>
              <p className={styles.givingQuizzesIs}>
                Giving quizzes is a multifaceted educational strategy that
                serves as a dynamic assessment tool. These assessments,
                available in various formats, such as multiple-choice, short
                answer, or essays.
              </p>
              <p className={styles.blankLine}>&nbsp;</p>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.dollarIcon} alt="" src="/dollar.svg" />
    </div>
  );
}
