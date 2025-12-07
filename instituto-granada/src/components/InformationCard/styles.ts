import styled from "styled-components";

import { breakpoints } from "../../styles/breakpoints";

export const Container = styled.div`
  width: 331px;
  height: auto;
  min-height: 288px;
  display: flex;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.extra.white};
  padding: ${({ theme }) => theme.spacing.S};
  border-radius: 27px;
  box-shadow: ${({ theme }) => theme.shadows.highlight};
  margin-bottom: ${({ theme }) => theme.spacing.XL};

  @media (min-width: ${breakpoints.tablet}) {
    margin-bottom: ${({ theme }) => theme.spacing.XL};
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.S};
`;

export const WrapperImage = styled.div`
  width: 100%;
  height: 194px;
  border-radius: 32px;
  overflow: hidden;
  position: relative;
`;

export const Badge = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing.S};
  left: ${({ theme }) => theme.spacing.S};
  background-color: ${({ theme }) => theme.colors.grayscale[700]};
  padding: ${({ theme }) => `${theme.spacing["3XS"]} ${theme.spacing.XS}`};
  border-radius: 12px;
  font-family: ${(props) => props.theme.fontFamily.outfit};
  font-size: ${({ theme }) => theme.typography.inter.S};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: ${({ theme }) => theme.lineHeight["1_8x"]};
  color: ${({ theme }) => theme.colors.extra.white};
`;

export const WrapperText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1<{ uppercase: boolean }>`
  font-family: ${({ theme }) => theme.fontFamily.sora}; 
  font-size: ${({ theme }) => theme.typography.sora.XS};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight["1_1x"]};
  color: ${({ theme }) => theme.colors.extra.black};
  text-align: left;
  margin-bottom: ${({ theme }) => theme.spacing.S};
  text-transform: ${({ uppercase }) => (uppercase ? "uppercase" : "none")};
`;

export const Body = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.outfit}; 
  font-size: ${({ theme }) => theme.typography.outfit.S};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: ${({ theme }) => theme.lineHeight["1_5x"]};
  color: ${({ theme }) => theme.colors.extra.black};
  text-align: left;
`;
