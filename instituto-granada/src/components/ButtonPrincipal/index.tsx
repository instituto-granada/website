import React from "react";
import { StyledButton } from "./styles";
import { ButtonVariant } from "~/types/componentTypes";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
}

export default function ButtonPrincipal({
  children,
  variant = "primary",
  ...rest
}: ButtonProps) {
  return (
    <StyledButton $variant={variant} {...rest}>
      {children}
    </StyledButton>
  );
}
