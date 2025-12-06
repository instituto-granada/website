import { FC } from "react";
import { Field, Label, Input as GenericInput, ErrorMessage } from "./styles";
import { GenericInputProps } from "./types";

const Input: FC<GenericInputProps> = ({ label, error, ...rest }) => {
  return (
    <Field>
      <Label error={!!error}>{label}</Label>
      <GenericInput error={!!error} {...rest} />
      <ErrorMessage error={!!error}>{error}</ErrorMessage>
    </Field>
  );
};

export default Input;
