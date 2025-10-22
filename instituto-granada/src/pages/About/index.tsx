import Hero from "../../components/Hero";
import { Images } from "../../assets/";
import Image from "../../components/Image";
import { useTranslate } from "../../hooks/useTranslate";
import PageStructure from "../../components/PageStructure";
import {
  AboutUsSection,
  AboutUsSectionMessage,
  AboutUsSectionTitle,
  ContentBox,
  WrapperImage,
} from "./styles";

export default function About() {
  const { text } = useTranslate();
  const { hero, aboutUsSection } = text.about;

  return (
    <PageStructure>
      <Hero
        imageUrl={Images.backgroundAbout}
        title={hero.title}
        text={hero.text}
      />
      <AboutUsSection>
        <ContentBox>
          <WrapperImage>
            <Image name="aboutUsSection" />
          </WrapperImage>
        </ContentBox>
        <ContentBox grow>
          <AboutUsSectionTitle>{aboutUsSection.title}</AboutUsSectionTitle>
          <AboutUsSectionMessage>{aboutUsSection.text}</AboutUsSectionMessage>
        </ContentBox>
      </AboutUsSection>
    </PageStructure>
  );
}
