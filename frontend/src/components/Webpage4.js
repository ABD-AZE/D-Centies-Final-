import styles from "../Webpage4.module.css";

import React from "react";

export default function Webpage4() {
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
              <span className={styles.link1}>{`  link `}</span>
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
