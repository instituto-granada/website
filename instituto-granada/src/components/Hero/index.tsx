import ButtonPrincipal from "../ButtonPrincipal";
import {
  Caption,
  Container,
  ContentColumn,
  Title,
  Text,
  ButtonsContainer,
  HighlightedWord,
} from "./styles";
import { HeroProps } from "./types";

export default function Hero({
  caption,
  imageUrl,
  title,
  text,
  isHome,
  buttons,
  emphasizeWordsIndex,
}: HeroProps) {
  const renderTitle = () => {
    const words = title.split(" ");

    return (
      <Title>
        {words.map((word, i) => {
          const isHighlighted = emphasizeWordsIndex?.includes(i);
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
        <Caption>{caption}</Caption>
      </ContentColumn>
    </Container>
  );
}
