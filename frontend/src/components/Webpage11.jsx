import styles from "../Webpage11.module.css";
import Web3 from "web3";

import React from "react";

export default function Webpage11() {
  const privatekey= async()=>{
    const web3Instance = new Web3(window.ethereum);
  
    // Get the current accounts
    const accounts = await web3Instance.eth.getAccounts();
  }
  return (
    <div className={styles.webpage11}>
      <div className={styles.home}>{`Home `}</div>
      <div className={styles.about}> About</div>
      <div className={styles.contactUs}>{` Contact us `}</div>
      <div className={styles.webpage11Child} />
      <div className={styles.thankYU}>{`THANK Y    U `}</div>
      <img className={styles.image1Icon} alt="" src="/image-11@2x.png" />
      <div className={styles.weHaveReceived}>
        We have Received your Response . Reach out to you soon.
      </div>
      <div className={styles.subscribe}>{`Subscribe `}</div>
      <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
      <div className={styles.webpage11Item} />
      <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
      <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
      <div className={styles.disconnect}>{`Disconnect `}</div>
    </div>
  );
}
