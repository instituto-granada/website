import Hero from "../../components/Hero";
import { Images } from "../../assets/";
import Image from "../../components/Image";
import { useTranslate } from "../../hooks/useTranslate";
import PageStructure from "../../components/PageStructure";
import {
  AboutUsButtonWrapper,
  AboutUsSection,
  ContentBox,
  HighlightedParagraph,
  ImageWrapper,
  OutFutureButtonWrapper,
  OutFutureSection,
  Paragraph,
  TextWrapper,
  Title,
} from "./styles";
import ButtonPrincipal from "../../components/ButtonPrincipal";

export default function About() {
  const { text } = useTranslate();
  const { aboutUsSection, hero, outFutureSection } = text.about;

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
      <OutFutureSection>
        <Title alignCenter>{outFutureSection.title}</Title>
        {outFutureSection.text.map((paragraph, index) => (
          <Paragraph key={index} indented={index % 2 !== 0}>
            {paragraph}
          </Paragraph>
        ))}
        <HighlightedParagraph>
          {outFutureSection.highlightText}
        </HighlightedParagraph>
        <OutFutureButtonWrapper>
          <ButtonPrincipal key="primary" variant="primary" onClick={() => {}}>
            {outFutureSection.button.primary.label}
          </ButtonPrincipal>
        </OutFutureButtonWrapper>
      </OutFutureSection>
    </PageStructure>
  );
}
