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
    padding: ${({ theme }) => `${theme.spacing.XL} ${theme.spacing["2XL"]}`};
  
`;

export const Info = styled.div`
  width: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: ${breakpoints.tablet}) {
    width: 32.5%;
  }
`;

export const WrapperImage = styled.div`
  width: 250px;
  height: 58px;

  img {
    width: 100%;
    height: 100%;
  }

  @media (min-width: ${breakpoints.tablet}) {
    width: 210px;
    height: 49px;
  }

  @media (min-width: ${breakpoints.laptop}) {
    width: 250px;
    height: 58px;
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
  padding-bottom: ${({ theme }) => theme.spacing.M};
`;

export const Address = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.outfit};
  font-size: ${({ theme }) => theme.typography.outfit.S};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  white-space: pre-line;
`;

export const WrapperIcons = styled.div`
  display: flex;
  flex-direction: row;

  & > *:nth-child(2) {
    margin: 0 ${({ theme }) => theme.spacing.XS};
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
  margin-bottom: ${({ theme }) => theme.spacing["2XS"]};
`;

export const Menu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
  padding: ${({ theme }) => theme.spacing.XL} 0;

  @media (min-width: ${breakpoints.tablet}) {
    align-items: center;
    justify-content: flex-start;
    width: 35%;
    padding: 0;
  }
`;

export const List = styled.ul`
  text-align: left;
  padding: 0 ${({ theme }) => theme.spacing.S};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const ListItem = styled.li`
  font-family: ${({ theme }) => theme.fontFamily.outfit};
  font-size: ${({ theme }) => theme.typography.outfit.M};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  margin-bottom: ${({ theme }) => theme.spacing["2XS"]};
`;

export const ContactUs = styled.div`
  width: 100%;
  align-items: flex-end;
  text-align: left;

  @media (min-width: ${breakpoints.tablet}) {
    width: 32.5%;
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spacing["2XS"]};
`;

export const Label = styled.label<{ error?: boolean }>`
  font-family: ${({ theme }) => theme.fontFamily.outfit};
  font-size: ${({ theme }) => theme.typography.outfit.S};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme, error }) =>
    error ? theme.colors.primary[400] : theme.colors.grayscale[600]};
  margin-bottom: ${({ theme }) => theme.spacing["3XS"]};
`;

export const Input = styled.input<{ error?: boolean }>`
  width: 100%;
  padding: 8px;
  border: 1px solid
    ${({ error, theme }) =>
      error ? theme.colors.primary[400] : theme.colors.grayscale[300]};
  border-radius: 4px;

  &::placeholder {
    font-family: ${({ theme }) => theme.fontFamily.outfit};
    font-size: ${({ theme }) => theme.typography.outfit.M};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    color: ${({ theme }) => theme.colors.grayscale[300]};
  }
`;

export const Textarea = styled.textarea<{ error?: boolean }>`
  width: 100%;
  height: 120px;
  padding: 8px;
  border: 1px solid
    ${({ error, theme }) =>
      error ? theme.colors.primary[400] : theme.colors.grayscale[300]};
  border-radius: 4px;
  resize: vertical;

  &::placeholder {
    font-family: ${({ theme }) => theme.fontFamily.outfit};
    font-size: ${({ theme }) => theme.typography.outfit.M};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    color: ${({ theme }) => theme.colors.grayscale[300]};
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ErrorMessage = styled.p<{ error: boolean }>`
  margin-top: ${({ theme }) => theme.spacing["3XS"]};
  font-family: ${({ theme }) => theme.fontFamily.outfit};
  font-size: ${({ theme }) => theme.typography.outfit.XS};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.primary[400]};
  visibility: ${({ error }) => (error ? "visible" : "hidden")};
`;

export const MaxLengthNotice = styled.span`
  margin-top: ${({ theme }) => theme.spacing["3XS"]};
  font-family: ${({ theme }) => theme.fontFamily.outfit};
  font-size: ${({ theme }) => theme.typography.outfit.XS};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.grayscale[600]};
`;
