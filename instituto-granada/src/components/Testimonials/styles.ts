import styled from "styled-components";

export const TestimonialsContainer = styled.section`
  position: relative;
  width: 90%;
  max-width: 900px;
  margin: 4rem auto;
  border-radius: 16px;
  border: 1px solid ${(props) => props.theme.colors.primary[500]};
  background-color: ${(props) => props.theme.colors.grayscale[100]};

  padding: 0 38px;

  .slick-prev,
  .slick-next {
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
    color: ${(props) => props.theme.colors.grayscale[700]};
    font-size: 28px;
  }

  .slick-dots {
    position: absolute;
    bottom: 15px;
    width: 100%;
    left: 0;
  }

  .slick-dots li button:before {
    font-size: 8px;
    color: ${(props) => props.theme.colors.grayscale[500]};
  }

  .slick-dots li.slick-active button:before {
    color: ${(props) => props.theme.colors.grayscale[700]};
  }

  @media (max-width: 768px) {
    padding: 0;

    .slick-prev,
    .slick-next {
      display: none !important;
    }

    .slick-dots {
      bottom: 8px;
    }
  }
`;

export const CardContainer = styled.div`
  display: flex !important;
  align-items: center;
  gap: 2rem;
  background-color: ${(props) => props.theme.colors.grayscale[100]};
  padding: 1rem 2.5rem 2.5rem 2.5rem;
  border-radius: 8px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 2rem 1.5rem;
    gap: 1.5rem;
  }
`;

export const TestimonialImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h3`
  margin-top: 12px;
  text-align: center;
  font-family: ${(props) => props.theme.fontFamily.sora};
  font-size: ${(props) => props.theme.typography.sora.S};
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary[500]};
`;

export const Text = styled.p`
  font-family: ${(props) => props.theme.fontFamily.outfit};
  font-size: ${(props) => props.theme.typography.outfit.S};
  font-weight: normal;
  line-height: ${(props) => props.theme.lineHeight["1_5x"]};
  color: ${(props) => props.theme.colors.grayscale[800]};
  margin: 0;
`;

export const Describer = styled.p`
  font-family: ${(props) => props.theme.fontFamily.outfit};
  font-size: ${(props) => props.theme.typography.outfit.S};
  font-weight: bolder;
  color: ${(props) => props.theme.colors.primary[700]};
`;
