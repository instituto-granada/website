import ButtonPrincipal from "../ButtonPrincipal";
import {
  Container,
  ContentColumn,
  Title,
  Text,
  ButtonsContainer,
  HighlightedWord,
} from "./styles";
import { HeroProps } from "./types";

export default function Hero({
  imageUrl,
  title,
  text,
  isHome,
  buttons,
  emphasizeWordIndex,
}: HeroProps) {
  const renderTitle = () => {
    const words = title.split(" ");

    return (
      <Title>
        {words.map((word, i) => {
          const isHighlighted = emphasizeWordIndex === i;
          const Element = isHighlighted ? HighlightedWord : "span";

          return (
            <Element key={i}>
              {word}
              {i < words.length - 1 && " "}
            </Element>
          );
        })}
      </Title>
    );
  };

  return (
    <Container imageUrl={imageUrl} isHome={isHome}>
      <ContentColumn>
        {renderTitle()}
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
