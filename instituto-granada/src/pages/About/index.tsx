import Hero from "../../components/Hero";
import { Images } from "../../assets/";
import Image from "../../components/Image";
import { useTranslate } from "../../hooks/useTranslate";
import PageStructure from "../../components/PageStructure";
import InformationCard from "../../components/InformationCard";
import {
  AboutUsButtonWrapper,
  AboutUsSection,
  CardsSection,
  ContentBox,
  HighlightedParagraph,
  ImageWrapper,
  OurFutureButtonWrapper,
  OurFutureSection,
  Paragraph,
  TextWrapper,
  Title,
} from "./styles";
import ButtonPrincipal from "../../components/ButtonPrincipal";

const imageNames: (keyof typeof Images)[] = [
  "familySupport",
  "freeMeals",
  "academicSupport",
];

export default function About() {
  const { text } = useTranslate();
  const { aboutUsSection, cardsSection, hero, ourFutureSection, missionSection } = text.about;

  return (
    <PageStructure>
      <Hero
        imageUrl={Images.backgroundAbout}
        title={hero.title}
        text={hero.text}
      />
      <AboutUsSection>
        <ContentBox alignCenter>
          <ImageWrapper>
            <Image name="aboutUsSection" />
          </ImageWrapper>
        </ContentBox>
        <ContentBox grow>
          <TextWrapper withLeftPadding>
            <Title>{aboutUsSection.title}</Title>
            {aboutUsSection.text.map((paragraph, index) => (
              <Paragraph key={index} bold={index % 2 !== 0} withMarginBottom>
                {paragraph}
              </Paragraph>
            ))}
          </TextWrapper>
          <AboutUsButtonWrapper>
            <ButtonPrincipal
              key="secondary"
              variant="secondary"
              onClick={() => {}}
            >
              {aboutUsSection.buttons.secondary.label}
            </ButtonPrincipal>
            <ButtonPrincipal key="primary" variant="primary" onClick={() => {}}>
              {aboutUsSection.buttons.primary.label}
            </ButtonPrincipal>
          </AboutUsButtonWrapper>
        </ContentBox>
      </AboutUsSection>
      <CardsSection>
        {cardsSection.cardsContent.map((card, index) => (
          <InformationCard
            key={index}
            image={imageNames[index]}
            title={card.title}
            body={card.message}
            uppercaseTitle
          />
        ))}
      </CardsSection>
      <OurFutureSection>
        <Title alignCenter>{ourFutureSection.title}</Title>
        {ourFutureSection.text.map((paragraph, index) => (
          <Paragraph key={index} indented={index % 2 !== 0}>
            {paragraph}
          </Paragraph>
        ))}
        <HighlightedParagraph>
          {ourFutureSection.highlightText}
        </HighlightedParagraph>
        <OurFutureButtonWrapper>
          <ButtonPrincipal key="primary" variant="primary" onClick={() => {}}>
            {ourFutureSection.button.primary.label}
          </ButtonPrincipal>
        </OurFutureButtonWrapper>
      </OurFutureSection>
    </PageStructure>
  );
}
