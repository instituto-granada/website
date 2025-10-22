import React from "react";
import ButtonPrincipal from "../ButtonPrincipal";
import { ButtonContainer, Container, Subtitle, Title } from "./styles";

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
      <Title>{ title }</Title>
      <Subtitle>{ subTitle }</Subtitle>
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
