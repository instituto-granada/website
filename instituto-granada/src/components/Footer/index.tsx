import { FC } from "react";

import Icon from "../Icon";
import Image from "../Image";
import { useTranslate } from "../../hooks/useTranslate";
import { routesMap } from "../../routes/routesMap";
import {
  Container,
  Copyright,
  Description,
  Info,
  List,
  ListItem,
  Menu,
  SectionTitle,
  SocialMedia,
  StyledLink,
  Touchable,
  WrapperIcons,
  WrapperImage,
  WrapperText,
} from "./styles";

const getRoute = (title: string) =>
  Object.values(routesMap).find((route) => route.title === title)?.path || "/";

const Footer: FC = () => {
  const { text } = useTranslate();
  const { copyright, description, siteMapSection, socialMedia } = text.footer;

  return (
    <>
      <Container>
        <Info>
          <WrapperImage>
            <Image name="logo" />
          </WrapperImage>
          <WrapperText>
            <Description>{description}</Description>
          </WrapperText>
        </Info>
        <SocialMedia>
          <SectionTitle>{socialMedia.title}</SectionTitle>
          <WrapperIcons>
            <Touchable href="#">
              <Icon name="whatsapp" width={38} height={38} />
            </Touchable>
            <Touchable href="https://www.facebook.com/www.institutogranada.com.br">
              <Icon name="facebook" width={38} height={38} />
            </Touchable>
            <Touchable href="https://www.instagram.com/institutogranada/">
              <Icon name="instagram" width={38} height={38} />
            </Touchable>
          </WrapperIcons>
        </SocialMedia>
        <Menu>
          <SectionTitle>{siteMapSection.title}</SectionTitle>
          <List>
            {siteMapSection.routesList.map(({ routeTitle }) => {
              const route = getRoute(routeTitle);

              return (
                <StyledLink key={routeTitle} to={route}>
                  <ListItem>{routeTitle}</ListItem>
                </StyledLink>
              );
            })}
          </List>
        </Menu>
      </Container>
      <Copyright>{copyright}</Copyright>
    </>
  );
};

export default Footer;
