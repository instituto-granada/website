import React, { Fragment } from "react";
import ButtonPrincipal, { ButtonProps } from "../ButtonPrincipal";

import { CardBody, CardTitle, CarouselContainer, CarouselContent, Header, Image, MainBody, TextContainer } from "./styles";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export interface ProjectCarouselItem {
    key: string;
    title: string;
    body: string;
    image: string;
    onButtonClick: ButtonProps["onClick"];
}

export interface ProjectCarouselProps {
    header: string;
    projects: ProjectCarouselItem[]
}

export default function ProjectCarousel({projects, header}: ProjectCarouselProps) {
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
        <CarouselContainer>
            <Header> {header} </Header>
            <Slider {...settings} className="carousel">
                {projects.map((project) => (
                    <CarouselContent>
                        <MainBody>
                            <TextContainer>
                                <CardTitle> {project.title} </CardTitle>
                                <CardBody> {project.body} </CardBody>
                            </TextContainer>
                            <ButtonPrincipal variant="primary" onClick={project.onButtonClick} className="carousel-button"> 
                                Saiba mais sobre essa iniciativa
                            </ButtonPrincipal>
                        </MainBody>
                        <Image src={project.image} />
                    </CarouselContent>
            ))}
            </Slider>
        </CarouselContainer>
      )
}