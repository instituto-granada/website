import React from 'react';
import {
  Container,
  ImageWrapper,
  ContentWrapper,
  Title,
  Description,
  StyledImage,
  ButtonsContainer,
  ButtonContainer,
} from './styles';
import ButtonPrincipal from '../ButtonPrincipal';

interface HowItWorksProps {
  imageUrl: string;
  title: string;
  text: React.ReactNode;
  oneButton?: boolean; 
}
export default function HowItWorks({
  imageUrl,
  title,
  text,
  oneButton = false, 
}: HowItWorksProps) {
  return (
    <Container>
      <ImageWrapper>
        <StyledImage src={imageUrl} alt="Crianças e voluntários reunidos em um evento comunitário" />
      </ImageWrapper>
      <ContentWrapper>
        <Title>{title}</Title>
        <Description>{text}</Description>
        <ButtonsContainer>
          {oneButton ? (
            <ButtonContainer>

            <ButtonPrincipal
              variant="primary"
              onClick={() => alert("Botão Apadrinhar Clicado!")}
              >
              Quero apadrinhar
            </ButtonPrincipal>
              </ButtonContainer>
          ) : (
            <>
              <ButtonPrincipal
                variant="secondary"
                onClick={() => alert("Botão Secundário Clicado!")}
              >
                Quero ser voluntário
              </ButtonPrincipal>
              <ButtonPrincipal
                variant="primary"
                onClick={() => alert("Botão Primário Clicado!")}
              >
                Quero doar
              </ButtonPrincipal>
            </>
          )}
        </ButtonsContainer>
      </ContentWrapper>
    </Container>
  );
}