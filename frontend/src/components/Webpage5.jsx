import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";
import CardForm from "./CardForm";
import Header from "./Header";
import styles from "../Webpage5.module.css";
import Web3 from "web3";
import axios from "axios";
import {navigate, useNavigate }from "react-router-dom"
const Webpage5 = () => {
  const nav = useNavigate();
  const privatekey = async () => {
    const web3Instance = new Web3(window.ethereum);
    
    // Get the current accounts
    const accounts = await web3Instance.eth.getAccounts();
    return accounts;
  };

  const takeaquiz = async () => {
    try {
      const priv = await privatekey();
      const response = await axios.get(`http://localhost:8000/${priv}`);
      console.log(response);
      // Check the 'data' property to see if the request was successful
      if (response.data) {
        nav("/userquiz");
      } else {
        nav("/activequiz");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error or redirect to an error page
      nav("/error");
    }
  };
  const createquiz = async ()=>{
    
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
              onClick={takeaquiz}
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
