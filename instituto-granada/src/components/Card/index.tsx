import React from "react";
import {
  CardContent,
  CardFooter,
  CardHeader,
  StyledCard,
  Title,
} from "./styles";
import ButtonPrincipal, { ButtonProps } from "../ButtonPrincipal";

export interface CardProps {
  image?: string;
  text?: string;
  title?: string;
  buttonLabel: string;
  onButtonClick: ButtonProps["onClick"];
}

export default function Card({
  image,
  text,
  title,
  onButtonClick,
  buttonLabel,
}: CardProps) {
  return (
    <StyledCard>
      <CardHeader>
        {image && (
          <img src={image} alt={text || "Card Image"} className="card-image" />
        )}
        <Title>{title}</Title>
      </CardHeader>

      <CardContent>{text && <p className="card-text">{text}</p>}</CardContent>

      <CardFooter>
        <ButtonPrincipal
          variant="secondary"
          onClick={onButtonClick}
          className="card-button"
        >
          {buttonLabel}
        </ButtonPrincipal>
      </CardFooter>
    </StyledCard>
  );
}
