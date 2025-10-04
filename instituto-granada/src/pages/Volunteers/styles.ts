import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const PositionsSection = styled.div`
  background-color: ${({ theme }) => theme.colors.extra.white};
  padding: ${({ theme }) => `${theme.spacing.M} ${theme.spacing.S}`};

  @media (min-width: ${breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.XL};
  }
`;

export const Positions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: ${breakpoints.tablet}) {
    justify-content: space-between;
  }
`;

export const PositionsSectionTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.sora.M};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight["1_1x"]};
  color: ${({ theme }) => theme.colors.grayscale[800]};
  text-align: center;
  text-transform: uppercase;
  margin-top: ${({ theme }) => theme.spacing.XL};
  margin-bottom: ${({ theme }) => theme.spacing.XL};

  @media (min-width: ${breakpoints.tablet}) {
    margin-bottom: ${({ theme }) => theme.spacing.XL};
`;
