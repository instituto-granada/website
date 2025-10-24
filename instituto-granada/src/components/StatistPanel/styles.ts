import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 64px 24px; // Padding vertical e horizontal para espaçamento
  box-sizing: border-box; // Garante que o padding não afete a largura total

  background-color: ${(props) => props.theme.colors.secondary[700]};
`;

export const Title = styled.h1`
  font-family: ${(props) => props.theme.fontFamily.sora};
  font-size: ${(props) => props.theme.typography.sora.M};
  font-weight: bold;
  color: ${(props) => props.theme.colors.extra.orange};
  text-align: center;
  margin-bottom: 8px;
`;

export const Subtitle = styled.p`
  font-family: ${(props) => props.theme.fontFamily.sora};
  font-size: ${(props) => props.theme.typography.sora.XXS};

  color: ${(props) => props.theme.colors.extra.white};
  margin-bottom: 48px; // Aumenta o espaço antes das estatísticas
  text-align: center;
`;

export const InformationGroupContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px 16px;
  width: 100%;
  max-width: 1100px;
`;

export const InformationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-basis: 200px;
  flex-grow: 1;
  position: relative;

  @media (min-width: 992px) {
    &:not(:first-child)::before {
      content: "";
      display: block;
      position: absolute;
      left: -8px;

      top: 10%;
      bottom: 10%;

      width: 1px;
      background-color: ${(props) => props.theme.colors.grayscale[400]};
    }
  }
`;

export const Icone = styled.img`
  width: 64px;
  height: 52px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Numbers = styled.h1`
  font-family: ${(props) => props.theme.fontFamily.sora};
  font-weight: bold;
  font-size: ${(props) => props.theme.typography.sora.M};
  margin: 0;
  text-align: left;
  color: ${(props) => props.theme.colors.extra.orange};
`;

export const Description = styled.p`
  font-family: ${(props) => props.theme.fontFamily.outfit};
  font-size: ${(props) => props.theme.typography.outfit.M};
  color: ${(props) => props.theme.colors.extra.white};
  font-weight: normal;
  margin: 0;
  text-align: left;
`;
