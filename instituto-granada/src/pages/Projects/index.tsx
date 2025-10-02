import ContributePanel from "../../components/ContributePanel";
import Hero from "../../components/Hero";
import { Images } from "../../assets/";
import { useTranslate } from "../../hooks/useTranslate";
import { Container, ProjectGallery } from "./styles";
import WideCard from "../../components/WideCard";

export default function Projects() {
  const { text } = useTranslate();
  const { hero, galleries } = text.projects;
  
  interface ImageIndex {
    projectVidaFeliz: string;
    projectByteAcao: string;
    projectEmpoderaAdolescente: string;
    projectChama: string;
    projectMelhorToque: string;
    projectMulheresCapazes: string;
  }

  const imageIndex = {
    "projectVidaFeliz": Images.projectVidaFeliz,
    "projectByteAcao": Images.projectByteAcao,
    "projectEmpoderaAdolescente": Images.projectEmpoderaAdolescente,
    "projectChama": Images.projectChama,
    "projectMelhorToque": Images.projectMelhorToque,
    "projectMulheresCapazes": Images.projectMulheresCapazes
  }

  const gallery01 = galleries.find(g => g.key === "gallery01");
  const gallery02 = galleries.find(g => g.key === "gallery02");

  return (
    <Container>
      <Hero
        imageUrl={Images.backgroundProjects}
        title={hero.title}
        text={hero.text}
        buttons={[
          {
            label: hero.buttons.secondary.label,
            variant: "secondary",
            onClick: () => console.log("Clicou em Começar Agora!"),
          },
          {
            label: hero.buttons.primary.label,
            variant: "primary",
            onClick: () => console.log("Clicou em Começar Agora!"),
          },
        ]}
      />
      <ProjectGallery>
        {gallery01?.list.map((project) => (
          <WideCard
            image={imageIndex[project.imageKey as keyof typeof imageIndex]}
            title={project.title}
            body={project.body}
            imagePosition={project.imagePosition}
          />
        ))}

        {gallery02?.list.map((project) => (
          <WideCard
            image={imageIndex[project.imageKey as keyof typeof imageIndex]}
            title={project.title}
            body={project.body}
            imagePosition={project.imagePosition}
          />
        ))}
      </ProjectGallery>
    </Container>
  );
}
