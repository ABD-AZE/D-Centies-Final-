import { useMemo } from "react";
import TabActive from "./TabActive";
import styles from "./FormContainer1.module.css";

const FormContainer1 = ({
  navLinks,
  navigationLinks,
  showNav,
  rectangleDivTop,
  rectangleDivRight,
  rectangleDivLeft,
  propWhiteSpace,
  propWhiteSpace1,
  propWhiteSpace2,
}) => {
  const header1Style = useMemo(() => {
    return {
      top: rectangleDivTop,
      right: rectangleDivRight,
      left: rectangleDivLeft,
    };
  }, [rectangleDivTop, rectangleDivRight, rectangleDivLeft]);

  const sobreStyle = useMemo(() => {
    return {
      whiteSpace: propWhiteSpace,
    };
  }, [propWhiteSpace]);

  const sobre1Style = useMemo(() => {
    return {
      whiteSpace: propWhiteSpace1,
    };
  }, [propWhiteSpace1]);

  const sobre2Style = useMemo(() => {
    return {
      whiteSpace: propWhiteSpace2,
    };
  }, [propWhiteSpace2]);

  return (
    <div className={styles.header} style={header1Style}>
      <b className={styles.dCenties}>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>D-Centies</p>
      </b>
      {showNav && (
        <div className={styles.nav}>
          <TabActive sobreWhiteSpace="unset" />
          <div className={styles.tabDefault}>
            <div className={styles.sobre} style={sobre1Style}>
              {navLinks}
            </div>
          </div>
          <div className={styles.tabDefault}>
            <div className={styles.sobre} style={sobre2Style}>
              {navigationLinks}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormContainer1;
