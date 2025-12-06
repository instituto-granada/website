import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const DonationsSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => `${theme.spacing.M} ${theme.spacing.S}`};
  background-color: ${({ theme }) => `${theme.colors.extra.white}`};
  gap: ${({ theme }) => `${theme.spacing.M}`};

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    align-items: stretch;
    padding: ${({ theme }) => `${theme.spacing["3XL"]} ${theme.spacing["4XL"]}`};
  }
`;

export const QrCode = styled.img`
  width: 311px;
  height: 314px;
  object-fit: cover;
`;

export const DonationCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  padding: ${({ theme }) => `${theme.spacing.M}`};
  gap: ${({ theme }) => `${theme.spacing.L}`};

  background-color: #FFFFFF;
  border: 1px solid ${({ theme }) => `${theme.colors.grayscale[300]}`};
  border-radius: 24px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const ChavePixSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;
  gap: 10px;
`;

export const HowToDonateSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;
  gap: 10px;
  padding: ${({ theme }) => `${theme.spacing.M}`};
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily.outfit};
  font-size: ${({ theme }) => theme.typography.outfit.L};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  line-height: ${({ theme }) => theme.lineHeight["1_5x"]};
  color: ${({ theme }) => theme.colors.extra.black};
`;

export const Subtitle = styled.h2`
  font-family: ${({ theme }) => theme.fontFamily.outfit};
  font-size: ${({ theme }) => theme.typography.outfit.L};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: ${({ theme }) => theme.lineHeight["1_5x"]};
  color: ${({ theme }) => theme.colors.grayscale[600]};
`;

export const Text = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.outfit};
  font-size: ${({ theme }) => theme.typography.outfit.M};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: ${({ theme }) => theme.lineHeight["1_5x"]};
  color: ${({ theme }) => theme.colors.extra.black};
`;

export const Hint = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.outfit};
  font-size: ${({ theme }) => theme.typography.outfit.S};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: ${({ theme }) => theme.lineHeight["1_5x"]};
  color: ${({ theme }) => theme.colors.grayscale[600]};
`;

export const ChaveWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => `${theme.spacing.XS}`}
`;

export const ChavePix = styled.p`
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing.XS} ${theme.spacing.S}`};

  font-family: ${({ theme }) => theme.fontFamily.outfit};
  font-size: ${({ theme }) => theme.typography.outfit.M};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: ${({ theme }) => theme.lineHeight["1_5x"]};
  color: ${({ theme }) => theme.colors.extra.black};
  
  border: 1px solid ${({ theme }) => `${theme.colors.grayscale[400]}`};
  border-radius: 12px;
`;

export const PixIcon = styled.img`
  padding: ${({ theme }) => `${theme.spacing.XS} ${theme.spacing.S}`};  
  border: 1px solid ${({ theme }) => `${theme.colors.grayscale[400]}`};
  border-radius: 12px;
  cursor: pointer;
`;

export const SuggestedValuesCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 506px;
  max-height: 423px;

  padding: ${({ theme }) => `${theme.spacing.M}`};
  gap: 48px;

  background-color: #FFFFFF;
  border: 1px solid ${({ theme }) => `${theme.colors.grayscale[300]}`};
  border-radius: 24px;
`

export const DonationValuesWrapper = styled.div`
  width: 328px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => `${theme.spacing.M}`};
`;

export const DonationValue = styled.p`
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing.XS} ${theme.spacing.S}`};

  text-align: center;
  font-family: ${({ theme }) => theme.fontFamily.outfit};
  font-size: ${({ theme }) => theme.typography.outfit.M};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  line-height: ${({ theme }) => theme.lineHeight["1_5x"]};
  color: ${({ theme }) => theme.colors.extra.black};
  
  border: 1px solid ${({ theme }) => `${theme.colors.grayscale[400]}`};
  border-radius: 12px;
`;