import Hero from "../../components/Hero";
import { Images } from "../../assets/";
import { useTranslate } from "../../hooks/useTranslate";
import PageStructure from "../../components/PageStructure";
import InformationCard from "../../components/InformationCard";
import { Positions, PositionsSection, PositionsSectionTitle } from "./styles";

const imageNames: (keyof typeof Images)[] = [
  "marketingPosition",
  "fundraiserPosition",
  "psychologistPosition",
  "teacherPosition",
  "educationalPsychologistPosition",
  "speechTherapistPosition",
  "generalAssistantPosition",
];

export default function Volunteers() {
  const { text } = useTranslate();
  const { hero, positions, positionsSectionTitle } = text.volunteers;

  return (
    <PageStructure>
      <Hero
        imageUrl={Images.backgroundVolunteers}
        title={hero.title}
        text={hero.text}
      />
      <PositionsSection>
        <PositionsSectionTitle>{positionsSectionTitle}</PositionsSectionTitle>
        <Positions>
          {positions.map((position, index) => (
            <InformationCard
              key={index}
              image={imageNames[index]}
              title={position.title}
              body={position.body}
            />
          ))}
        </Positions>
      </PositionsSection>
    </PageStructure>
  );
}
