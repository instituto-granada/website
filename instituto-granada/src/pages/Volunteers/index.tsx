import Hero from "../../components/Hero";
import { Images } from "../../assets/";
import { useTranslate } from "../../hooks/useTranslate";
import { Container } from "./styles";

export default function Volunteers() {
  const { text } = useTranslate();

  return (
    <Container>
      <Hero
        imageUrl={Images.backgroundVolunteers}
        title={text.volunteers.hero.title}
        text={text.volunteers.hero.text}
      />
    </Container>
  );
}
