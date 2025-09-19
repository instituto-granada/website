import { Container } from "./styles";
import Hero from "../../components/Hero";
import { Images } from "../../assets/";
import { useTranslate } from "../../hooks/useTranslate";

export default function Home() {
  const { text } = useTranslate();

  return (
    <Container>
      <Hero
        isHome={true}
        imageUrl={Images.backgroundHome}
        title={text.home.hero.title}
        text={text.home.hero.text}
        buttons={[
          {
            label: text.home.hero.buttons.primary.label,
            variant: "primary",
            onClick: () => console.log("Clicou em Quero doar agora!"),
          },
        ]}
      />
    </Container>
  );
}
