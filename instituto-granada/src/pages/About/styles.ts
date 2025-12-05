import styled from "styled-components";

import { breakpoints } from "../../styles/breakpoints";
import {
  ContentBoxProps,
  ParagraphProps,
  TextWrapperProps,
  TitleProps,
} from "./types";

export const AboutUsSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => `${theme.spacing.M} ${theme.spacing.S}`};

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    align-items: stretch;
    padding-top:  ${({ theme }) => `${theme.spacing.XL}`};
    padding-left: ${({ theme }) => `${theme.spacing["4XL"]}`};
    padding-right: ${({ theme }) => `${theme.spacing["4XL"]}`};
  }
`;

export const ContentBox = styled.div<ContentBoxProps>`
  display: flex;
  flex-direction: column;
  flex: ${({ grow }) => (grow ? 1 : "0 0 auto")};
  align-items: ${({ alignCenter }) => alignCenter && "center"};
`;

export const TextWrapper = styled.div<TextWrapperProps>`
  @media (min-width: ${breakpoints.tablet}) {
    margin-left: ${({ withLeftPadding, theme }) =>
      withLeftPadding ? theme.spacing.XL : 0};
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  aspect-ratio: 9 / 16; 
  max-height: 700px;

  position: relative;
  overflow: hidden;
  border-radius: 22px;

  .react-player {
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  @media (min-width: ${breakpoints.mobileL}) {
    width: 392px;
  }

  @media (min-width: ${breakpoints.laptop}) {
    width: 396px;
  }
`;

export const Title = styled.h1<TitleProps>`
  font-size: ${({ theme }) => theme.typography.sora.M};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary[400]};
  text-align: ${({ alignCenter }) => (alignCenter ? "center" : "left")};
  text-transform: uppercase;
  margin-top: ${({ theme }) => theme.spacing.XL};
  margin-bottom: ${({ theme }) => theme.spacing.XL};

  @media (min-width: ${breakpoints.tablet}) {
    margin-top: 0;
  }
`;

export const Paragraph = styled.p<ParagraphProps>`
  font-size: ${({ theme }) => theme.typography.outfit.L};
  font-weight: ${({ bold, theme }) =>
    bold ? theme.fontWeight.bold : theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.extra.black};
  text-indent: ${({ indented }) => (indented ? "2rem" : "0")};
  text-align: left;
  white-space: pre-line;

  margin-bottom: ${({ theme, withMarginBottom }) =>
    withMarginBottom ? theme.spacing.M : "0"};

  @media (min-width: ${breakpoints.tablet}) {
    margin-bottom: ${({ theme, withMarginBottom }) =>
      withMarginBottom ? theme.spacing.XL : "0"};
  }
`;

export const HighlightedParagraph = styled.p`
  font-size: ${({ theme }) => theme.typography.sora.S};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.secondary[700]};
  line-height: ${(props) => props.theme.lineHeight["1_1x"]};
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.XL};
  margin-bottom: ${({ theme }) => theme.spacing.XL};
`;

export const AboutUsButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.XS};
  margin-top: ${({ theme }) => theme.spacing.XL};

  @media (min-width: ${breakpoints.tablet}) {
    margin-top: 0;
    margin-left: ${({ theme }) => theme.spacing.XL};
  }

  @media (min-width: ${breakpoints.laptop}) {
    flex-direction: row;
  }
`;

export const CardsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  justify-items: center;
  background: ${({ theme }) => theme.colors.secondary[700]};
  padding: ${({ theme }) => `${theme.spacing.M} ${theme.spacing.S}`};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    justify-items: center;
    padding: ${({ theme }) => `${theme.spacing.XL} ${theme.spacing["2XL"]}`};
  }
`;
export const OurFutureSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => `${theme.spacing.M} ${theme.spacing.S}`};

  @media (min-width: 768px) {
    padding: ${({ theme }) => `${theme.spacing.XL} ${theme.spacing["2XL"]}`};
  }
`;

export const OurFutureButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 343px;
  }
`;
