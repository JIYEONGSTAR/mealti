import React, { ChangeEvent, useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import TextField from "@mui/material/TextField";
interface InputProps {
  name?: string;
  label?: string;
  onUpdateValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  placeholder?: string;
  type?: inputType;
  size?: "small" | "medium";
  isRow?: boolean;
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
  isRow = false,
}: InputProps) => {
  const theme = useContext(ThemeContext);
  return (
    <InputContainer isRow={isRow}>
      {label && (
        <LabelContainer>
          <Icon />
          <LabelText>{label}</LabelText>
        </LabelContainer>
      )}
      <TextInput
        isRow={isRow}
        autoFocus={true}
        name={name}
        type={type}
        onChange={onUpdateValue}
        value={value}
        placeholder={placeholder}
        size={size}
        sx={{
          "& .MuiInputBase-input ": {
            color: theme.color.textColor,
          },
          "& label.Mui-focused": {
            color: theme.color.subColor,
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: theme.color.subColor,
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: theme.color.subColor,
            },
            "&:hover fieldset": {
              borderColor: theme.color.mainColor,
            },
            "&.Mui-focused fieldset": {
              borderColor: theme.color.subColor,
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
const InputContainer = styled.div<IsRowProps>`
  display: flex;
  flex-direction: ${({ isRow }) => (isRow ? "row" : "column")};
  width: 80%;
  margin-bottom: 15px;
  justify-content: space-between;
`;
const LabelText = styled.div`
  margin: 2px;
`;

const TextInput = styled(TextField)<IsRowProps>`
  padding: 8px;
  margin-bottom: 15px;
  border-radius: 35px;
  height: 30px;
  font-size: 16px;
  border-color: ${(props) => props.theme.color.backgroundColor};
  width: ${({ isRow }) => (isRow ? "80%" : "100%")};
`;

const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

const Icon = styled.div`
  width: 7px;
  height: 7px;
  background-color: ${({ theme }) => theme.color.subColor};
`;
