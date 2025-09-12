import React, { useEffect, useState } from "react";
import {
  Container,
  ButtonGroup,
  Button,
  DonateButton,
  SvgWrapper,
} from "./styles";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/Logo_Instituto_Granada.svg";

export default function Header() {
  const useIsMobile = (breakpoint = 768) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < breakpoint);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, [breakpoint]);

    return isMobile;
  };

  const isMobile = useIsMobile();
  const location = useLocation();

  return (
    <Container>
      <SvgWrapper>
        <Logo />
      </SvgWrapper>
      <ButtonGroup>
        <Link to="/">
          <Button active={location.pathname === "/"}>Home</Button>
        </Link>
        <Link to="/about">
          <Button active={location.pathname === "/about"}>Sobre</Button>
        </Link>
        <Link to="/projects">
          <Button active={location.pathname === "/projects"}>Projetos</Button>
        </Link>
        <Link to="/volunteers">
          <Button active={location.pathname === "/volunteers"}>
            Voluntários
          </Button>
        </Link>
      </ButtonGroup>
      <DonateButton>
        {/* Renderiza o texto do botão condicionalmente */}
        {isMobile ? "Doar" : "DOE AGORA"}
      </DonateButton>
    </Container>
  );
}
