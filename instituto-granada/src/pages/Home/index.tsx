import React from "react";
import Header from "../../components/Header";
import { HomerContainer, Container, Text } from "./styles";
import ButtonPrincipal from "../../components/ButtonPrincipal";

export default function Home() {
  return (
    <HomerContainer>
      <Header />
      <Container>
        <Text>Exemplo de uso dos botões com variantes logo abaixo:</Text>
        <ButtonPrincipal
          variant="primary"
          onClick={() => alert("Botão Primário Clicado!")}
        >
          Button Sample
        </ButtonPrincipal>
        <ButtonPrincipal
          variant="secondary"
          onClick={() => alert("Botão Secundário Clicado!")}
        >
          Button Sample
        </ButtonPrincipal>
        <ButtonPrincipal
          variant="ghost"
          onClick={() => alert("Botão Secundário Clicado!")}
        >
          Button Sample
        </ButtonPrincipal>
      </Container>
    </HomerContainer>
  );
}
