import { FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Hero from "../../components/Hero";
import { useTranslate } from "../../hooks/useTranslate";
import PageStructure from "../../components/PageStructure";
import { Images } from "../../assets";
import ButtonPrincipal from "../../components/ButtonPrincipal";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import { formSchema, FormData } from "../../schema";
import Image from "../../components/Image";
import ListItem from "../../components/ListItem";
import {
  Card,
  Container,
  FormStyled,
  IconsRow,
  Items,
  SectionWrapper,
  SocialMediaTitle,
  Title,
  Touchable,
} from "./styles";
import { FormTexts } from "./types";

const ContactForm: FC<FormTexts> = ({
  buttonLabel,
  emailLabel,
  emailPlaceholder,
  nameLabel,
  namePlaceholder,
  messageLabel,
  messageInputMaxLenght,
  messagePlaceholder,
  phoneLabel,
  phonePlaceholder,
}) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    alert("Formulário enviado!");
  };

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <Input
        label={nameLabel}
        placeholder={namePlaceholder}
        error={errors.name?.message}
        labelBlack
        {...register("name")}
      />
      <Input
        control={control}
        mask="phone"
        label={phoneLabel}
        placeholder={phonePlaceholder}
        error={errors.phone?.message}
        labelBlack
        {...register("phone")}
      />
      <Input
        label={emailLabel}
        placeholder={emailPlaceholder}
        error={errors.email?.message}
        labelBlack
        {...register("email")}
      />
      <TextArea
        label={messageLabel}
        placeholder={messagePlaceholder}
        maxLengthMessage={messageInputMaxLenght}
        error={errors.message?.message}
        labelBlack
        {...register("message")}
      />
      <ButtonPrincipal variant="primary">{buttonLabel}</ButtonPrincipal>
    </FormStyled>
  );
};

export default function Contact() {
  const { text } = useTranslate();
  const { contactSection, formSection, hero } = text.contact;

  return (
    <PageStructure>
      <Hero
        emphasizeWordsIndex={[0, 1]}
        isHome={false}
        imageUrl={Images.backgroundContact}
        title={hero.title}
        text={hero.text}
      />
      <Container>
        <SectionWrapper centered>
          <Title>{formSection.title}</Title>
          <Card>
            <ContactForm
              buttonLabel={formSection.buttonLabel}
              emailLabel={formSection.emailLabel}
              emailPlaceholder={formSection.emailPlaceholder}
              nameLabel={formSection.nameLabel}
              namePlaceholder={formSection.namePlaceholder}
              messageLabel={formSection.messageLabel}
              messageInputMaxLenght={formSection.messageInputMaxLenght}
              messagePlaceholder={formSection.messagePlaceholder}
              phoneLabel={formSection.phoneLabel}
              phonePlaceholder={formSection.phonePlaceholder}
            />
          </Card>
        </SectionWrapper>
        <SectionWrapper>
          <Title>{contactSection.title}</Title>
          <Items>
            <ListItem iconName="home" message={contactSection.info.address} />
            <ListItem iconName="mail" message={contactSection.info.mail} />
            <ListItem iconName="whatsapp" message={contactSection.info.phone} />
            <ListItem
              iconName="briefcase"
              message={contactSection.info.cnpj}
              hasDivider={false}
            />
          </Items>
          <Card>
            <SocialMediaTitle>Acompanhe nossas redes sociais:</SocialMediaTitle>
            <IconsRow>
              <Touchable href="https://www.instagram.com/institutogranada/">
                <Image name="colorfulInstagram" style={{ width: "60px" }} />
              </Touchable>
              <Touchable href="https://www.facebook.com/www.institutogranada.com.br">
                <Image name="colorfulFacebook" style={{ width: "60px" }} />
              </Touchable>
              <Touchable href="https://www.youtube.com/@institutogranada7063">
                <Image name="colorfulYoutube" style={{ width: "60px" }} />
              </Touchable>
            </IconsRow>
          </Card>
        </SectionWrapper>
      </Container>
    </PageStructure>
  );
}
