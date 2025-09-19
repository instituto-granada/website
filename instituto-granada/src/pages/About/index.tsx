import Hero from "../../components/Hero";
import { Container } from "./styles";
import { Images } from "../../assets/";
import { useTranslate } from "../../hooks/useTranslate";

export default function About() {
  const { text } = useTranslate();

  return (
    <Container>
      <Hero
        imageUrl={Images.backgroundAbout}
        title={text.about.hero.title}
        text={text.about.hero.text}
      />
    </Container>
  );
}
