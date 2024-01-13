import styles from "./FormContainer.module.css";

const FormContainer = () => {
  return (
    <div className={styles.image}>
      <img className={styles.yellowBgIcon} alt="" src="/yellowbg.svg" />
      <img className={styles.imageIcon} alt="" src="/image@2x.png" />
      <div className={styles.homeAboutContact}>
        Home About Contact us Disconnect wallet
      </div>
    </div>
  );
};

export default FormContainer;
