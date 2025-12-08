import styled from "styled-components";

import { breakpoints } from "../../styles/breakpoints";

interface HeroContainerProps {
  imageUrl: string;
  isHome?: boolean;
}

export const Container = styled.section<HeroContainerProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: ${(props) => (props.isHome ? "110vh" : "440px")};
  overflow: hidden;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at 90% 50%,
      rgba(0, 0, 0, 0.09) 35%,   /* centro */
      rgba(0, 0, 0, 0.5) 50%, /* transição */
      rgba(0, 0, 0, 0.8) 100% /* bordas escuras */
    );
    z-index: 1;
  }
`;

export const ContentColumn = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  z-index: 2;
  padding: 0 ${({ theme }) => theme.spacing.S};

  @media (min-width: ${breakpoints.tablet}) {
    width: 70%;
    padding: 0 ${({ theme }) => theme.spacing["4XL"]};
  }

  @media (min-width: ${breakpoints.laptop}) {
    width: 60%;
    padding: 0 ${({ theme }) => theme.spacing["4XL"]};
  }
`;

export const Title = styled.h1`
  color: #ffffff;
  font-size: ${({ theme }) => theme.typography.sora.M};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight["1_1x"]};
  font-family: ${({ theme }) => theme.fontFamily.sora};
  margin-bottom: 1rem;
  text-transform: uppercase;
`;

export const HighlightedWord = styled.span`
  color: ${({ theme }) => theme.colors.primary[400]};
`;

export const Text = styled.p`
  color: #f0f0f0;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  line-height: ${({ theme }) => theme.lineHeight["1_1x"]};
  margin-bottom: 2rem;
  max-width: 600px;
  white-space: pre-line;
`;

export const HeroButtonWrapper = styled.div`
  width: 100%;
  max-width: 300px;

  @media (min-width: ${breakpoints.tablet}) {
    max-width: 100%;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;

  @media (min-width: ${breakpoints.tablet}) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;

    & > button {
      width: 100%;
      max-width: 300px;
    }
  }
`;

export const ButtonAndCaptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${({ theme }) => theme.spacing["2XS"]};
`;

export const Caption = styled.p`
  width: 100%;
  color: ${({ theme }) => theme.colors.extra.white};
  font-size: ${({ theme }) => theme.typography.outfit.M};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: ${({ theme }) => theme.lineHeight["1_5x"]};
  font-family: ${({ theme }) => theme.fontFamily.outfit};
  text-align: center;
`;
