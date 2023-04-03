import { GlobalStyle } from "../../styles/global";
import { AbTextFieldInput, AbTextFieldLabel } from "./style";
import { AbTextFieldProps } from "./types";

const AbTextField = ({
  type = "text",
  placeholder,
  label,
  id,
  name,
  onChange,
}: AbTextFieldProps) => {
  return (
    <div>
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
    </div>
  );
};

export default AbTextField;
