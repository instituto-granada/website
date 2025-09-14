import React, { useEffect, useState } from "react";
import {
  Container,
  ButtonGroup,
  Button,
  SvgWrapper,
  MobileMenu,
  MobileMenuItems,
  MobileMenuItem,
  Overlay,
  MobileMenuHeader,
  CloseButton,
  HamburgerButton,
  MobileMenuButton,
  StyledLink,
  DonateButton,
} from "./styles";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/Logo_Instituto_Granada.svg";
import ButtonPrincipal from "../ButtonPrincipal";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const useIsMobile = (breakpoint = 768) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < breakpoint);
        // Fecha o menu quando a tela ficar maior
        if (window.innerWidth >= breakpoint) {
          setIsMenuOpen(false);
        }
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, [breakpoint]);

    return isMobile;
  };

  const isMobile = useIsMobile();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        isMenuOpen &&
        !target.closest(".mobile-menu") &&
        !target.closest(".hamburger-button")
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <>
      <Container>
        <SvgWrapper>
          <Logo />
        </SvgWrapper>

        {/* Menu Desktop */}
        {!isMobile && (
          <ButtonGroup>
            <Link to="/">
              <Button active={location.pathname === "/"}>Home</Button>
            </Link>
            <Link to="/about">
              <Button active={location.pathname === "/about"}>Sobre</Button>
            </Link>
            <Link to="/projects">
              <Button active={location.pathname === "/projects"}>
                Projetos
              </Button>
            </Link>
            <Link to="/donations">
              <Button active={location.pathname === "/donations"}>
                Doações
              </Button>
            </Link>
            <Link to="/volunteers">
              <Button active={location.pathname === "/volunteers"}>
                Voluntários
              </Button>
            </Link>
          </ButtonGroup>
        )}

        {/* Botão Hambúrguer Mobile */}
        {isMobile && (
          <HamburgerButton className="hamburger-button" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </HamburgerButton>
        )}

        {!isMobile && <DonateButton>{"DOE AGORA"}</DonateButton>}
      </Container>

      {/* Menu Mobile Lateral */}
      {isMobile && (
        <>
          <Overlay isOpen={isMenuOpen} onClick={closeMenu} />
          <MobileMenu className="mobile-menu" isOpen={isMenuOpen}>
            <MobileMenuHeader>
              <Logo />
              <CloseButton onClick={closeMenu}>×</CloseButton>
            </MobileMenuHeader>
            <MobileMenuItems>
              <StyledLink to="/" onClick={closeMenu}>
                <MobileMenuItem active={location.pathname === "/"}>
                  Home
                </MobileMenuItem>
              </StyledLink>
              <StyledLink to="/about" onClick={closeMenu}>
                <MobileMenuItem active={location.pathname === "/about"}>
                  Sobre
                </MobileMenuItem>
              </StyledLink>
              <StyledLink to="/projects" onClick={closeMenu}>
                <MobileMenuItem active={location.pathname === "/projects"}>
                  Projetos
                </MobileMenuItem>
              </StyledLink>
              <StyledLink to="/donations" onClick={closeMenu}>
                <MobileMenuItem active={location.pathname === "/donations"}>
                  Doações
                </MobileMenuItem>
              </StyledLink>
              <StyledLink to="/volunteers" onClick={closeMenu}>
                <MobileMenuItem active={location.pathname === "/volunteers"}>
                  Voluntários
                </MobileMenuItem>
              </StyledLink>
              <MobileMenuButton>
                <ButtonPrincipal
                  variant="primary"
                  onClick={() => alert("Botão Secundário Clicado!")}
                >
                  DOE AGORAA
                </ButtonPrincipal>
              </MobileMenuButton>
            </MobileMenuItems>
          </MobileMenu>
        </>
      )}
    </>
  );
}
