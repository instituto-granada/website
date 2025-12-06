import styled, { keyframes } from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => `${theme.spacing.M} ${theme.spacing.S}`};
  background-color: ${({ theme }) => `${theme.colors.extra.white}`};
  gap: ${({ theme }) => `${theme.spacing.M}`};

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    align-items: stretch;
    padding: ${({ theme }) =>
      `${theme.spacing["3XL"]} ${theme.spacing["4XL"]}`};
  }
`;

export const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.M};

  @media (min-width: ${breakpoints.tablet}) {
    width: 50%;
  }

  @media (min-width: ${breakpoints.laptop}) {
    width: 40%;
  }
`;

export const ContactCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  padding: ${({ theme }) => `${theme.spacing.M}`};
  gap: ${({ theme }) => `${theme.spacing.L}`};

  background-color: #ffffff;
  border: 1px solid ${({ theme }) => `${theme.colors.grayscale[300]}`};
  border-radius: 24px;
`;

export const FormStyled = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily.sora};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.typography.sora.M};
  color: ${({ theme }) => theme.colors.primary[400]};
  text-transform: uppercase;
  align-text: center;
`;
