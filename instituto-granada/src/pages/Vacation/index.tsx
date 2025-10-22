import React from "react";
import { Container } from "./styles";
import Hero from "../../components/Hero";
import { Images, ProjectsCards } from "../../assets/";
import { useTranslate } from "../../hooks/useTranslate";

import HowItWorks from "../../components/HowItWorks";

export default function Vocation() {
  const { text } = useTranslate();
  const { hero, howItWorks } = text.Vocation;

  return (
    <Container>
      <Hero
        isHome={false}
        imageUrl={ProjectsCards.backgroundVocation}
        title={hero.title}
        text={hero.text}
        buttons={[
          {
            label: hero.buttons.primary.label,
            variant: "primary",
            onClick: () => console.log("Quero apadrinhar"),
          },
        ]}
      />
      <HowItWorks
        imageUrl={ProjectsCards.cardVocation}
        title={howItWorks.title}
        text={howItWorks.text}
      />
    </Container>
  );
}
