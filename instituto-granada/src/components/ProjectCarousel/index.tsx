import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

import { routesMap } from "../../routes/routesMap";
import ButtonPrincipal from "../ButtonPrincipal";
import {
  CardBody,
  CardTitle,
  CarouselContainer,
  CarouselContent,
  Header,
  Image,
  MainBody,
  TextContainer,
} from "./styles";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export interface ProjectCarouselItem {
  key: string;
  title: string;
  body: string;
  image: string;
}

export interface ProjectCarouselProps {
  header: string;
  projects: ProjectCarouselItem[];
}

export default function ProjectCarousel({
  projects,
  header,
}: ProjectCarouselProps) {
  const navigate = useNavigate();

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

  const getRoute = (key: string) => {
    const route = (routesMap as Record<string, { path: string }>)[key];
    if (route) {
      return route.path;
    }
    return "/";
  };

  const goToRoute = (key: string) => {
    const route = getRoute(key);
    navigate(route);
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
              <ButtonPrincipal
                variant="primary"
                onClick={() => goToRoute(project.key)}
                className="carousel-button"
              >
                Saiba mais sobre essa iniciativa
              </ButtonPrincipal>
            </MainBody>
            <Image src={project.image} />
          </CarouselContent>
        ))}
      </Slider>
    </CarouselContainer>
  );
}
