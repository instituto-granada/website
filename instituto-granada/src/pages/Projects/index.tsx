import ContributePanel from "../../components/ContributePanel";
import Hero from "../../components/Hero";
import { Images } from "../../assets/";
import { useTranslate } from "../../hooks/useTranslate";
import { Container } from "./styles";

export default function Projects() {
  const { text } = useTranslate();

  return (
    <Container>
      <Hero
        imageUrl={Images.backgroundProjects}
        title={text.projects.hero.title}
        text={text.projects.hero.text}
        buttons={[
          {
            label: text.projects.hero.buttons.secondary.label,
            variant: "secondary",
            onClick: () => console.log("Clicou em Começar Agora!"),
          },
          {
            label: text.projects.hero.buttons.primary.label,
            variant: "primary",
            onClick: () => console.log("Clicou em Começar Agora!"),
          },
        ]}
      />
      <ContributePanel />
    </Container>
  );
}
