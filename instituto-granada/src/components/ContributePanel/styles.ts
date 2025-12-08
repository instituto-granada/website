import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 5%;
  background-color: ${(props) => props.theme.colors.secondary[700]};

  @media(min-width: ${(props) => props.theme.breakpoints.laptop}) {
    padding: ${(props) => props.theme.spacing.XL} ${(props) => props.theme.spacing["4XL"]};
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: ${(props) => props.theme.spacing["2XS"]};
`;

export const Title = styled.h1`
  font-family: ${(props) => props.theme.fontFamily.sora};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  line-height: ${(props) => props.theme.lineHeight["1_1x"]};
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.extra.orange};
  text-align: center;

  @media(min-width: ${(props) => props.theme.breakpoints.laptop}) {
    font-size: ${(props) => props.theme.typography.sora.M};
  }
`;
export const Subtitle = styled.p`
  font-family: ${(props) => props.theme.fontFamily.sora};
  font-size: 1rem;
  color: ${(props) => props.theme.colors.extra.white};
  margin-bottom: 32px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 343px;
`;
