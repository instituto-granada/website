import React from "react";
import Navbar from "../../components/Header";
import Hero from "../../components/Hero";
import heroImage from "../../assets/hero/Volunteers_Backgound.png";

export default function Volunteers() {
  return (
    <>
      <Navbar />
      <Hero
        imageUrl={heroImage}
        title="SEJA VOLUNTÁRIO"
        text="Contribua com nossa organização e ajude a transformar a vida de crianças e adolescentes!  Toda ajuda é bem-vinda e gera um impacto positivo. Confira abaixo as áreas em que mais precisamos de apoio neste momento"
      />
    </>
  );
}
