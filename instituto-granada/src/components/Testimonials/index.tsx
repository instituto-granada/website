import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  TestimonialsContainer,
  CardContainer,
  TestimonialImage,
  TextContainer,
  Title,
  Text,
  Describer,
} from "./styles";

import { Images } from "../../assets/";

const testimonialsData = [
  {
    image: Images.Testimonials1,
    title: "Vozes que inspiram",
    text: "A parceria entre o Instituto Tortuga, braço social da dsm-firmenich Brasil e o Instituto Granada é um exemplo de quando propósitos se encontram, vidas mudam. Oferecemos alimentação de qualidade, apoiamos a inclusão digital e realizamos doações e campanhas solidárias ao longo do ano. Nossa parceria é sólida e reforça o compromisso de inspirar, capacitar e criar oportunidades reais para crianças e jovens.",
    describer:
      "Cristina Rodrigues, Coordenadora de Ações Sociais, Instituto Tortuga",
  },
  {
    image: Images.Testimonials2,
    title: "Vozes que inspiram",
    text: "Agradeço demais por ter participado deste instituto! As aulas de artesanato foram incríveis! Adorei criar coisas novas e aprender técnicas diferentes. As aulas de artes me fizeram sentir super criativo! E as gincanas foram muito divertidas! Uma ótima forma de conhecer melhor os colegas. O ambiente era super acolhedor e as tias do projeto eram muito legais. Muito obrigado por tudo. Foi uma experiência incrível!",
    describer:
      "José Antonio de Oliveira, atendido pelo Instituto de 2017 a 2022",
  },
  {
    image: Images.Testimonials3,
    title: "Vozes que inspiram",
    text: "Quero expressar minha mais sincera gratidão a todos que tornaram possível este projeto incrível de apoio às crianças carentes da região leste de Mairinque. Dos 9 aos 16 anos participei do projeto, com refeições, estudos, aulas e momentos inesquecíveis que mudaram minha vida. A dedicação dos voluntários abriu portas para um futuro melhor e nenhuma palavra expressa isso melhor do que GRATIDÃO.",
    describer:
      "Raiane Rodrigues de Morais, atendida pelo Instituto de 2011 a 2016",
  },
  {
    image: Images.Testimonials4,
    title: "Vozes que inspiram",
    text: "Tudo o que fazemos é por amor, é de coração. Sinto uma satisfação enorme quando as crianças me dizem que gostaram da sobremesa que eu servi! As crianças e adolescentes que nós atendemos me enchem de org ulho e alegria.",
    describer: "Rose, voluntária do Instituto Granada.",
  },

  {
    image: Images.Testimonials5,
    title: "Vozes que inspiram",
    text: "“Falar do Instituto Granada é falar com o coração. Fiquei desempregada com a pandemia e nossa renda familiar foi muito afetada, eu nunca pensei que precisaria de ajuda mas não estávamos conseguindo pagar todas as contas… Fui até o Instituto Granada por indicação de uma amiga e confesso que estava sentindo vergonha. Mas chegando lá, fui acolhida e apoiada. As pessoas que eu conheci lá, agora, são mais que meus amigos, são meus anjos.’’",
    describer: "Lorena, atendida pelo Instituto Granada.",
  },
  {
    image: Images.Testimonials6,
    title: "Vozes que inspiram",
    text: "Eu adoro ir para o Instituto Granada. Lá, a gente aprende, brinca, faz amigos. Eu gosto especialmente das atividades de artesanato, quando nós construímos objetos de decoração. Como eu sou muito boa com a matéria da escola, também ajudo os meus amigos.",
    describer: "Acsa, atendida no projeto Vida Feliz.",
  },
];

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <TestimonialsContainer>
      <Slider {...settings}>
        {testimonialsData.map((testimonial, index) => (
          <div key={index}>
            <Title>{testimonial.title}</Title>
            <CardContainer>
              <TestimonialImage
                src={testimonial.image}
                alt={testimonial.describer}
              />
              <TextContainer>
                <Text>{testimonial.text}</Text>
                <Describer>{testimonial.describer}</Describer>
              </TextContainer>
            </CardContainer>
          </div>
        ))}
      </Slider>
    </TestimonialsContainer>
  );
}
