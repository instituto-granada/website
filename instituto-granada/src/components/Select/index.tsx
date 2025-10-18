import { ReactElement, useState } from "react";

import { SelectProps as Props } from "./type";
import { Container, ErrorMessage, Label, SelectStyled } from "./styles";

const Select = ({
  errorMessage,
  label,
  options,
  placeholder,
  ...props
}: Props): ReactElement => {
  const [value, setValue] = useState("");
  const error = !!errorMessage;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };

  return (
    <Container>
      <Label error={error}>{label}</Label>
      <SelectStyled
        error={error}
        onChange={handleChange}
        value={value}
        {...props}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </SelectStyled>
      <ErrorMessage error={error}>{errorMessage}</ErrorMessage>
    </Container>
  );
};

export default Select;
