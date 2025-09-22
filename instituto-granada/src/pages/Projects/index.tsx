import ContributePanel from "../../components/ContributePanel";
import Hero from "../../components/Hero";
import { Images } from "../../assets/";
import { useTranslate } from "../../hooks/useTranslate";
import { Container } from "./styles";

export default function Projects() {
  const { text } = useTranslate();
  const { hero } = text.projects;

  return (
    <Container>
      <Hero
        imageUrl={Images.backgroundProjects}
        title={hero.title}
        text={hero.text}
        buttons={[
          {
            label: hero.buttons.secondary.label,
            variant: "secondary",
            onClick: () => console.log("Clicou em Começar Agora!"),
          },
          {
            label: hero.buttons.primary.label,
            variant: "primary",
            onClick: () => console.log("Clicou em Começar Agora!"),
          },
        ]}
      />
      <ContributePanel />
    </Container>
  );
}
