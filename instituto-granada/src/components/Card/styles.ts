import styled, {css} from "styled-components";

export const StyledCard = styled.div`
    height: 270px;
    width: 296px;
    padding: 24px;
    border-radius: 32px;
    border: inset 1px ${(props) => props.theme.colors.primary[500]};
    box-shadow: ${(props) => props.theme.shadows.highlight};

    font-size: ${(props) => props.theme.typography.outfit.M};
    font-weight: regular;
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 24px;
`;