import {
  Badge,
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
  uppercaseTitle?: boolean;
  badgeText?: string;
}

export default function InformationCard({
  image,
  title,
  body,
  uppercaseTitle = false,
  badgeText,
}: InformationCardProps) {
  return (
    <Container>
      <Content>
        <WrapperImage>
          <Image name={image} />
          {badgeText && <Badge>{badgeText}</Badge>}
        </WrapperImage>
        <WrapperText>
          {title && <Title uppercase={uppercaseTitle}>{title}</Title>}
          {body && <Body>{body}</Body>}
        </WrapperText>
      </Content>
    </Container>
  );
}
