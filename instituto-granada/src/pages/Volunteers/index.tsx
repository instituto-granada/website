import Hero from "../../components/Hero";
import { Images } from "../../assets/";
import { useTranslate } from "../../hooks/useTranslate";
import { Container } from "./styles";

export default function Volunteers() {
  const { text } = useTranslate();
  const { hero } = text.volunteers;

  return (
    <Container>
      <Hero
        imageUrl={Images.backgroundVolunteers}
        title={hero.title}
        text={hero.text}
      />
    </Container>
  );
}
