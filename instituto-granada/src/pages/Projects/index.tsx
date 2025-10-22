import ContributePanel from "../../components/ContributePanel";
import Hero from "../../components/Hero";
import { Images } from "../../assets/";
import { useTranslate } from "../../hooks/useTranslate";
import { ProjectGallery } from "./styles";
import WideCard from "../../components/WideCard";
import ProjectCarousel from "../../components/ProjectCarousel";
import PageStructure from "../../components/PageStructure";

export default function Projects() {
  const { text } = useTranslate();
  const { hero, galleries, carousel } = text.projects;

  interface ImageIndex {
    projectVidaFeliz: string;
    projectByteAcao: string;
    projectEmpoderaAdolescente: string;
    projectChama: string;
    projectMelhorToque: string;
    projectMulheresCapazes: string;
  }

  const imageIndex = {
    projectVidaFeliz: Images.projectVidaFeliz,
    projectByteAcao: Images.projectByteAcao,
    projectEmpoderaAdolescente: Images.projectEmpoderaAdolescente,
    projectChama: Images.projectChama,
    projectMelhorToque: Images.projectMelhorToque,
    projectMulheresCapazes: Images.projectMulheresCapazes,
  };

  const mainProjectsImages = {
    projectPascoa: Images.projectPascoa,
    projectNatal: Images.projectNatal,
    projectFerias: Images.projectFerias,
  };

  const carouselProjects = carousel.projects.map((project) => ({
    ...project,
    image: mainProjectsImages[project.image as keyof typeof mainProjectsImages],
  }));

  const gallery01 = galleries.find((g) => g.key === "gallery01");
  const gallery02 = galleries.find((g) => g.key === "gallery02");

  return (
    <PageStructure>
      <Hero
        emphasizeWordIndex={0}
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

      <ProjectCarousel
        projects={carouselProjects}
        header="PRINCIPAIS PROJETOS"
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

        <ContributePanel
          title="Quer apoiar nossos projetos?"
          subTitle="Sua contribuição pode transformar vidas"
          buttonLabel="Faça parte dessa transformação"
          onButtonClick={() => console.log("Clicou em um botão primário.")}
        />

        {gallery02?.list.map((project) => (
          <WideCard
            image={imageIndex[project.imageKey as keyof typeof imageIndex]}
            title={project.title}
            body={project.body}
            imagePosition={project.imagePosition}
          />
        ))}

        <ContributePanel
          title="Vamos juntos?"
          subTitle="Sua participação faz a diferença. Entre em contato e descubra como apoiar ou se engajar nos projetos"
          buttonLabel="Falar no WhatsApp"
          onButtonClick={() => console.log("Clicou em um botão primário.")}
        />
      </ProjectGallery>
    </PageStructure>
  );
}
