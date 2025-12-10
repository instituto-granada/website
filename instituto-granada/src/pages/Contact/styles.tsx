import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => `${theme.spacing.M} ${theme.spacing.S}`};
  background-color: ${({ theme }) => `${theme.colors.extra.white}`};
  gap: ${({ theme }) => theme.spacing.XL};

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    padding: ${({ theme }) => `${theme.spacing.XL} ${theme.spacing["4XL"]}`};
  }
`;

export const SectionWrapper = styled.div<{ centered?: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${({ centered }) => centered && "center"};

  @media (min-width: ${breakpoints.tablet}) {
    width: 50%;
  }
`;

export const Card = styled.div`
  width: 100%;
  max-width: 440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.M};
  gap: ${({ theme }) => theme.spacing.L};
  background-color: #ffffff;
  border: 1px solid ${({ theme }) => theme.colors.grayscale[300]};
  border-radius: 24px;
  margin-top: auto;
`;

export const Items = styled.div`
  width: 100%;
  max-width: 440px;

  @media (min-width: ${breakpoints.tablet}) {
    padding-bottom: ${({ theme }) => theme.spacing.XL};
  }
`;

export const FormStyled = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily.sora};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.typography.sora.M};
  line-height: ${({ theme }) => theme.lineHeight["1_1x"]};
  color: ${({ theme }) => theme.colors.primary[400]};
  text-transform: uppercase;
  text-align: center;
  padding-bottom: ${({ theme }) => theme.spacing.M};
`;

export const Touchable = styled.a`
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.1s;

  &:active {
    transform: scale(0.95);
  }
`;

export const SocialMediaTitle = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily.outfit};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: ${({ theme }) => theme.typography.outfit.L};
  line-height: ${({ theme }) => theme.lineHeight["1_1x"]};
  color: ${({ theme }) => theme.colors.extra.black};
  text-align: center;
  padding-bottom: ${({ theme }) => theme.spacing.S};
`;

export const IconsRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing.L};
  justify-content: center;
  align-items: center;
  width: 100%;
`;
