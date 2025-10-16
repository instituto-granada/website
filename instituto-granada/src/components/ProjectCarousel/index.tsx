import React from "react";
import ButtonPrincipal, { ButtonProps } from "../ButtonPrincipal";

import { CardBody, CardTitle, CarouselContainer, Header, Image, MainBody } from "./styles";
import Slider from "react-slick";

export interface ProjectCarouselItem {
    header: string;
    title: string;
    body: string;
    image: string;
    buttonLabel: string;
    onButtonClick: ButtonProps["onClick"];
}

export interface ProjectCarouselProps {
    projects: ProjectCarouselItem[]
}

export default function ProjectCarousel({projects}: ProjectCarouselProps) {
    const settings = {
        dots: false,
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
        <Slider {...settings}>
            {projects.map((project) => (
               <CarouselContainer>
               <Header> {project.header} </Header>
               <CarouselContainer>
                   <MainBody>
                       <CardTitle> { project.title } </CardTitle>
                       <CardBody> { project.body } </CardBody>
                       <ButtonPrincipal variant="primary" >
                           {project.buttonLabel}
                       </ButtonPrincipal>
                   </MainBody>
                   <Image src={ project.image }/>
               </CarouselContainer>
            </CarouselContainer> 
            ))}
      </Slider>
      )
}