import { FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Icon from "../Icon";
import Image from "../Image";
import { useTranslate } from "../../hooks/useTranslate";
import { routesMap } from "../../routes/routesMap";
import { formSchema, FormData } from "../../schema";
import {
  Address,
  ContactUs,
  Container,
  Description,
  ErrorMessage,
  Field,
  FormStyled,
  Info,
  Input,
  Label,
  List,
  ListItem,
  MaxLengthNotice,
  Menu,
  Row,
  SectionTitle,
  StyledLink,
  Textarea,
  Touchable,
  WrapperIcons,
  WrapperImage,
  WrapperText,
} from "./styles";
import ButtonPrincipal from "../ButtonPrincipal";

type FormTexts = {
  buttonLabel: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messageInputMaxLenght: string;
  messagePlaceholder: string;
  title: string;
};

const getRoute = (title: string) =>
  Object.values(routesMap).find((route) => route.title === title)?.path || "/";

const ContactForm: FC<FormTexts> = ({
  buttonLabel,
  emailLabel,
  emailPlaceholder,
  messageLabel,
  messageInputMaxLenght,
  messagePlaceholder,
  title,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Dados:", data);
    alert("Formulário enviado!");
  };

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <SectionTitle>{title}</SectionTitle>
      <Field>
        <Label error={!!errors.email}>{emailLabel}</Label>
        <Input
          type="email"
          {...register("email")}
          error={!!errors.email}
          placeholder={emailPlaceholder}
        />
        <ErrorMessage error={!!errors.email}>
          {errors.email?.message}
        </ErrorMessage>
      </Field>
      <Field>
        <Label error={!!errors.message}>{messageLabel}</Label>
        <Textarea
          {...register("message")}
          error={!!errors.message}
          maxLength={500}
          placeholder={messagePlaceholder}
        />
        <Row>
          <ErrorMessage error={!!errors.message}>
            {errors.message?.message}
          </ErrorMessage>
          <MaxLengthNotice>{messageInputMaxLenght}</MaxLengthNotice>
        </Row>
      </Field>
      <ButtonPrincipal variant="primary">{buttonLabel}</ButtonPrincipal>
    </FormStyled>
  );
};

const Footer: FC = () => {
  const { text } = useTranslate();
  const { address, description, formSection, siteMapSection } = text.footer;

  return (
    <Container>
      <Info>
        <WrapperImage>
          <Image name="logo" />
        </WrapperImage>
        <WrapperText>
          <Description>{description}</Description>
          <Address>{address}</Address>
        </WrapperText>
        <WrapperIcons>
          <Touchable href="#">
            <Icon name="whatsapp" width={20} height={20} />
          </Touchable>
          <Touchable href="https://www.facebook.com/www.institutogranada.com.br">
            <Icon name="facebook" width={20} height={20} />
          </Touchable>
          <Touchable href="https://www.instagram.com/institutogranada/">
            <Icon name="instagram" width={20} height={20} />
          </Touchable>
        </WrapperIcons>
      </Info>
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
      <ContactUs>
        <ContactForm
          buttonLabel={formSection.buttonLabel}
          emailLabel={formSection.emailLabel}
          emailPlaceholder={formSection.emailPlaceholder}
          messageLabel={formSection.messageLabel}
          messageInputMaxLenght={formSection.messageInputMaxLenght}
          messagePlaceholder={formSection.messagePlaceholder}
          title={formSection.title}
        />
      </ContactUs>
    </Container>
  );
};

export default Footer;
