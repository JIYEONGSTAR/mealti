import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import SquareIcon from "@mui/icons-material/Square";
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <SquareIcon sx={{ color: theme.color.subColor, fontSize: "10px" }} />
          <LabelText isInvalid>{label}</LabelText>
        </div>
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
interface IInvalidProps {
  isInvalid: boolean;
}
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 15px;
  width: 80%;
  margin-bottom: 3px;
`;
const LabelText = styled.div<IInvalidProps>`
  margin: 2px;
`;

const TextInput = styled(TextField)<IInvalidProps>`
  padding: 8px;
  margin-bottom: 15px;
  border-radius: 15px;
  height: 50px;
  font-size: 16px;
  border-color: ${(props) => props.theme.color.backgroundColor};
`;
