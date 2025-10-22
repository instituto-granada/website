import styled from "styled-components";

import { breakpoints } from "../../styles/breakpoints";

export const AboutUsSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => `${theme.spacing.M} ${theme.spacing.S}`};

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: stretch;
    padding: ${({ theme }) => `${theme.spacing.M} ${theme.spacing["2XL"]}`};
  }
`;

export const ContentBox = styled.div<{ grow?: boolean }>`
  display: flex;
  flex-direction: column;
  flex: ${({ grow }) => (grow ? 1 : "0 0 auto")};
`;

export const WrapperImage = styled.div`
  width: 288px;

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

export const AboutUsSectionTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.sora.M};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight["1_1x"]};
  color: ${({ theme }) => theme.colors.primary[400]};
  text-align: left;
  text-transform: uppercase;
  margin-left: ${({ theme }) => theme.spacing.XL};
  
  @media (min-width: ${breakpoints.tablet}) {
    margin-bottom: ${({ theme }) => theme.spacing.XL};
`;

export const AboutUsSectionMessage = styled.p`
  font-size: ${({ theme }) => theme.typography.outfit.L};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: ${({ theme }) => theme.lineHeight["1_1x"]};
  color: ${({ theme }) => theme.colors.extra.black};
  text-align: left;
  margin-left: ${({ theme }) => theme.spacing.XL};

  @media (min-width: ${breakpoints.tablet}) {
    margin-bottom: ${({ theme }) => theme.spacing.XL};
`;
