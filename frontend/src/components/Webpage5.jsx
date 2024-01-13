import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";
import CardForm from "./CardForm";
import Header from "./Header";
import styles from "../Webpage5.module.css";

const Webpage5 =async () => {

  const takeaquiz=()=>{
    const data=fetch("http://localhost:8000/")
  }
  return (
    <div className={styles.webpage5}>
      <div className={styles.desktop1} />
      <div className={styles.intro}>
        <div className={styles.content}>
          <div />
          <div className={styles.buttons}>
            <ButtonPrimary
              text="Take a Quiz"
              buttonPrimaryWidth="unset"
              buttonPrimaryHeight="unset"
              textFontSize="18px"
              textWhiteSpace="unset"
            />
            <ButtonSecondary text="Create a Quiz" />
          </div>
        </div>
      </div>
      <CardForm homeAboutContactUsDisconn="Home           About         Contact us        Disconnect wallet" />
      <Header
        sobre2=" "
        headerWidth="100%"
        headerPosition="absolute"
        headerTop="15px"
        headerRight="14px"
        headerLeft="-14px"
      />
      <div className={styles.intro1}>
        <div className={styles.content1}>
          <div className={styles.title}>
            <span>Only</span>
            <span className={styles.quizz}>Quizz</span>
          </div>
          <div className={styles.subheadline}>
            <div className={styles.text}>
              <p className={styles.givingQuizzesIs}>
                Giving quizzes is a multifaceted educational strategy that
                serves as a dynamic assessment tool. These assessments,
                available in various formats, such as multiple-choice, short
                answer, or essays.
              </p>
              <p className={styles.blankLine}>&nbsp;</p>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.dollarIcon} alt="" src="/dollar.svg" />
    </div>
  );
};

export default Webpage5;
