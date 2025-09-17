import React from "react";
import Navbar from "../../components/Header";
import ContributePanel from "../../components/ContributePanel";
import { HeroContainer, ProjectsContainer } from "./styles";
import Hero from "../../components/Hero";
import heroImage from "../../assets/hero/Projects_Background.png";

export default function Projects() {
  return (
    <ProjectsContainer>
      <Navbar />
      <HeroContainer>
        <Hero
          imageUrl={heroImage}
          title="CONHEÇA NOSSOS PROJETOS"
          text="Conheça nossas iniciativas e descubra como elas transformam realidades"
          buttons={[
            {
              label: "Quero ser voluntário",
              variant: "secondary",
              onClick: () => console.log("Clicou em Começar Agora!"),
            },
            {
              label: "Quero doar Agora",
              variant: "primary",
              onClick: () => console.log("Clicou em Começar Agora!"),
            },
          ]}
        />
        <ContributePanel />
      </HeroContainer>
    </ProjectsContainer>
  );
}
