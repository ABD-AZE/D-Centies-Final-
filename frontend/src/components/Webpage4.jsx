import styles from "../Webpage4.module.css";
import Web3 from "web3";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import React from "react";

export default function Webpage4() {
  const navigate = useNavigate();

  const connectToMetamask = async () => {
    try {
      // Check if MetaMask is installed
      if (window.ethereum) {
        // Enable Ethereum provider
        await window.ethereum.enable();
        const web3Instance = new Web3(window.ethereum);

        // Get the current accounts
        const accounts = await web3Instance.eth.getAccounts();
        axios.get(`http://localhost:8000/${accounts}`);
        alert(accounts);

        navigate("/home");
      } else {
        alert("MetaMask not detected! Please install MetaMask extension.");
        console.error(
          "MetaMask not detected! Please install MetaMask extension."
        );
      }
    } catch (error) {
      console.error("Error connecting to MetaMask:", error);
    }
  };
  return (
    <div className={styles.webpage4}>
      <div className={styles.login}>
        <div className={styles.loginChild} />
        <img className={styles.maskGroupIcon} alt="" />
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <div className={styles.loginItem} />
        <div className={styles.logo}>
          <div className={styles.letzConnect}>Letz Connect</div>
        </div>
        <div className={styles.button}>
          <div className={styles.buttonChild} />
          <div className={styles.linkWrapper}>
            <div className={styles.link}>
              <span>{`  `}</span>
              <button
                style={{ backgroundColor: "#F2DB09" }}
                className={styles.link1}
                onClick={connectToMetamask}
              >{`  link `}</button>
            </div>
          </div>
        </div>
        <div className={styles.loginInner} />
        <img
          className={styles.undrawOnlineTestReKyfx2Icon}
          alt=""
          src="/undraw-online-test-re-kyfx-2-1@2x.png"
        />
        <img className={styles.metamask1Icon} alt="" src="/metamask-1@2x.png" />
      </div>
      <img className={styles.logoutIcon} alt="" src="/logout@2x.png" />
    </div>
  );
}
