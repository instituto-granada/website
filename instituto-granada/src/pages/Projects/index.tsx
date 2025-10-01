import ContributePanel from "../../components/ContributePanel";
import Hero from "../../components/Hero";
import { Images } from "../../assets/";
import { useTranslate } from "../../hooks/useTranslate";
import { Container, ProjectGallery } from "./styles";
import WideCard from "../../components/WideCard";

export default function Projects() {
  const { text } = useTranslate();
  const { hero } = text.projects;

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
        <WideCard
          title="PROJETO VIDA FELIZ, DE APOIO ESCOLAR"
          body="Crianças e adolescentes são recebidos no Instituto Granada nos períodos em que não estão na escola. Ali recebem café da manhã, almoço e café da tarde, enquanto participam de oficinas de artesanato, musicalização, teatro, dança, jogos pedagógicos. Também acessam a plataforma para apoio da compreensão de conteúdos escolares e podem realizar seus trabalhos escolares com apoio de pedagogas e de materiais necessários. As atividades são realizadas com muita atenção e carinho para que os participantes se sintam acolhidos, alegres e apoiados em suas dores e necessidades."
          image={Images.projectVidaFeliz}
        />
        <WideCard
          title="PROJETO BYTE AÇÃO"
          body="Para capacitar adolescentes na busca de uma colocação profissional, como primeiro emprego, o curso de informática, oferece certificação e empoderamento. O adolescente sai, tendo acesso ao pacote office e navegação na web. Esta capacitação é importante já que muitas famílias ainda não possuem acesso a computadores e redes."
          image={Images.projectByteAcao}
          imagePosition="right"
        />
        <WideCard
          title="EMPODERA ADOLESCENTE"
          body="Os jovens são recebidos com carinho em rodas de conversas acompanhados por terapeutas, pedagogas, voluntários, oficineiros com conhecimentos específicos e convidados. Por meio de dinâmicas, brincadeiras, jogos e vídeos são levados a refletir sobre autoconhecimento, proporcionando fortalecimento emocional, ampliação de visão de mundo, permitindo lhes sonhar e caminhar na conquista de seus sonhos."
          image={Images.projectEmpoderaAdolescente}
        />
      </ProjectGallery>
    </Container>
  );
}
