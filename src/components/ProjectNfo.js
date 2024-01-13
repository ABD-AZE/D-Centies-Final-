import { useMemo } from "react";
import styles from "./ProjectNfo.module.css";

const ProjectNfo = ({
  nameDescription,
  projectDescription,
  projectNfoWidth,
  projectNfoHeight,
  projectNfoPosition,
  projectNfoTop,
  projectNfoLeft,
  frameDivHeight,
  frameDivTop,
  frameDivBottom,
  botoSecudrioBorderRadius,
  botoSecudrioBorder,
  botoSecudrioBoxSizing,
  botoSecudrioDisplay,
  botoSecudrioFlexDirection,
  botoSecudrioAlignItems,
  botoSecudrioJustifyContent,
  botoSecudrioPadding,
  botoSecudrioMarginBlockStart,
  botoSecudrioMarginBlockEnd,
  textPosition,
  textFontSize,
  textLineHeight,
  textFontWeight,
  textFontFamily,
  textColor,
  textTextAlign,
  textDisplay,
}) => {
  const projectNfoStyle = useMemo(() => {
    return {
      width: projectNfoWidth,
      height: projectNfoHeight,
      position: projectNfoPosition,
      top: projectNfoTop,
      left: projectNfoLeft,
    };
  }, [
    projectNfoWidth,
    projectNfoHeight,
    projectNfoPosition,
    projectNfoTop,
    projectNfoLeft,
  ]);

  const frameDivStyle = useMemo(() => {
    return {
      height: frameDivHeight,
      top: frameDivTop,
      bottom: frameDivBottom,
    };
  }, [frameDivHeight, frameDivTop, frameDivBottom]);

  const botoSecudrioStyle = useMemo(() => {
    return {
      borderRadius: botoSecudrioBorderRadius,
      border: botoSecudrioBorder,
      boxSizing: botoSecudrioBoxSizing,
      display: botoSecudrioDisplay,
      flexDirection: botoSecudrioFlexDirection,
      alignItems: botoSecudrioAlignItems,
      justifyContent: botoSecudrioJustifyContent,
      padding: botoSecudrioPadding,
      marginBlockStart: botoSecudrioMarginBlockStart,
      marginBlockEnd: botoSecudrioMarginBlockEnd,
    };
  }, [
    botoSecudrioBorderRadius,
    botoSecudrioBorder,
    botoSecudrioBoxSizing,
    botoSecudrioDisplay,
    botoSecudrioFlexDirection,
    botoSecudrioAlignItems,
    botoSecudrioJustifyContent,
    botoSecudrioPadding,
    botoSecudrioMarginBlockStart,
    botoSecudrioMarginBlockEnd,
  ]);

  const textStyle = useMemo(() => {
    return {
      position: textPosition,
      fontSize: textFontSize,
      lineHeight: textLineHeight,
      fontWeight: textFontWeight,
      fontFamily: textFontFamily,
      color: textColor,
      textAlign: textTextAlign,
      display: textDisplay,
    };
  }, [
    textPosition,
    textFontSize,
    textLineHeight,
    textFontWeight,
    textFontFamily,
    textColor,
    textTextAlign,
    textDisplay,
  ]);

  return (
    <div className={styles.projectNfo} style={projectNfoStyle}>
      <div className={styles.textParent} style={frameDivStyle}>
        <b className={styles.text}>{nameDescription}</b>
        <div className={styles.text1}>{projectDescription}</div>
        <div className={styles.botoSecudrio} style={botoSecudrioStyle}>
          <div className={styles.text2} style={textStyle}>
            View Project
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectNfo;
