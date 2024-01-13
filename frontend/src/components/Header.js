import { useMemo } from "react";
import styles from "./Header.module.css";

const Header = ({
  sobre,
  sobre1,
  sobre2,
  home,
  headerWidth,
  headerPosition,
  headerTop,
  headerRight,
  headerLeft,
}) => {
  const headerStyle = useMemo(() => {
    return {
      width: headerWidth,
      position: headerPosition,
      top: headerTop,
      right: headerRight,
      left: headerLeft,
    };
  }, [headerWidth, headerPosition, headerTop, headerRight, headerLeft]);

  return (
    <div className={styles.header} style={headerStyle}>
      <b className={styles.dCenties}>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>D-Centies</p>
      </b>
      <div className={styles.nav}>
        <div className={styles.tabDefault}>
          <div className={styles.sobre}>{sobre}</div>
        </div>
        <div className={styles.tabDefault}>
          <div className={styles.sobre}>{sobre1}</div>
        </div>
      </div>
      <div className={styles.tabDefault2}>
        <div className={styles.sobre}>{sobre2}</div>
      </div>
      <div className={styles.home}>{home}</div>
    </div>
  );
};

export default Header;
