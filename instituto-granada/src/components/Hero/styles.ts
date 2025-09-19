import styled from "styled-components";

interface HeroContainerProps {
  imageUrl: string;
  isHome?: boolean;
}

export const Container = styled.section<HeroContainerProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: ${(props) => (props.isHome ? "110vh" : "80vh")};
  padding: 0 5%;
  overflow: hidden;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at 30% 90%,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0.4) 90%
    );
    z-index: 1;
  }
`;

export const ContentColumn = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  width: 45%;
  max-width: 650px;

  @media (max-width: 768px) {
    width: 90%;
    align-items: center;
    text-align: center;
  }
`;

export const Title = styled.h1`
  color: #ffffff;
  font-size: ${(props) => props.theme.typography.sora.M};
  font-weight: 700;
  line-height: ${(props) => props.theme.lineHeight["1_1x"]};
  font-family: ${(props) => props.theme.font_family.sora};
  margin-bottom: 1rem;
  text-transform: uppercase;
`;

export const HighlightedWord = styled.span`
  color: ${(props) => props.theme.colors.primary[400]};
`;

export const Text = styled.p`
  color: #f0f0f0;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  line-height: ${(props) => props.theme.lineHeight["1_1x"]};
  margin-bottom: 2rem;
  max-width: 600px;
`;

export const HeroButtonWrapper = styled.div`
  width: 100%;
  max-width: 300px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;

  @media (max-width: 768px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;

    & > button {
      width: 100%;
      max-width: 300px;
    }
  }
`;
