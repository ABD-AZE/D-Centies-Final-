import { useMemo } from "react";
import styles from "./TabActive.module.css";

const TabActive = ({ sobre, sobreWhiteSpace }) => {
  const sobreStyle = useMemo(() => {
    return {
      whiteSpace: sobreWhiteSpace,
    };
  }, [sobreWhiteSpace]);

  return (
    <div className={styles.tabActive}>
      <div className={styles.sobre} style={sobreStyle}>
        {sobre}
      </div>
      <div className={styles.tabActiveChild} />
    </div>
  );
};

export default TabActive;
