import styled from "styled-components";

import { breakpoints } from "../../styles/breakpoints";

export const Container = styled.div`
  width: 288px;
  height: auto;
  min-height: 288px;
  display: flex;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.extra.white};
  padding: ${({ theme }) => theme.spacing.S};
  border-radius: 32px;
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
`;

export const WrapperImage = styled.div`
  width: 100%;
  min-height: 194px;
  border-radius: 32px;
  object-fit: cover;
  flex-shrink: 1;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const WrapperText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1<{ uppercase: boolean }>`
  font-size: ${({ theme }) => theme.typography.sora.S};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight["1_1x"]};
  color: ${({ theme }) => theme.colors.extra.black};
  text-align: left;
  margin-bottom: ${({ theme }) => theme.spacing.S};
  text-transform: ${({ uppercase }) => (uppercase ? "uppercase" : "none")};
`;

export const Body = styled.p`
  font-size: ${({ theme }) => theme.typography.outfit.XS};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: ${({ theme }) => theme.lineHeight["1_5x"]};
  color: ${({ theme }) => theme.colors.grayscale[700]};
  text-align: left;
`;
