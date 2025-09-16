import Header from "../../components/Header";
import { HomerContainer, Container, Text } from "./styles";
import ButtonPrincipal from "../../components/ButtonPrincipal";
import Card from "../../components/Card";

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

      <Container>
      <Text>Exemplo de uso dos cards:</Text>
        <Card 
          image="https://picsum.photos/200/85?greyscale"
          text="Doe seu tempo e habilidades para fortalecer a comunidade."
          buttonLabel="Inscreva-se" 
          onButtonClick={() => alert("Botão Secundário Clicado!")}
        />
      </Container>
    </HomerContainer>
  );
}
