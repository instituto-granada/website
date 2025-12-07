import React from "react";
import ButtonPrincipal from "../ButtonPrincipal";
import { ButtonContainer, Container, Subtitle, TextContainer, Title } from "./styles";

interface ContributePanelProps {
  title: string;
  subTitle: string;
  buttonLabel: string;
  onButtonClick?: () => void;
}

export default function ContributePanel({
  title,
  subTitle,
  buttonLabel,
  onButtonClick} : ContributePanelProps) {
  return (
    <Container>
      <TextContainer>
        <Title>{ title }</Title>
        <Subtitle>{ subTitle }</Subtitle>
      </TextContainer>
      <ButtonContainer>
        <ButtonPrincipal
          variant="primary"
          onClick={onButtonClick}
        >
          { buttonLabel }
        </ButtonPrincipal>
      </ButtonContainer>
    </Container>
  );
}
