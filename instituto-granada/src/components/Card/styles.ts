import styled from "styled-components";

export const StyledCard = styled.div`
  box-sizing: border-box;

  display: grid;
  grid-template-rows: 1fr 1fr 1fr; 
  align-items: center;
  justify-content: center;

  height: 270px;
  width: 296px;
  padding: ${(props) => props.theme.spacing.M};
  border-radius: 32px;
  border: 1px solid ${(props) => props.theme.colors.primary[500]};
  box-shadow: ${(props) => props.theme.shadows.highlight};
  background-color: ${(props) => props.theme.colors.grayscale[100]};

  row-gap: ${(props) => props.theme.spacing.M};
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .card-image {
    margin-right: 8px;
    max-height: 85px;
  }
`;
export const Title = styled.h1`
  width: 50%;
  font-family: ${(props) => props.theme.fontFamily.sora};
  font-weight: bold;
  font-size: ${(props) => props.theme.typography.sora.XS};
  color: ${(props) => props.theme.colors.primary[500]};
`;

export const CardContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  .card-text {
    font-family: ${(props) => props.theme.fontFamily.outfit};
    font-size: ${(props) => props.theme.typography.outfit.M};
    font-weight: 400;
    line-height: ${(props) => props.theme.lineHeight["1_5x"]};
    color: ${(props) => props.theme.colors.grayscale[800]};
    text-align: center;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .card-button {
    width: 248px;
  }
`;
