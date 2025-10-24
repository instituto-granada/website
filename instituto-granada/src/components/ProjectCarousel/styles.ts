import styled from "styled-components";

export const CarouselContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  position: relative;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  padding-bottom: 50px;
  gap: ${(props) => props.theme.spacing.M};

  max-width: 100%;

  background-color: ${(props) => props.theme.colors.secondary[700]};

  .carousel-button {
    max-width: 326px;
  }

  .carousel {
    width: 100%;
  }

  .carousel-slide {
    display: flex;
    align-items: stretch;
  }

  .slick-track {
    display: flex;
    align-items: center;
  }

  .slick-dots {
    width: 100%;
    left: 0;
  }

  .slick-dots li button:before {
    font-size: 8px;
    color: ${(props) => props.theme.colors.grayscale[300]};
  }

  .slick-dots li.slick-active button:before {
    color: ${(props) => props.theme.colors.grayscale[100]};
  }

  .slick-prev,
  .slick-next {
    visibility: hidden;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
  }

  .slick-prev {
    left: 4px;
  }

  .slick-next {
    right: 4px;
  }

  .slick-prev:before,
  .slick-next:before {
    color: ${(props) => props.theme.colors.extra.white};
    font-size: 40px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${(props) => props.theme.spacing.XL}
      ${(props) => props.theme.spacing["4XL"]};
    gap: ${(props) => props.theme.spacing.L};
    height: auto;

    .slick-dots {
      visibility: hidden;
    }

    .slick-prev,
    .slick-next {
      visibility: visible;
    }
  }
`;

export const Header = styled.h1`
  text-align: center;
  font-family: ${({ theme }) => theme.fontFamily.sora};
  font-size: ${({ theme }) => theme.typography.sora.M};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight["1_1x"]};
  color: ${({ theme }) => theme.colors.extra.orange};
`;

export const CarouselContent = styled.div`
  display: flex !important;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.M};
  height: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
  }
`;

export const MainBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  max-width: 420px;
  gap: ${(props) => props.theme.spacing.L};

  @media (min-width: ${({ theme }) => theme.breakpoints.mobileL}) {
    align-items: left;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.S};
  height: 100%;
`;

export const CardTitle = styled.h2`
  width: 100%;
  text-align: center;
  font-family: ${({ theme }) => theme.fontFamily.sora};
  font-size: ${({ theme }) => theme.typography.sora.S};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight["1_1x"]};
  color: ${({ theme }) => theme.colors.secondary[100]};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    text-align: left;
  }
`;

export const CardBody = styled.p`
  width: 100%;
  text-align: justify;
  font-family: ${({ theme }) => theme.fontFamily.outfit};
  font-size: ${({ theme }) => theme.typography.outfit.M};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: ${({ theme }) => theme.lineHeight["1_5x"]};
  color: ${({ theme }) => theme.colors.secondary[100]};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    text-align: left;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  object-position: center;
  border-radius: 24px;
  display: none !important;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobileL}) {
    width: 100%;
    max-width: 420px;
    height: auto;
    max-height: 492px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block !important;
    width: 380px;
    height: 380px;
  }
`;
