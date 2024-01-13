import { useMemo } from "react";
import QuizFormContainer from "./QuizFormContainer";
import ButtonPrimary from "./ButtonPrimary";
import styles from "./QuizContainer.module.css";

const QuizContainer = ({ text, propWhiteSpace }) => {
  const text1Style = useMemo(() => {
    return {
      whiteSpace: propWhiteSpace,
    };
  }, [propWhiteSpace]);

  return (
    <div className={styles.intro}>
      <b className={styles.text}>Take a quiz</b>
      <QuizFormContainer />
      <ButtonPrimary
        text="Your  Quizzes"
        buttonPrimaryWidth="218px"
        buttonPrimaryHeight="55px"
        textFontSize="25px"
        textWhiteSpace="pre-wrap"
      />
    </div>
  );
};

export default QuizContainer;
