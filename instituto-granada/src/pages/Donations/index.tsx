import PageStructure from "../../components/PageStructure";
import Hero from "../../components/Hero";
import { IconName, Icons, Images } from "../../assets/";
import { useTranslate } from "../../hooks/useTranslate";

export default function Donations() {

  const { text } = useTranslate();
  const {
    hero,
  } = text.donations;

  return (
    <PageStructure>
      <Hero
        imageUrl={Images.backgroundDonation}
        title={hero.title}
        text={hero.text}
        emphasizeWordsIndex={[0, 1]}
      />
    </PageStructure>
  );
}
