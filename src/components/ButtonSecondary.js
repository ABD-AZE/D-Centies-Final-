import styles from "./ButtonSecondary.module.css";

const ButtonSecondary = ({ text }) => {
  return (
    <div className={styles.buttonSecondary}>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default ButtonSecondary;
