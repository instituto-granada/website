import React from "react";
import { StyledInformationCard } from "./styles";

export interface InformationCardProps {
    image: string;
    title: string;
    body: string;
}

export default function InformationCard({
    image,
    title,
    body,
}: InformationCardProps) {
    return (
        <StyledInformationCard>
            <div className="information-card-content">
                {image && (
                    <img 
                        src={image}
                        alt={title || 'Card Information Image'}
                        className="information-card-image"
                    />
                )}
                <div className="information-card-text">
                    {title && (<p className="information-card-title">{title}</p>)}
                    {body && (<p className="information-card-body">{body}</p>)}
                </div>
            </div>
        </StyledInformationCard>
    )
}