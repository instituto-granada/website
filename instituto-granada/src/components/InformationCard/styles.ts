import { breakpoints } from "~/styles/breakpoints";
import styled, { css } from "styled-components";
import theme from "~/theme/theme";

const colors = {
    black: "#2D2B29",
    white: "#F5F3EF"
}

export const StyledInformationCard = styled.div`
    /* Mobile - Base (320px+) */
    display: flex;
    flex-grow: 0;

    box-sizing: border-box;

    height: auto;
    min-height: 406px;
    width: 300px;
    padding: ${(props) => props.theme.spacing.S};
    padding-bottom: ${(props) => props.theme.spacing.M};
    border-radius: 28px;
    box-shadow: ${(props) => props.theme.shadows.highlight};
    background-color: ${colors.white};

    justify-content: center;
    align-items: flex-start;

    .information-card-content {
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;

        .information-card-image {
            height: 150px;
            width: 272px;
            border-radius: 20px;
            object-fit: cover;
            flex-shrink: 1;
        }

        .information-card-text {
            display: flex;
            flex-direction: column;
            width: 100%; 
            gap: ${(props) => props.theme.spacing.M};
            color: ${colors.black};

            .information-card-title {
                width: 100%;
                font-size: ${(props) => props.theme.typography.sora.XXS};
                font-weight: 700;
                line-height: ${(props) => props.theme.lineHeight["1_1x"]};
                margin: 0; 
                text-align: left; 
            }

            .information-card-body {
                width: 100%;
                font-size: ${(props) => props.theme.typography.outfit.XS};
                font-weight: 400;
                line-height: ${(props) => props.theme.lineHeight["1_5x"]};
                margin: 0; 
                text-align: left;
            }
        }
    }

    @media (min-width: ${breakpoints.mobileL}) {
        width: 331px;

        .information-card-content {

            .information-card-image {
                height: 167px;
                width: 303px;
            }

            .information-card-title {
                font-size: ${(props) => props.theme.typography.sora.XS};
            }

            .information-card-body {
                font-size: ${(props) => props.theme.typography.outfit.S};
            }
        }
    }
`;