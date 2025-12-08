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
import { NavigateOptions, To, useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate();
  
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
              onClick={() => navigate("/doacoes")}
              >
              Quero apadrinhar
            </ButtonPrincipal>
              </ButtonContainer>
          ) : (
            <>
              <ButtonPrincipal
                variant="secondary"
                onClick={() => navigate("/voluntarios")}
              >
                Quero ser voluntário
              </ButtonPrincipal>
              <ButtonPrincipal
                variant="primary"
                onClick={() => navigate("/doacoes")}
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