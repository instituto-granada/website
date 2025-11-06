import React from "react";
import { MissionBody, MissionContent, MissionImage, MissionTitle, StyledMissionSection } from "./styles";

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
            <MissionImage
                src={image}
                alt={title || "Mission Section Image"}
            />
        </StyledMissionSection>
    )
}