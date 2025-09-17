import React from "react";
import Navbar from "../../components/Header";
import Hero from "../../components/Hero";
import heroImage from "../../assets/hero/About_Backgound.png";
import { HeroContainer } from "./styles";

export default function About() {
  return (
    <>
      <Navbar />
      <HeroContainer>
        <Hero
          imageUrl={heroImage}
          title="SAIBA MAIS SOBRE NÓS"
          text={`O Instituto Granada é uma Organização da 
            Sociedade Civil localizada na Vila Granada, 
            em Mairinque/SP. \n\n Conheça abaixo um pouco 
            mais da nossa história.`}
        />
      </HeroContainer>
    </>
  );
}
