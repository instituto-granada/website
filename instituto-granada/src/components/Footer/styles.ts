import styled from "styled-components";
import { Link } from "react-router-dom";

import { breakpoints } from "../../styles/breakpoints";

type ContainerProps = {
  backgroundColor?: string;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-wrap: wrap;
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || theme.colors.grayscale[100]};
  padding: ${({ theme }) => `${theme.spacing.M} ${theme.spacing.S}`};

  @media (min-width: ${breakpoints.tablet}) {
    padding: ${({ theme }) => `${theme.spacing.XL} ${theme.spacing["4XL"]}`};
  
`;

export const Info = styled.div`
  width: 100%;
  overflow: hidden;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: ${breakpoints.tablet}) {
    width: 40%;
  }

  @media (min-width: ${breakpoints.desktop}) {
    width: 46%;
  }
`;

export const WrapperImage = styled.div`
  width: 250px;

  img {
    width: 100%;
  }

  @media (min-width: ${breakpoints.tablet}) {
    width: 190px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    width: 250px;
  }
`;

export const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.M} 0;
`;

export const Description = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.outfit};
  font-size: ${({ theme }) => theme.typography.outfit.M};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ theme }) => theme.colors.grayscale[800]};
  padding-bottom: ${({ theme }) => theme.spacing.M};
`;

export const SocialMedia = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;

  @media (min-width: ${breakpoints.tablet}) {
    width: 30%;
    text-align: center;
    align-items: center;
  }

  @media (min-width: ${breakpoints.laptop}) {
    width: 40%;
    text-align: left;
    align-items: flex-start;
    padding-left: ${({ theme }) => theme.spacing.L};
  }

  @media (min-width: ${breakpoints.desktop}) {
    width: 40%;
    padding-left: ${({ theme }) => theme.spacing["3XL"]};
  }
`;

export const WrapperIcons = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;

  & > *:nth-child(2) {
    margin: 0 ${({ theme }) => theme.spacing.S};
  }
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

export const SectionTitle = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.sora};
  font-size: ${({ theme }) => theme.typography.sora.XS};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.grayscale[800]};
  margin-bottom: ${({ theme }) => theme.spacing["2XS"]};
`;

export const Menu = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
  padding: ${({ theme }) => theme.spacing.XL} 0;

  @media (min-width: ${breakpoints.tablet}) {
    align-items: flex-end;
    justify-content: flex-start;
    width: 30%;
    padding: 0;
  }

  @media (min-width: ${breakpoints.laptop}) {
    width: 20%;
  }

  @media (min-width: ${breakpoints.desktop}) {
    width: 14%;
  }
`;

export const List = styled.ul`
  text-align: left;

  @media (min-width: ${breakpoints.tablet}) {
    padding-right: ${({ theme }) => theme.spacing.L};
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const ListItem = styled.li`
  font-family: ${({ theme }) => theme.fontFamily.outfit};
  font-size: ${({ theme }) => theme.typography.outfit.M};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.grayscale[800]};
  margin-bottom: ${({ theme }) => theme.spacing.S};
  margin-left: ${({ theme }) => theme.spacing.M};

  @media (min-width: ${breakpoints.tablet}) {
    margin-left: 0;
  }
`;
export const Copyright = styled.div`
  background-color: ${({ theme }) => theme.colors.extra.white};
  font-family: ${({ theme }) => theme.fontFamily.outfit};
  font-size: ${({ theme }) => theme.typography.outfit.S};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.extra.black};
  text-align: center;
  padding: ${({ theme }) => theme.spacing.XS};
`;
