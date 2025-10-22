import { useEffect, useState } from "react";
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
import ButtonPrincipal from "../ButtonPrincipal";
import Image from "../Image";
import { routesMap } from "../../routes/routesMap";

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
          <Image name="logo" width={150} />
        </SvgWrapper>

        {/* Menu Desktop */}
        {!isMobile && (
          <ButtonGroup>
            {Object.values(routesMap)
            .filter((route) => ('showInNav' in route ? route.showInNav !== false : true))
            .map(({ title, path }) => (
              <Link key={path} to={path}>
                <Button active={location.pathname === path}>{title}</Button>
              </Link>
            ))}
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
              <Image name="logo" width={150} />
              <CloseButton onClick={closeMenu}>×</CloseButton>
            </MobileMenuHeader>
            <MobileMenuItems>
              {Object.values(routesMap).map(({ path, title }) => (
                <StyledLink key={path} to={path} onClick={closeMenu}>
                  <MobileMenuItem active={location.pathname === path}>
                    {title}
                  </MobileMenuItem>
                </StyledLink>
              ))}
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
