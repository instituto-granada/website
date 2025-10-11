import {
  Body,
  Container,
  Content,
  Title,
  WrapperImage,
  WrapperText,
} from "./styles";
import Image from "../Image";
import { Images } from "../../assets";

export interface InformationCardProps {
  image: keyof typeof Images;
  title: string;
  body: string;
}

export default function InformationCard({
  image,
  title,
  body,
}: InformationCardProps) {
  return (
    <Container>
      <Content>
        <WrapperImage>
          <Image name={image} width={150} />
        </WrapperImage>
        <WrapperText>
          {title && <Title>{title}</Title>}
          {body && <Body>{body}</Body>}
        </WrapperText>
      </Content>
    </Container>
  );
}
