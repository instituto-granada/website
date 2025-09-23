import React from "react";
import {
  Container,
  TextContainer,
  Description,
  Icone,
  InformationContainer,
  InformationGroupContainer,
  Numbers,
  Subtitle,
  Title,
} from "./styles";
import { Icons } from "../../assets/";

export default function StatistPanel() {
  return (
    <Container>
      <Title>Números que falam por nós</Title>
      <Subtitle>Cada número representa uma vida transformada</Subtitle>
      <InformationGroupContainer>
        <InformationContainer>
          <Icone src={Icons.Kid} alt="" />
          <TextContainer>
            <Numbers>338</Numbers>
            <Description>Crianças atendidas</Description>
          </TextContainer>
        </InformationContainer>
        <InformationContainer>
          <Icone src={Icons.People} alt="" />
          <TextContainer>
            <Numbers>778</Numbers>
            <Description>Pessoas beneficiadas</Description>
          </TextContainer>
        </InformationContainer>
        <InformationContainer>
          <Icone src={Icons.Food} alt="" />
          <TextContainer>
            <Numbers>29.517kg</Numbers>
            <Description>De alimentos doados</Description>
          </TextContainer>
        </InformationContainer>
        <InformationContainer>
          <Icone src={Icons.Shirt} alt="" />
          <TextContainer>
            <Numbers>27.224</Numbers>
            <Description>Peças de roupas doadas</Description>
          </TextContainer>
        </InformationContainer>
      </InformationGroupContainer>
    </Container>
  );
}
