import { GradientEffect, MissionBody, MissionContent, MissionImageContainer, MissionTitle, StyledMissionSection } from "./styles";

export interface MissionSectionProps {
    title: string
    body: string
    image: string
}

export default function MissionSection ({
    title,
    body,
    image
}: MissionSectionProps) {
    return (
        <StyledMissionSection>
            <MissionContent>
                <MissionTitle> {title} </MissionTitle>
                <MissionBody> {body} </MissionBody>
            </MissionContent>
            <MissionImageContainer backgroundImage={image}>
                <GradientEffect/>
            </MissionImageContainer>
        </StyledMissionSection>       
    )
}