import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.extra.white};
`;

export const SectionAbout = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80vh;
  max-width: 1279px;
  margin: 32px auto;
  padding: 40px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const LeftColumn = styled.div`
  flex: 0 0 365px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 60px;
  box-sizing: border-box;

  @media (max-width: 1279px) {
    flex: 1;
    padding-right: 30px;
  }

  @media (max-width: 768px) {
    padding-right: 0;
    margin-bottom: 30px;
    align-items: center;
  }
`;

export const RightColumn = styled.div`
  flex: 0 0 609px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 1279px) {
    flex: 2;
  }

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const Title = styled.p`
  font-family: ${(props) => props.theme.fontFamily.sora};
  font-size: ${(props) => props.theme.typography.sora.XS};
  text-align: center;
  font-weight: bold;
  margin: 0 0 20px 0;
  color: ${(props) => props.theme.colors.grayscale[800]};
`;

export const Icone = styled.img`
  width: 102px;
  height: auto;
`;

export const Text = styled.p`
  font-size: ${(props) => props.theme.typography.outfit.M};
  margin-bottom: 24px;
  color: ${(props) => props.theme.colors.grayscale[800]};
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

export const SectionParticipate = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: 64px auto;
  padding: 0 16px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

export const TitleParticipate = styled.h1`
  font-family: ${(props) => props.theme.fontFamily.sora};
  font-size: ${(props) => props.theme.typography.sora.M};
  font-weight: bold;
  margin: 0 0 12px 0;
  color: ${(props) => props.theme.colors.secondary[600]};
  text-align: center;
`;

export const SubtitleParticipate = styled.p`
  font-family: ${(props) => props.theme.fontFamily.outfit};
  font-size: ${(props) => props.theme.typography.outfit.M};
  font-weight: normal;
  color: ${(props) => props.theme.colors.grayscale[600]};
  margin-bottom: 30px;
  text-align: center;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  /* Para tablets e telas maiores */
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
`;

export const SectionTestimonials = styled.div`
  display: flex;
  padding: 0 8px 64px 8px;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.extra.white};
`;

export const TextSectionTestimonials = styled.p`
  margin-bottom: 12px;
  font-weight: bolder;
  font-family: ${(props) => props.theme.fontFamily.outfit};
  font-size: ${(props) => props.theme.typography.outfit.M};
  color: ${(props) => props.theme.colors.grayscale[700]};
`;
