import styled, { css } from "styled-components";
import { theme } from "~/theme/theme";
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
    padding: ${props => props.theme.spacing["4XL"]} ${props => props.theme.spacing.XL};
    align-items: center;
    justify-content: center;
    gap: 10px;
`

export const MissionTitle = styled.h2`
    font-family: ${props => props.theme.fontFamily.sora};
    font-size: ${props => props.theme.typography.sora.M};
    line-height: ${props => props.theme.lineHeight["1_1x"]};
    font-weight: ${props => props.theme.fontWeight.bold};
    color: ${props => props.theme.colors.primary[400]};
`

export const MissionBody = styled.p`
    font-family: ${props => props.theme.fontFamily.outfit};
    font-size: ${props => props.theme.typography.outfit.L};
    line-height: ${props => props.theme.lineHeight["1_5x"]};
    font-weight: ${props => props.theme.fontWeight.semiBold};
    color: ${props => props.theme.colors.extra.black};
`

export const MissionImage = styled.img`
    max-height: 680px;
    width: 100%;
`