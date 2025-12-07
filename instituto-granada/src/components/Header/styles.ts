import styled from "styled-components";
import { Link } from "react-router-dom";
import { breakpoints } from "../../styles/breakpoints";

interface ButtonProps {
  active?: boolean;
}

interface MobileMenuProps {
  isOpen?: boolean;
}

interface OverlayProps {
  isOpen?: boolean;
}

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  height: 64px;
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.S};
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  background-color: white;
  z-index: 1000;
  border-bottom: 1px solid #e0e0e0;

  @media (min-width: ${breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.spacing["4XL"]};
  }
`;

export const SvgWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 152px;
  min-width: 120px;
  transition: all 0.2s ease-in-out;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  flex: 1 1 auto;
  min-width: 0;
  overflow-x: auto;
  white-space: nowrap;
  justify-content: center;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;

  @media (max-width: 900px) {
    gap: 12px;
  }
`;

export const Button = styled.button<ButtonProps>`
  padding: 8px 16px;
  border: none;
  border-bottom: 3px solid;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s;
  font-family: ${(props) => props.theme.fontFamily.outfit};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  background-color: white;
  flex-shrink: 0;

  color: ${(props) =>
    props.active
      ? props.theme.colors.primary[400]
      : props.theme.colors.secondary[600]};
  border-bottom-color: ${(props) =>
    props.active ? props.theme.colors.primary[400] : "transparent"};

  &:hover {
    color: ${(props) => props.theme.colors.primary[400]};
  }
  @media (max-width: 900px) {
    font-size: 0.7rem;
  }
`;

export const DonateButton = styled.button`
  padding: 12px 32px;
  border: none;
  border-radius: 80px;
  cursor: pointer;
  font-size: 1.2rem;
  font-family: ${(props) => props.theme.fontFamily.outfit};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  color: white;
  background-color: ${(props) => props.theme.colors.primary[400]};
  transition: all 0.2s ease-in-out;
  white-space: nowrap;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary[500]};
  }
  &:active {
    background-color: ${(props) => props.theme.colors.secondary[600]};
  }

  @media (max-width: 900px) {
    padding: 8px 16px;
    font-size: 0.7rem;
  }
`;

export const HamburgerButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  gap: 4px;

  span {
    width: 20px;
    height: 2px;
    background-color: ${(props) => props.theme.colors.secondary[600]};
    transition: all 0.3s ease;
    transform-origin: center;
  }

  &:hover span {
    background-color: ${(props) => props.theme.colors.primary[400]};
  }
`;

export const Overlay = styled.div<OverlayProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1001;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease;
`;

export const MobileMenu = styled.div<MobileMenuProps>`
  position: fixed;
  top: 0;
  right: 0;
  width: 280px;
  height: 100vh;
  background-color: white;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1002;
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
`;

export const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid #e0e0e0;
  height: 64px;
  box-sizing: border-box;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.secondary[600]};
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.colors.primary[400]};
  }
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const MobileMenuItems = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  flex: 1;
`;

export const MobileMenuButton = styled.div`
  display: flex;
  margin: 1rem;
  justify-content: center;
  align-items: center;
`;

export const MobileMenuItem = styled.div<ButtonProps>`
  padding: 16px 20px;
  cursor: pointer;
  font-size: 1.1rem;
  font-family: ${(props) => props.theme.fontFamily.outfit};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  transition: all 0.3s ease;
  border-left: 4px solid transparent;

  color: ${(props) =>
    props.active
      ? props.theme.colors.primary[400]
      : props.theme.colors.secondary[600]};

  border-left-color: ${(props) =>
    props.active ? props.theme.colors.primary[400] : "transparent"};

  background-color: ${(props) =>
    props.active ? "rgba(255, 153, 51, 0.1)" : "transparent"};

  &:hover {
    color: ${(props) => props.theme.colors.primary[400]};
    background-color: rgba(255, 153, 51, 0.05);
  }
`;
