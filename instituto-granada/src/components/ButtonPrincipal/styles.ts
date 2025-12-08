import styled, { css } from "styled-components";

import { ButtonVariant } from "~/types/componentTypes";

interface StyledButtonProps {
  $variant: ButtonVariant;
}

const theme = {
  primary: "#007bff",
  primaryHover: "#0056b3",
  secondaryText: "#6c757d",
  secondaryBorder: "#6c757d",
  secondaryHoverBg: "#f8f9fa",
  white: "#ffffff",
};

const variantStyles = {
  primary: css`
    background-color: ${(props) => props.theme.colors.primary[400]};

    color: ${theme.white};
    border: none;

    &:hover {
      background-color: ${(props) => props.theme.colors.primary[500]};
    }
    &:active {
      background-color: ${(props) => props.theme.colors.secondary[600]};
    }
  `,
  secondary: css`
    background-color: ${(props) => props.theme.colors.extra.white};
    color: ${(props) => props.theme.colors.secondary[600]};
    border: 1px solid ${(props) => props.theme.colors.secondary[600]};

    &:hover {
      background-color: ${(props) => props.theme.colors.secondary[100]};
    }
    &:active {
      background-color: ${(props) => props.theme.colors.secondary[200]};
    }
  `,
  ghost: css`
    background-color: transparent;
    color: ${(props) => props.theme.colors.primary[400]};
    border: none;

    &:hover {
    }
    &:active {
      background-color: ${(props) => props.theme.colors.grayscale[200]};
    }
  `,
};

export const StyledButton = styled.button<StyledButtonProps>`
  height: 52px;
  border-radius: 50px;
  width: 100%;
  font-size: clamp(0.75rem, 4vw, 1rem);
  font-family: ${(props) => props.theme.fontFamily.sora};
  font-size: ${(props) => props.theme.typography.sora.XXS};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
  }

  ${({ $variant }) => variantStyles[$variant]}
`;
