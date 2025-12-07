import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import ButtonPrincipal from "../ButtonPrincipal";
import Image from "../Image";
import { routesMap } from "../../routes/routesMap";

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

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const useIsMobile = (breakpoint = 1024) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < breakpoint);
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
  const navigate = useNavigate();

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
          <Link to="/">
            <Image name="logo" width={150} />
          </Link>
        </SvgWrapper>
        {!isMobile && (
          <ButtonGroup>
            {Object.values(routesMap)
              .filter((route) =>
                "showInNav" in route ? route.showInNav !== false : true,
              )
              .map(({ title, path }) => (
                <Link key={path} to={path}>
                  <Button active={location.pathname === path}>{title}</Button>
                </Link>
              ))}
          </ButtonGroup>
        )}

        {isMobile && (
          <HamburgerButton className="hamburger-button" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </HamburgerButton>
        )}

        {!isMobile && <DonateButton onClick={() => navigate("/doacoes")} >{"Doe agora"}</DonateButton>}
      </Container>

      {isMobile && (
        <>
          <Overlay isOpen={isMenuOpen} onClick={closeMenu} />
          <MobileMenu className="mobile-menu" isOpen={isMenuOpen}>
            <MobileMenuHeader>
              <Image name="logo" style={{ width: "130px" }} />
              <CloseButton onClick={closeMenu}>×</CloseButton>
            </MobileMenuHeader>
            <MobileMenuItems>
              {Object.values(routesMap)
                .filter((route) =>
                  "showInNav" in route ? route.showInNav !== false : true,
                )
                .map(({ title, path }) => (
                  <StyledLink key={path} to={path} onClick={closeMenu}>
                    <MobileMenuItem active={location.pathname === path}>
                      {title}
                    </MobileMenuItem>
                  </StyledLink>
                ))}
              <MobileMenuButton>
                <ButtonPrincipal
                  variant="primary"
                  onClick={() => navigate("/doacoes")}
                >
                  Doe agora
                </ButtonPrincipal>
              </MobileMenuButton>
            </MobileMenuItems>
          </MobileMenu>
        </>
      )}
    </>
  );
}
