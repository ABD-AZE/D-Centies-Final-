import styles from "../Webpage10.module.css";
import Web3 from "web3";

import React from "react";

export default function Webpage10() {
  const privatekey= async()=>{
    const web3Instance = new Web3(window.ethereum);
  
    const accounts = await web3Instance.eth.getAccounts();
  }
  return (
    <div className={styles.webpage10}>
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <div className={styles.card} />
      <div className={styles.card1} />
      <div className={styles.card2} />
      <div className={styles.card3} />
      <div className={styles.next}>NEXT</div>
      <div className={styles.q}>
        <span>Q:</span>
        <span className={styles.span}>-</span>
      </div>
      <div className={styles.option1}>Option 1</div>
      <div className={styles.webpage10Child} />
      <div className={styles.card4} />
      <div className={styles.option2}>Option 2</div>
      <div className={styles.card5} />
      <div className={styles.option4}>Option 4</div>
      <div className={styles.card6} />
      <div className={styles.option3}>Option 3</div>
      <div className={styles.card7} />
      <div className={styles.submit}>SUBMIT</div>
    </div>
  );
}
