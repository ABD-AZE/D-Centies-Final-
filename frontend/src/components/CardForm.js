import styles from "./CardForm.module.css";

const CardForm = ({ homeAboutContactUsDisconn }) => {
  return (
    <div className={styles.image}>
      <img className={styles.yellowBgIcon} alt="" src="/yellowbg.svg" />
      <img className={styles.imageIcon} alt="" src="/image1@2x.png" />
      <div className={styles.homeAboutContact}>{homeAboutContactUsDisconn}</div>
    </div>
  );
};

export default CardForm;
