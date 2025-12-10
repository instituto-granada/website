import styled from "styled-components";

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spacing["2XS"]};
`;

export const Label = styled.label<{ error?: boolean; labelBlack?: boolean }>`
  font-family: ${({ theme }) => theme.fontFamily.outfit};
  font-size: ${({ theme }) => theme.typography.outfit.S};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme, error, labelBlack }) =>
    error
      ? theme.colors.primary[400]
      : labelBlack
        ? theme.colors.grayscale[600]
        : theme.colors.extra.white};
  margin-bottom: ${({ theme }) => theme.spacing["3XS"]};
  &::after {
    content: "*";
    color: ${({ theme }) => theme.colors.primary[400]};
  }
`;

export const Input = styled.input<{ error?: boolean }>`
  width: 100%;
  padding: 8px;
  border: 1px solid
    ${({ error, theme }) =>
      error ? theme.colors.primary[400] : theme.colors.grayscale[300]};
  border-radius: 4px;

  &::placeholder {
    font-family: ${({ theme }) => theme.fontFamily.outfit};
    font-size: ${({ theme }) => theme.typography.outfit.M};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    color: ${({ theme }) => theme.colors.grayscale[300]};
  }
`;

export const ErrorMessage = styled.p<{ error: boolean }>`
  margin-top: ${({ theme }) => theme.spacing["3XS"]};
  font-family: ${({ theme }) => theme.fontFamily.outfit};
  font-size: ${({ theme }) => theme.typography.outfit.XS};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.primary[400]};
  visibility: ${({ error }) => (error ? "visible" : "hidden")};
`;
