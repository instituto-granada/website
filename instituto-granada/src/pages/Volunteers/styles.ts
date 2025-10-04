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

export const ContactUsSectionTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.sora.M};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight["1_1x"]};
  color: ${({ theme }) => theme.colors.extra.orange};
  text-align: center;
  text-transform: uppercase;
  margin-bottom: ${({ theme }) => theme.spacing.XS};
`;

export const ContactUsSectionSubtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.sora.XXS};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: ${({ theme }) => theme.lineHeight["1_1x"]};
  color: ${({ theme }) => theme.colors.extra.white};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.M};
`;

export const ContactUs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondary[700]};
  padding: ${({ theme }) => theme.spacing.S};
  @media (min-width: ${breakpoints.tablet}) {
    padding: ${({ theme }) => `${theme.spacing.S} ${theme.spacing.XL}`};
  }
`;

export const FormStyled = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${breakpoints.tablet}) {
    width: 40%;
  }

  & > * {
    width: 100%;
  }
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
    error ? theme.colors.primary[400] : theme.colors.extra.white};
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

export const WrapperButton = styled.div`
  width: 208px;
  margin-top: ${({ theme }) => theme.spacing.S};
`;
