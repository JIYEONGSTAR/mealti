import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import TextField from "@mui/material/TextField";
const Input = ({
  name,
  label,
  onUpdateValue,
  value,
  placeholder,
  type,
}: any) => {
  const theme = useContext(ThemeContext);
  return (
    <InputContainer>
      {label && (
        <LabelContainer>
          <Icon />
          <LabelText isInvalid>{label}</LabelText>
        </LabelContainer>
      )}
      <TextInput
        autoFocus={true}
        name={name}
        isInvalid
        type={type}
        onChange={onUpdateValue}
        value={value}
        placeholder={placeholder}
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
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 15px;
  width: 80%;
  margin-bottom: 15px;
`;
const LabelText = styled.div<InvalidProps>`
  margin: 2px;
`;

const TextInput = styled(TextField)<InvalidProps>`
  padding: 8px;
  margin-bottom: 15px;
  border-radius: 15px;
  height: 50px;
  font-size: 16px;
  border-color: ${(props) => props.theme.color.backgroundColor};
`;

const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Icon = styled.div`
  width: 7px;
  height: 7px;
  background-color: ${({ theme }) => theme.color.subColor};
`;
