import styled from "styled-components";

interface ButtonProps {
  active?: boolean;
}

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  height: 64px;
  width: 100%;
  padding: 0 48px;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  background-color: white;
  z-index: 1;
  border-bottom: 1px solid #e0e0e0;
`;

export const SvgWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 152px;
  min-width: 120px;
  transition: all 0.2s ease-in-out;
  @media (max-width: 768px) {
    padding: 10px 16px;
    font-size: 0.9rem;
  }
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
`;

export const Button = styled.button<ButtonProps>`
  padding: 8px 16px;
  border: none;
  border-bottom: 3px solid;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s;
  font-weight: 700;
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
`;

export const DonateButton = styled.button`
  padding: 12px 32px;
  border: none;
  border-radius: 80px;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 700;
  color: white;
  background-color: ${(props) => props.theme.colors.primary[400]};
  transition: all 0.2s ease-in-out;

  white-space: nowrap;

  &:hover {
    background-color: #e57d19;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 10px 16px;
    font-size: 0.9rem;
  }
`;
