import { HTMLInputTypeAttribute } from "react";

export type AbTextFieldProps = {
  label: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  id?: string;
  name?: string;
  onChange?: (value: string) => void;
};
