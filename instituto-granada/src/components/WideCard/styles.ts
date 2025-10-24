import styled, { css } from "styled-components";
import { theme } from "~/theme/theme";
import { breakpoints } from "../../styles/breakpoints";

interface StyledWideCardProps {
  $imagePosition: "left" | "right";
}

export const StyledWideCard = styled.div<StyledWideCardProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.spacing.M};
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (min-width: ${breakpoints.mobileS}) {
    flex-direction: column;
    padding: 1rem;
  }

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    padding: ${(props) => props.theme.spacing.S}
      ${(props) => props.theme.spacing["4XL"]};

    .wide-card-image {
      order: ${(props) => (props.$imagePosition === "left" ? 1 : 2)};
    }

    .card-text-container {
      order: ${(props) => (props.$imagePosition === "left" ? 2 : 1)};
    }
  }
`;

export const CardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.S};
`;

export const CardImage = styled.img`
  width: 50%;
  height: 100%;
  border-radius: 24px;
  object-fit: cover;
`;

export const CardTitle = styled.h2`
  font-family: ${({ theme }) => theme.fontFamily.sora};
  font-size: ${({ theme }) => theme.typography.sora.S};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight["1_1x"]};
  color: ${({ theme }) => theme.colors.secondary[600]};
`;

export const CardBody = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.outfit};
  font-size: ${({ theme }) => theme.typography.outfit.M};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: ${({ theme }) => theme.lineHeight["1_5x"]};
  color: ${({ theme }) => theme.colors.extra.black};
`;
