import React from "react";
import Header from "../../components/Header";
import { HomerContainer, Container, Text } from "./styles";
export default function Home() {
  return (
    <HomerContainer>
      <Header />
      <Container>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          corrupti obcaecati optio, omnis nemo quia! Ullam, autem, sint
          accusamus optio iste eaque, perferendis pariatur quis quasi explicabo
          ab id cum?
        </Text>
      </Container>
    </HomerContainer>
  );
}
