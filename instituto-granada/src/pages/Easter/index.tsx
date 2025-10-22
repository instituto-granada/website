import React from "react";
import { Container } from "./styles";
import Hero from "../../components/Hero";
import {  ProjectsCards } from "../../assets/";
import { useTranslate } from "../../hooks/useTranslate";

import HowItWorks from "../../components/HowItWorks";

export default function Easter() {
  const { text } = useTranslate();
  const { hero ,howItWorks} = text.Easter;

  return (
    <Container>
      <Hero
        isHome={false}
        imageUrl={ProjectsCards.backgroundEaster}
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
    <HowItWorks  imageUrl={ProjectsCards.cardEaster}  title={howItWorks.title}
        text={howItWorks.text} />
    </Container>
  );
}

