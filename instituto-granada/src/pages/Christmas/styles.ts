import styled from "styled-components";

export const LearnMore = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 40px 80px;
  gap: 40px;
  margin: 40px 40px auto;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 24px;
    gap: 24px;
  }
`;

export const ImageWrapper = styled.div`
  flex: 1;
  max-width: 360px;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
`;

export const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.primary[400]};
  font-family: ${(props) => props.theme.fontFamily.sora};
  font-size: ${(props) => props.theme.typography.sora.M};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  margin: 0 0 16px 0;
`;

export const Description = styled.p`
  color: ${(props) => props.theme.colors.extra.black};
  font-family: ${(props) => props.theme.fontFamily.outfit};
  font-size: ${(props) => props.theme.typography.outfit.L};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  line-height: ${(props) => props.theme.lineHeight["1_5x"]};
  margin: 0 0 32px 0;
  white-space: pre-wrap;
`;
