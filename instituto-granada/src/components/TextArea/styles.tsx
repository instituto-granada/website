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
  margin-bottom: ${({ theme }) => theme.spacing["3XS"]};

  &::after {
    content: "*";
    color: ${({ theme }) => theme.colors.primary[400]};
  }
`;

export const Textarea = styled.textarea<{ error?: boolean }>`
  width: 100%;
  height: 120px;
  padding: 8px;
  border: 1px solid
    ${({ error, theme }) =>
      error ? theme.colors.primary[400] : theme.colors.grayscale[300]};
  border-radius: 4px;
  resize: vertical;

  &::placeholder {
    font-family: ${({ theme }) => theme.fontFamily.outfit};
    font-size: ${({ theme }) => theme.typography.outfit.M};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    color: ${({ theme }) => theme.colors.grayscale[300]};
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ErrorMessage = styled.p<{ error: boolean }>`
  margin-top: ${({ theme }) => theme.spacing["3XS"]};
  font-family: ${({ theme }) => theme.fontFamily.outfit};
  font-size: ${({ theme }) => theme.typography.outfit.XS};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.primary[400]};
  visibility: ${({ error }) => (error ? "visible" : "hidden")};
`;

export const MaxLengthNotice = styled.span`
  margin-top: ${({ theme }) => theme.spacing["3XS"]};
  font-family: ${({ theme }) => theme.fontFamily.outfit};
  font-size: ${({ theme }) => theme.typography.outfit.XS};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.grayscale[600]};
`;
