import FormContainer from "./FormContainer";
import QuizContainer from "./QuizContainer";
import Header from "./Header";
import ProjectNfo from "./ProjectNfo";
import styles from "../Webpage8.module.css";
import Web3 from "web3";
import axios from 'axios';

import React from "react";

export default function Webpage8() {
  const privatekey= async()=>{
    const web3Instance = new Web3(window.ethereum);
  
    // Get the current accounts
    const accounts = await web3Instance.eth.getAccounts();
  }
  return (
    <div className={styles.webpage8}>
      <FormContainer />
      <QuizContainer text="Active Quizzes" propWhiteSpace="unset" />
      <Header
        sobre2=" "
        headerWidth="100%"
        headerPosition="absolute"
        headerTop="0px"
        headerRight="2px"
        headerLeft="-2px"
      />
      <ProjectNfo
        nameDescription="Quiz Name"
        projectNfoWidth="320px"
        projectNfoHeight="223px"
        projectNfoPosition="absolute"
        projectNfoTop="345px"
        projectNfoLeft="115px"
        frameDivHeight="102.69%"
        frameDivTop="-1.26%"
        frameDivBottom="-1.43%"
        botoSecudrioBorderRadius="unset"
        botoSecudrioBorder="unset"
        botoSecudrioBoxSizing="unset"
        botoSecudrioDisplay="unset"
        botoSecudrioFlexDirection="unset"
        botoSecudrioAlignItems="unset"
        botoSecudrioJustifyContent="unset"
        botoSecudrioPadding="unset"
        botoSecudrioMarginBlockStart="0"
        botoSecudrioMarginBlockEnd="24px"
      />
    </div>
  );
}
