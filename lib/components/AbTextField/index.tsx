import { GlobalStyle } from "../../styles/global";
import {
  AbTextFieldInput,
  AbTextFieldLabel,
  AbTextFieldWrapper,
} from "./style";
import { AbTextFieldProps } from "./types";

const AbTextField = ({
  type,
  placeholder,
  label,
  id,
  name,
  onChange,
}: AbTextFieldProps) => {
  return (
    <AbTextFieldWrapper>
      <GlobalStyle />
      <AbTextFieldLabel htmlFor={id}>{label}</AbTextFieldLabel>
      <AbTextFieldInput
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={(event) => {
          if (onChange) {
            onChange(event.target.value);
          }
        }}
      />
    </AbTextFieldWrapper>
  );
};

export default AbTextField;
