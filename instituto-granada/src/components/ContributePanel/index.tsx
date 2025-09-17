import React from "react";
import ButtonPrincipal from "../ButtonPrincipal";
import { ButtonContainer, Container, Subtitle, Title } from "./styles";

export default function ContributePanel() {
  return (
    <Container>
      <Title>Quer apoiar nossos projetos?</Title>
      <Subtitle>Sua contribuição pode transformar vidas</Subtitle>
      <ButtonContainer>
        <ButtonPrincipal
          variant="primary"
          onClick={() => alert("Botão Primário Clicado!")}
        >
          Faça parte dessa transformação
        </ButtonPrincipal>
      </ButtonContainer>
    </Container>
  );
}
