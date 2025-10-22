import styled from "styled-components";
// import { breakpoints } from "../../styles/breakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spacing["2XS"]};
`;

export const Label = styled.label<{ error?: boolean }>`
  font-family: ${({ theme }) => theme.fontFamily.outfit};
  font-size: ${({ theme }) => theme.typography.outfit.S};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme, error }) =>
    error ? theme.colors.primary[400] : theme.colors.extra.white};
  margin-bottom: ${({ theme }) => theme.spacing["3XS"]};

  &::after {
    content: "*";
    color: ${({ theme }) => theme.colors.primary[400]};
  }
`;

export const SelectStyled = styled.select<{ error?: boolean }>`
  width: 100%;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid
    ${({ theme, error }) =>
      error ? theme.colors.primary[400] : theme.colors.primary[200]};
  background-color: ${({ theme }) => theme.colors.extra.white};
  color: ${({ theme }) => theme.colors.extra.white};
  font-family: ${({ theme }) => theme.fontFamily.outfit};
  font-size: ${({ theme }) => theme.typography.outfit.S};

  &:focus {
    outline: none;
    border-color: ${({ theme, error }) =>
      error ? theme.colors.primary[400] : theme.colors.primary[300]};
  }

  option {
    color: ${({ theme }) => theme.colors.extra.black};
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
