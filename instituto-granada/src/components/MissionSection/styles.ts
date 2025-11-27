import styled, { css } from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const StyledMissionSection = styled.section`
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
`

export const MissionContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    align-items: center;
    justify-content: center;
    gap: 32px;

    @media (min-width: ${breakpoints.tablet}) {
        padding: ${props => props.theme.spacing.XL} ${props => props.theme.spacing["4XL"]};
    }
`

export const MissionTitle = styled.h2`
    width: 100%;
    font-family: ${props => props.theme.fontFamily.sora};
    font-size: ${props => props.theme.typography.sora.M};
    line-height: ${props => props.theme.lineHeight["1_1x"]};
    font-weight: ${props => props.theme.fontWeight.bold};
    color: ${props => props.theme.colors.primary[400]};
    text-align: left;
`

export const MissionBody = styled.p`
    font-family: ${props => props.theme.fontFamily.outfit};
    font-size: ${props => props.theme.typography.outfit.L};
    line-height: ${props => props.theme.lineHeight["1_5x"]};
    font-weight: ${props => props.theme.fontWeight.semiBold};
    color: ${props => props.theme.colors.extra.black};
`

export const MissionImageContainer = styled.div<{backgroundImage: string}>`
    position: relative;
    display: flex;
    height: 680px;
    max-height: 680px;
    width: 100%;
    background-image: url(${props => props.backgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`

export const GradientEffect = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 132px;
    width: 100%; 
    background: #ffffff;
    background: linear-gradient(to top, rgba(255, 255, 255, 0) 0%, white 100%);

    pointer-events: none;
`