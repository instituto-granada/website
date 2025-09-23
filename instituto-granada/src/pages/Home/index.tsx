import React from "react";
import {
  Container,
  ButtonsContainer,
  LeftColumn,
  RightColumn,
  Title,
  Icone,
  Text,
  SectionAbout,
  SectionParticipate,
  TitleParticipate,
  SubtitleParticipate,
  CardContainer,
  SectionTestimonials,
  TextSectionTestimonials,
} from "./styles";
import Hero from "../../components/Hero";
import { Images, Icons } from "../../assets/";
import { useTranslate } from "../../hooks/useTranslate";
import ButtonPrincipal from "../../components/ButtonPrincipal";
import Card from "../../components/Card";
import StatistPanel from "../../components/StatistPanel";
import Testimonials from "../../components/Testimonials";

export default function Home() {
  const { text } = useTranslate();

  return (
    <Container>
      <Hero
        isHome={true}
        imageUrl={Images.backgroundHome}
        title={text.home.hero.title}
        text={text.home.hero.text}
        buttons={[
          {
            label: text.home.hero.buttons.primary.label,
            variant: "primary",
            onClick: () => console.log("Clicou em Quero doar agora!"),
          },
        ]}
      />
      <SectionAbout>
        <LeftColumn>
          <Title>GRANADA É MAIS QUE APOIO, É TRANSFORMAÇÃO SOCIAL</Title>
          <Icone src={Icons.World_people} alt="" />
        </LeftColumn>
        <RightColumn>
          <Text>
            Somos uma Organização da Sociedade Civil que nasceu na Vila Granada,
            em Mairinque, para combater desigualdades e apoiar crianças,
            adolescentes e famílias. Nossa atuação está alinhada aos Objetivos
            de Desenvolvimento Sustentável da ONU.
          </Text>
          <ButtonsContainer>
            <ButtonPrincipal
              variant="primary"
              onClick={() => alert("Botão Secundário Clicado!")}
            >
              Conheça nossa história
            </ButtonPrincipal>
            <ButtonPrincipal
              variant="secondary"
              onClick={() => alert("Botão Secundário Clicado!")}
            >
              Veja nossos projetos
            </ButtonPrincipal>
          </ButtonsContainer>
        </RightColumn>
      </SectionAbout>
      <SectionParticipate>
        <TitleParticipate>Como você pode fazer parte</TitleParticipate>
        <SubtitleParticipate>
          Sua contribuição pode mudar histórias. Existem muitas formas de apoiar
        </SubtitleParticipate>
        <CardContainer>
          <Card
            title={"DOE"}
            image={Icons.Gift}
            text="Cada valor nos ajuda a manter oficinas, refeições e atendimentos."
            buttonLabel="Quero doar"
            onButtonClick={() => alert("Botão do Card clicado!")}
          />
          <Card
            title={"SEJA VOLUNTÁRIO"}
            image={Icons.Person}
            text="Doe seu tempo e habilidades para fortalecer a comunidade."
            buttonLabel="Inscreva-se"
            onButtonClick={() => alert("Botão do Card clicado!")}
          />
          <Card
            title={"SEJA PARCEIRO"}
            image={Icons.Hands}
            text="Empresas e organizações podem ampliar nosso impacto."
            buttonLabel="Fale Conosco"
            onButtonClick={() => alert("Botão do Card clicado!")}
          />
        </CardContainer>
      </SectionParticipate>
      <StatistPanel />
      <SectionTestimonials>
        <Testimonials />
        <div>
          <TextSectionTestimonials>
            Você também pode transformar histórias como essas
          </TextSectionTestimonials>
          <ButtonPrincipal
            variant="primary"
            onClick={() => alert("Botão Secundário Clicado!")}
          >
            Quero fazer parte dessa transformação
          </ButtonPrincipal>
        </div>
      </SectionTestimonials>
    </Container>
  );
}
