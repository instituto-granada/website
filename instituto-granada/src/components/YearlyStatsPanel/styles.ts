import styled from "styled-components";

export const StyledYearlyStatsPanel = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: ${props => props.theme.colors.secondary[700]};
    padding: 1rem;

    @media(min-width: ${props => props.theme.breakpoints.tablet}) {
        padding: ${props => props.theme.spacing.XL} ${props => props.theme.spacing["4XL"]};
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: ${props => props.theme.spacing.L};
`;

export const Title = styled.h2`
    width: 100%;
    text-align: center;
    font-family: ${props => props.theme.fontFamily.sora};
    font-size: ${props => props.theme.typography.sora.M};
    line-height: ${props => props.theme.lineHeight["1_1x"]};
    font-weight: ${props => props.theme.fontWeight.bold};
    color: ${props => props.theme.colors.extra.orange};
`;

export const StatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(min-width: ${props => props.theme.breakpoints.tablet}) {
        flex-direction: row;
    }
`;

export const StatsContent = styled.div<{ isMiddle?: boolean }>`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing["2XS"]};

    ${({ isMiddle, theme }) =>
        isMiddle &&
        `
            border-top: 1px solid ${theme.colors.extra.white};
            border-bottom: 1px solid ${theme.colors.extra.white};
        `
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        ${({ isMiddle, theme }) =>
            isMiddle &&
            `
                border-top: none;
                border-bottom: none;
                border-left: 1px solid ${theme.colors.extra.white};
                border-right: 1px solid ${theme.colors.extra.white};
            `
        }
    }
`;

export const StatIcon = styled.img`
    height: 60px;
    width: 60px;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StatValue = styled.h2`
    font-family: ${props => props.theme.fontFamily.sora};
    font-size: ${props => props.theme.typography.sora.M};
    line-height: ${props => props.theme.lineHeight["1_1x"]};
    font-weight: ${props => props.theme.fontWeight.bold};
    color: ${props => props.theme.colors.extra.orange};
`;

export const StatDescription = styled.p`
    font-family: ${props => props.theme.fontFamily.outfit};
    font-size: ${props => props.theme.typography.outfit.M};
    line-height: ${props => props.theme.lineHeight["1_5x"]};
    font-weight: ${props => props.theme.fontWeight.regular};
    color: ${props => props.theme.colors.extra.white};
`;