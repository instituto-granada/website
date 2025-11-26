import styled, { css } from "styled-components";
import { theme } from "~/theme/theme";
import { breakpoints } from "../../styles/breakpoints";
import { Images } from "~/assets";

export const StyledMissionSection = styled.section`
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
`

export const MissionContent = styled.div`
    max-height: 218px;
    display: flex;
    flex-direction: column;
    padding: ${props => props.theme.spacing["4XL"]} ${props => props.theme.spacing.XL};
    align-items: center;
    justify-content: center;
    gap: 32px;
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
    display: inline-block;
    max-height: 680px;
    width: 100%;

    // Efeito de gradiente na imagem
    background-image: 
    linear-gradient(0deg,rgba(255, 255, 255, 0) 0%, ${props => props.theme.colors.extra.white} 100%),
    url(${props => props.backgroundImage});
    background-size: cover
`