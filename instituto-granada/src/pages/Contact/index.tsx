import { FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Hero from "../../components/Hero";
import { useTranslate } from "../../hooks/useTranslate";
import PageStructure from "../../components/PageStructure";
import { Images } from "../../assets";
import { Column, Container, ContactCard, FormStyled, Title } from "./styles";
import ButtonPrincipal from "../../components/ButtonPrincipal";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import { formSchema, FormData } from "../../schema";
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
}) => {
  const {
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
        {...register("name")}
      />
      <Input
        label={emailLabel}
        placeholder={emailPlaceholder}
        error={errors.email?.message}
        {...register("email")}
      />
      <TextArea
        label={messageLabel}
        placeholder={messagePlaceholder}
        maxLengthMessage={messageInputMaxLenght}
        error={errors.message?.message}
        {...register("message")}
      />
      <ButtonPrincipal variant="primary">{buttonLabel}</ButtonPrincipal>
    </FormStyled>
  );
};

export default function Contact() {
  const { text } = useTranslate();
  const { formSection, hero } = text.contact;

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
        <Column>
          <Title>{formSection.title}</Title>
          <ContactCard>
            <ContactForm
              buttonLabel={formSection.buttonLabel}
              emailLabel={formSection.emailLabel}
              emailPlaceholder={formSection.emailPlaceholder}
              nameLabel={formSection.nameLabel}
              namePlaceholder={formSection.namePlaceholder}
              messageLabel={formSection.messageLabel}
              messageInputMaxLenght={formSection.messageInputMaxLenght}
              messagePlaceholder={formSection.messagePlaceholder}
            />
          </ContactCard>
        </Column>
      </Container>
    </PageStructure>
  );
}
