import React from "react";
import ButtonPrincipal from "../ButtonPrincipal";
import {
  HeroContainer,
  ContentColumn,
  HeroTitle,
  HeroText,
  ButtonsContainer,
  HighlightedWord,
} from "./styles";
import { ButtonVariant } from "../ButtonPrincipal/styles";

interface ButtonAction {
  label: string;
  variant: ButtonVariant;
  onClick?: () => void;
}

interface HeroProps {
  imageUrl: string;
  title: string;
  text: string;
  isHome?: boolean;
  buttons?: ButtonAction[];
}

export default function Hero({
  imageUrl,
  title,
  text,
  isHome,
  buttons,
}: HeroProps) {
  const words = title.split(" ");
  const firstWord = words.shift();
  const restOfTitle = words.join(" ");

  return (
    <HeroContainer imageUrl={imageUrl} isHome={isHome}>
      <ContentColumn>
        <HeroTitle>
          <HighlightedWord>{firstWord}</HighlightedWord> {restOfTitle}
        </HeroTitle>
        <HeroText style={{ whiteSpace: "pre-line" }}>{text}</HeroText>

        {buttons && buttons.length > 0 && (
          <ButtonsContainer>
            {buttons.map((button, index) => (
              <ButtonPrincipal
                key={index}
                variant={button.variant}
                onClick={button.onClick}
              >
                {button.label}
              </ButtonPrincipal>
            ))}
          </ButtonsContainer>
        )}
      </ContentColumn>
    </HeroContainer>
  );
}
