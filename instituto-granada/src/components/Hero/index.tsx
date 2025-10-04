import ButtonPrincipal from "../ButtonPrincipal";
import { ButtonVariant } from "~/types/componentTypes";
import {
  Container,
  ContentColumn,
  Title,
  Text,
  ButtonsContainer,
  HighlightedWord,
} from "./styles";

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
    <Container imageUrl={imageUrl} isHome={isHome}>
      <ContentColumn>
        <Title>
          <HighlightedWord>{firstWord}</HighlightedWord> {restOfTitle}
        </Title>
        <Text>{text}</Text>
        {buttons && buttons.length > 0 && (
          <ButtonsContainer>
            {buttons.map(({ label, onClick, variant }, index) => (
              <ButtonPrincipal key={index} variant={variant} onClick={onClick}>
                {label}
              </ButtonPrincipal>
            ))}
          </ButtonsContainer>
        )}
      </ContentColumn>
    </Container>
  );
}
