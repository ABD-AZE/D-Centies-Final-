import React from "react";
import styles from "../Home.module.css";
import Web3 from "web3";

export default function Home() {
  const privatekey= async()=>{
    const web3Instance = new Web3(window.ethereum);
  
    // Get the current accounts
    const accounts = await web3Instance.eth.getAccounts();
  }
  return (
    <div>
      <div className={styles.webpage9}>
        <div className={styles.image}>
          <img className={styles.yellowBgIcon} alt="" src="/yellowbg.svg" />
          <img className={styles.imageIcon} alt="" src="/image@2x.png" />
          <div className={styles.homeAboutContact}>
            Home About Contact us Disconnect wallet
          </div>
        </div>
        <div className={styles.intro}>
          <b className={styles.text}>Take a quiz</b>
          <div className={styles.sectionTitle}>
            <div className={styles.sectionTitleChild} />
          </div>
          <div className={styles.buttonPrimary}>
            <div className={styles.text1}>Your Quizzes</div>
          </div>
        </div>
        <div className={styles.header}>
          <b className={styles.dCenties}>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine}>D-Centies</p>
          </b>
          <div className={styles.nav}>
            <div className={styles.tabDefault}>
              <div className={styles.sobre} />
            </div>
            <div className={styles.tabDefault}>
              <div className={styles.sobre} />
            </div>
          </div>
          <div className={styles.tabDefault2}>
            <div className={styles.sobre}>{` `}</div>
          </div>
          <div className={styles.home} />
        </div>
        <div className={styles.projectNfo}>
          <div className={styles.textParent}>
            <b className={styles.text2}>Quiz Name</b>
            <div className={styles.text3}>
              <p className={styles.pricePool}>{`Price Pool:- `}</p>
              <p className={styles.blankLine}>Entry Fee:-</p>
            </div>
            <div className={styles.botoSecudrio}>
              <div className={styles.text4}>Start Quiz</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
