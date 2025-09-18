import styled, {css} from "styled-components";
import ButtonPrincipal from "../ButtonPrincipal";

export const StyledCard = styled.div`
    box-sizing: border-box;

    height: 270px;
    width: 296px;
    padding: ${(props) => props.theme.spacing.M};
    border-radius: 32px;
    border: 1px solid ${(props) => props.theme.colors.primary[500]};
    box-shadow: ${(props) => props.theme.shadows.highlight};
    background-color: ${(props) => props.theme.colors.grayscale[100]};

    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    flex-grow: 0;
`;

export const CardHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    .card-image {
        max-height: 85px;
    }
`;

export const CardContent = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    .card-text {
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