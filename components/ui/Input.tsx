import React, { ChangeEvent, useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import TextField from "@mui/material/TextField";
interface InputProps {
  name?: string;
  label?: string;
  onUpdateValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number | Date;
  placeholder?: string;
  type?: inputType;
  size?: "small" | "medium";
}
type inputType =
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";

const Input = ({
  name,
  label,
  onUpdateValue,
  value,
  placeholder,
  type,
  size = "medium",
}: InputProps) => {
  const theme = useContext(ThemeContext);
  return (
    <InputContainer>
      {/* {label && (
        <LabelContainer>
          <Icon />
          <LabelText>{label}</LabelText>
        </LabelContainer>
      )} */}
      <TextInput
        label={label}
        // autoFocus={true}
        name={name}
        type={type}
        onChange={onUpdateValue}
        value={value}
        // placeholder={placeholder}
        size={size}
        sx={{
          "& .MuiInputBase-input ": {
            color: theme.color.textColor,
            // background: "#fafafa",
          },
          "& label": {
            color: theme.color.textColor,
          },
          "& label.Mui-focused": {
            color: theme.color.textColor,
            // background: "#fafafa",
          },
          "& .MuiInput-underline:after": {
            // borderBottomColor: theme.color.subColor,
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              // borderColor: theme.color.subColor,
              backgroundColor: "transparent",
            },
            "&:hover fieldset": {
              // borderColor: theme.color.mainColor,
            },
            "&.Mui-focused fieldset": {
              borderColor: theme.color.subColor,
              backgroundColor: "transparent",
            },
          },
        }}
      ></TextInput>
    </InputContainer>
  );
};

export default Input;
interface InvalidProps {
  isInvalid: boolean;
}
interface IsRowProps {
  isRow: boolean;
}
const InputContainer = styled.div`
  display: flex;
  width: 80%;
  margin-bottom: 15px;
  justify-content: space-between;
`;
const LabelText = styled.div`
  margin: 2px;
`;

const TextInput = styled(TextField)`
  width: 100%;
`;
