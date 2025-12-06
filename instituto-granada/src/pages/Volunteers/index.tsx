import { FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Hero from "../../components/Hero";
import { Images } from "../../assets/";
import { useTranslate } from "../../hooks/useTranslate";
import PageStructure from "../../components/PageStructure";
import InformationCard from "../../components/InformationCard";
import { formSchema, FormData } from "../../schema";
import ButtonPrincipal from "../../components/ButtonPrincipal";
import Select from "../../components/Select";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import {
  ContactUs,
  ContactUsSectionSubtitle,
  ContactUsSectionTitle,
  FormStyled,
  Positions,
  PositionsSection,
  PositionsSectionTitle,
  WrapperButton,
} from "./styles";
import { FormTexts } from "./types";

const imageNames: (keyof typeof Images)[] = [
  "marketingPosition",
  "fundraiserPosition",
  "psychologistPosition",
  "teacherPosition",
  "educationalPsychologistPosition",
  "speechTherapistPosition",
  "physicalEducatorPosition",
  "generalAssistantPosition",
];

const positionOptions = [
  { value: "ajudante-geral", label: "Ajudante Geral" },
  { value: "captacao", label: "Captação" },
  { value: "fonoaudiologo", label: "Fonoaudiólogo" },
  { value: "marketing-digital", label: "Marketing Digital" },
  { value: "professor-assistente", label: "Professor/Assistente" },
  { value: "psicologo-psicanalista", label: "Psicólogo/Psicanalista" },
  { value: "educador-fisico", label: "Educador Físico" },
  { value: "psicopedagogo", label: "Psicopedagogo" },
];

const ContactForm: FC<FormTexts> = ({
  buttonLabel,
  emailLabel,
  emailPlaceholder,
  nameLabel,
  namePlaceholder,
  messageLabel,
  messageInputMaxLenght,
  messagePlaceholder,
  positionLabel,
  positionPlaceholder,
  subtitle,
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
    alert("Formulário enviado!");
  };

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <ContactUsSectionTitle>{title}</ContactUsSectionTitle>
      <ContactUsSectionSubtitle>{subtitle}</ContactUsSectionSubtitle>
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
      <Select
        errorMessage={errors.position?.message}
        label={positionLabel}
        options={positionOptions}
        placeholder={positionPlaceholder}
        {...register("position")}
      />
      <TextArea
        label={messageLabel}
        placeholder={messagePlaceholder}
        maxLengthMessage={messageInputMaxLenght}
        error={errors.message?.message}
        {...register("message")}
      />
      <WrapperButton>
        <ButtonPrincipal variant="primary">{buttonLabel}</ButtonPrincipal>
      </WrapperButton>
    </FormStyled>
  );
};

export default function Volunteers() {
  const { text } = useTranslate();
  const {
    formSection,
    hero,
    positions,
    positionsBadgeText,
    positionsSectionTitle,
  } = text.volunteers;

  return (
    <PageStructure>
      <Hero
        emphasizeWordsIndex={[1]}
        imageUrl={Images.backgroundVolunteers}
        title={hero.title}
        text={hero.text}
      />
      <PositionsSection>
        <PositionsSectionTitle>{positionsSectionTitle}</PositionsSectionTitle>
        <Positions>
          {positions.map((position, index) => (
            <InformationCard
              key={index}
              image={imageNames[index]}
              title={position.title}
              body={position.body}
              badgeText={positionsBadgeText}
            />
          ))}
        </Positions>
      </PositionsSection>
      <ContactUs>
        <ContactForm
          buttonLabel={formSection.buttonLabel}
          emailLabel={formSection.emailLabel}
          emailPlaceholder={formSection.emailPlaceholder}
          nameLabel={formSection.nameLabel}
          namePlaceholder={formSection.namePlaceholder}
          messageLabel={formSection.messageLabel}
          messageInputMaxLenght={formSection.messageInputMaxLenght}
          messagePlaceholder={formSection.messagePlaceholder}
          positionLabel={formSection.positionLabel}
          positionPlaceholder={formSection.positionPlaceholder}
          subtitle={formSection.subtitle}
          title={formSection.title}
        />
      </ContactUs>
    </PageStructure>
  );
}
