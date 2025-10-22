import {
  ContentWrapper,
  Description,
  ImageWrapper,
  LearnMore,
  StyledImage,
  Title,
} from "./styles";
import Hero from "../../components/Hero";
import { ProjectsCards } from "../../assets/";
import { useTranslate } from "../../hooks/useTranslate";
import HowItWorks from "../../components/HowItWorks";
import PageStructure from "../../components/PageStructure";

export default function Christmas() {
  const { text } = useTranslate();
  const { hero, learnMore } = text.christmas;

  return (
    <PageStructure>
      <Hero
        emphasizeWordIndex={0}
        isHome={false}
        imageUrl={ProjectsCards.backgroundChristmas}
        title={hero.title}
        text={hero.text}
        buttons={[
          {
            label: hero.buttons.primary.label,
            variant: "primary",
            onClick: () => console.log("Quero apadrinhar"),
          },
        ]}
      />
      <LearnMore>
        <ContentWrapper>
          <Title>{learnMore.title}</Title>
          <Description>{learnMore.text}</Description>
        </ContentWrapper>
        <ImageWrapper>
          <StyledImage
            src={ProjectsCards.cardLearnMoreChristmas}
            alt="Crianças e voluntários reunidos em um evento comunitário"
          />
        </ImageWrapper>
      </LearnMore>
      <HowItWorks
        oneButton={true}
        imageUrl={ProjectsCards.cardChristmas}
        title={learnMore.title}
        text={learnMore.text}
      />
    </PageStructure>
  );
}
