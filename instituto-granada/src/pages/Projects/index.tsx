import ContributePanel from "../../components/ContributePanel";
import Hero from "../../components/Hero";
import { Images } from "../../assets/";
import { useTranslate } from "../../hooks/useTranslate";
import { ProjectGallery } from "./styles";
import WideCard from "../../components/WideCard";
import ProjectCarousel from "../../components/ProjectCarousel";
import PageStructure from "../../components/PageStructure";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const { text } = useTranslate();
  const navigate = useNavigate();
  const { carousel, contributePanel, hero, galleries } = text.projects;

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
        emphasizeWordsIndex={[0]}
        imageUrl={Images.backgroundProjects}
        title={hero.title}
        text={hero.text}
        buttons={[
          {
            label: hero.buttons.secondary.label,
            variant: "secondary",
            onClick: () => navigate("/voluntarios"),
          },
          {
            label: hero.buttons.primary.label,
            variant: "primary",
            onClick: () => navigate("/doacoes"),
          },
        ]}
      />

      <ProjectGallery>
        <ProjectCarousel projects={carouselProjects} header={carousel.header} />
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
          onButtonClick={() => navigate("/doacoes")}
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
          title={contributePanel.title}
          subTitle={contributePanel.subtitle}
          buttonLabel={contributePanel.buttonLabel}
          onButtonClick={() => {
            window.open("https://wa.me/5511996206046", "_blank");
          }}
        />
      </ProjectGallery>
    </PageStructure>
  );
}
