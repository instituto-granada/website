import Hero from "../../components/Hero";
import { ProjectsCards } from "../../assets/";
import { useTranslate } from "../../hooks/useTranslate";

import HowItWorks from "../../components/HowItWorks";
import PageStructure from "../../components/PageStructure";

export default function Easter() {
  const { text } = useTranslate();
  const { hero, howItWorks } = text.easter;

  return (
    <PageStructure>
      <Hero
        emphasizeWordsIndex={[0]}
        isHome={false}
        imageUrl={ProjectsCards.backgroundEaster}
        title={hero.title}
        text={hero.text}
      />
      <HowItWorks
        imageUrl={ProjectsCards.cardEaster}
        title={howItWorks.title}
        text={howItWorks.text}
      />
    </PageStructure>
  );
}
