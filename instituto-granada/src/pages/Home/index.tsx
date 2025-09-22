import { Container } from "./styles";
import Hero from "../../components/Hero";
import { Images } from "../../assets/";
import { useTranslate } from "../../hooks/useTranslate";

export default function Home() {
  const { text } = useTranslate();
  const { hero } = text.home;

  return (
    <Container>
      <Hero
        isHome={true}
        imageUrl={Images.backgroundHome}
        title={hero.title}
        text={hero.text}
        buttons={[
          {
            label: hero.buttons.primary.label,
            variant: "primary",
            onClick: () => console.log("Clicou em Quero doar agora!"),
          },
        ]}
      />
    </Container>
  );
}
