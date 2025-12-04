import styled
from "styled-components";

export const StyledOdsObjectives = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-evenly;
    width: 100%;
    row-gap: ${props => props.theme.spacing.M};
    padding: ${({ theme }) => `${theme.spacing.M} ${theme.spacing.S}`};

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: stretch;
        padding: ${props => props.theme.spacing.XL} ${props => props.theme.spacing["4XL"]} ${props => props.theme.spacing["3XL"]}
    }
`;

export const OdsObjectiveIcon = styled.img`
    width: 120px;
    height: 120;
`;