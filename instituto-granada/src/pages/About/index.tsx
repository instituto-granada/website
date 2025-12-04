import Hero from "../../components/Hero";
import { IconName, Icons, Images } from "../../assets/";
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
import YearlyStatsPanel, {
  YearlyStatItem,
} from "../../components/YearlyStatsPanel";
import MissionSection from "../../components/MissionSection";
import OdsObjectives, { OdsObjective } from "../../components/OdsObjectives";

const imageNames: (keyof typeof Images)[] = [
  "familySupport",
  "freeMeals",
  "academicSupport",
];

export default function About() {
  const { text } = useTranslate();
  const {
    aboutUsSection,
    cardsSection,
    hero,
    ourFutureSection,
    missionSection,
  } = text.about;

  const rawStats = text.about.yearlyStats.stats[0];

  const items: YearlyStatItem[] = Object.values(rawStats).map((stat) => ({
    icon: Icons[stat.icon as IconName],
    value: stat.value,
    description: stat.description,
  }));

  const objectives: OdsObjective[] = Object.values(text.about.odsObjectives.objectives).map(ojective => ({
    icon: Icons[ojective.icon as IconName],
    description: ojective.description
  }))

  return (
    <PageStructure>
      <Hero
        imageUrl={Images.backgroundAbout}
        title={hero.title}
        text={hero.text}
        emphasizeWordsIndex={[0, 1]}
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
      <OdsObjectives
        items={objectives}
      />
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
      <MissionSection
        title={missionSection.title}
        body={missionSection.text}
        image={Images.mission}
      />
      <YearlyStatsPanel title={text.about.yearlyStats.title} items={items} />
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

export {};
