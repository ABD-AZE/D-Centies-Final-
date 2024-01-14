import { useMemo } from "react";
import styles from "./ButtonPrimary.module.css";

const ButtonPrimary = ({
  text,
  buttonPrimaryWidth,
  buttonPrimaryHeight,
  textFontSize,
  textWhiteSpace,
  onClick
}) => {
  const buttonPrimaryStyle = useMemo(() => {
    return {
      width: buttonPrimaryWidth,
      height: buttonPrimaryHeight,
    };
  }, [buttonPrimaryWidth, buttonPrimaryHeight]);

  const text1Style = useMemo(() => {
    return {
      fontSize: textFontSize,
      whiteSpace: textWhiteSpace,
    };
  }, [textFontSize, textWhiteSpace]);

  return (
    <div className={styles.buttonPrimary} style={buttonPrimaryStyle} onClick={onClick}>
      <div className={styles.text} style={text1Style}>
        {text}
      </div>
    </div>
  );
};

export default ButtonPrimary;
