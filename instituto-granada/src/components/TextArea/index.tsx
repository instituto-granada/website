import { FC } from "react";
import {
  Field,
  Label,
  ErrorMessage,
  Textarea,
  Row,
  MaxLengthNotice,
} from "./styles";
import { GenericTextAreaProps } from "./types";

const TextArea: FC<GenericTextAreaProps> = ({
  label,
  error,
  maxLengthMessage,
  placeholder,
  ...props
}) => {
  return (
    <Field>
      <Label error={!!error}>{label}</Label>
      <Textarea
        error={!!error}
        maxLength={500}
        placeholder={placeholder}
        {...props}
      />
      <Row>
        <ErrorMessage error={!!error}>{error}</ErrorMessage>
        <MaxLengthNotice>{maxLengthMessage}</MaxLengthNotice>
      </Row>
    </Field>
  );
};

export default TextArea;
