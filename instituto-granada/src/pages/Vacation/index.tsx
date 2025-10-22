import Hero from "../../components/Hero";
import { ProjectsCards } from "../../assets/";
import { useTranslate } from "../../hooks/useTranslate";
import HowItWorks from "../../components/HowItWorks";
import PageStructure from "../../components/PageStructure";

export default function Vocation() {
  const { text } = useTranslate();
  const { hero, howItWorks } = text.vacation;

  return (
    <PageStructure>
      <Hero
        emphasizeWordIndex={0}
        isHome={false}
        imageUrl={ProjectsCards.backgroundVacation}
        title={hero.title}
        text={hero.text}
      />
      <HowItWorks
        imageUrl={ProjectsCards.cardVacation}
        title={howItWorks.title}
        text={howItWorks.text}
      />
    </PageStructure>
  );
}
