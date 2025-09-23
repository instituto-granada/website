import Hero from "../../components/Hero";
import { Container } from "./styles";
import { Images } from "../../assets/";
import { useTranslate } from "../../hooks/useTranslate";

export default function About() {
  const { text } = useTranslate();
  const { hero } = text.about;

  return (
    <Container>
      <Hero
        imageUrl={Images.backgroundAbout}
        title={hero.title}
        text={hero.text}
      />
    </Container>
  );
}
