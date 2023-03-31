import { Button } from "@mui/material";
import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
interface IButtonProps {
  variants?: string;
  link?: string;
  text?: string;
  icon?: any;
  widthStyle?: string;
  paddingStyle?: string;
  buttonColor?: string;
  color?: string;
  disabled?: boolean;
  onClick?: () => void;
  fontSize?: string;
}
const ButtonForm = ({
  variants,
  link,
  text,
  icon,
  widthStyle = "80%",
  paddingStyle = "5px 20px",
  buttonColor,
  color = "white",
  disabled,
  fontSize,
  onClick,
}: IButtonProps) => {
  const theme = useContext(ThemeContext);
  const ButtonStyle: React.CSSProperties = {
    padding: paddingStyle,
    width: widthStyle,
    // backgroundColor: buttonColor
    color,
    fontSize,
    textTransform: "none",
  };
  return (
    <Button
      disabled={disabled && disabled}
      variant={variants ? "text" : "contained"}
      href={link && link}
      type="submit"
      style={ButtonStyle}
      onClick={onClick}
      startIcon={icon}
      sx={{
        backgroundColor: buttonColor || theme.color.subColor,
        "&:hover": { backgroundColor: theme.color.mainColor },
        // border: 1,
        // borderColor: theme.color.subColor,
        borderRadius: "30px",
        // "& .Mui-disabled": {
        //   backgroundColor: "grey",
        // },
      }}
    >
      {text}
    </Button>
  );
};

export default ButtonForm;
