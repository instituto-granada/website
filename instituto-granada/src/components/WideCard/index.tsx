import React from "react";
import { CardBody, CardImage, CardTextContainer, CardTitle, StyledWideCard } from "./styles";

export interface WideCardProps {
    image: string;
    title: string;
    body: string;
    imagePostion?: 'left' | 'right' 
}

export default function WideCard({
    image,
    title,
    body,
    imagePostion = 'left'
}: WideCardProps) {
    return (
        <StyledWideCard $imagePosition={imagePostion}>
            <CardImage
                    src={image}
                    alt={title || 'Card Information Image'}
                    className="wide-card-image"
                />
                <CardTextContainer className="card-text-container">
                    <CardTitle> {title} </CardTitle>
                    <CardBody> {body} </CardBody>
                </CardTextContainer>
        </StyledWideCard>
    )
}