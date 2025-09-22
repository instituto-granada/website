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
`;
export const Title = styled.h1`
  font-family: ${(props) => props.theme.fontFamily.sora};
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.extra.orange};
  text-align: center;
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
  max-width: 300px;
  @media (max-width: 480px) {
    & > button {
      width: 100%;
      max-width: 300px;
    }
  }
`;
