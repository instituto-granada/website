import Header from "../../components/Header";
import { HomerContainer, HeroContainer } from "./styles";
import Hero from "../../components/Hero";
import heroImage from "../../assets/hero/Home_Backgound.png";

export default function Home() {
  return (
    <HomerContainer>
      <Header />
      <HeroContainer>
        <Hero
          isHome={true}
          imageUrl={heroImage}
          title="TRANSFORME A REALIDADE DE CRIANÇAS E FAMÍLIAS"
          text="Desde 2008, o Instituto Granada oferece aprendizagem, alimentação gratuita, apoio às famílias, saúde emocional e capacitação profissional em Mairinque/SP"
          buttons={[
            {
              label: "Quero doar agora",
              variant: "primary",
              onClick: () => console.log("Clicou em Quero doar agora!"),
            },
          ]}
        />
      </HeroContainer>
    </HomerContainer>
  );
}
