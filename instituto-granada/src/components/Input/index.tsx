import { FC } from "react";
import { Controller, Control } from "react-hook-form";

import { formatPhone } from "../../utils/formatPhone";
import { Field, Label, Input as GenericInput, ErrorMessage } from "./styles";
import { GenericInputProps } from "./types";

const Input: FC<GenericInputProps> = ({
  name,
  label,
  error,
  control,
  labelBlack,
  mask,
  ...rest
}) => {
  const isPhoneMask = mask === "phone";

  return (
    <Field>
      <Label error={!!error} labelBlack={labelBlack}>
        {label}
      </Label>
      {isPhoneMask && control ? (
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <GenericInput
              {...field}
              {...rest}
              error={!!error}
              value={field.value || ""}
              onChange={(e) => field.onChange(formatPhone(e.target.value))}
            />
          )}
        />
      ) : (
        <GenericInput name={name} error={!!error} {...rest} />
      )}

      <ErrorMessage error={!!error}>{error}</ErrorMessage>
    </Field>
  );
};

export default Input;
