import { FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Hero from "../../components/Hero";
import { Images } from "../../assets/";
import { useTranslate } from "../../hooks/useTranslate";
import PageStructure from "../../components/PageStructure";
import InformationCard from "../../components/InformationCard";
import {
  ContactUs,
  ContactUsSectionSubtitle,
  ContactUsSectionTitle,
  ErrorMessage,
  Field,
  FormStyled,
  Input,
  Label,
  MaxLengthNotice,
  Positions,
  PositionsSection,
  PositionsSectionTitle,
  Row,
  Textarea,
  WrapperButton,
} from "./styles";
import { formSchema, FormData } from "../../schema";
import ButtonPrincipal from "../../components/ButtonPrincipal";
import Select from "../../components/Select";

const imageNames: (keyof typeof Images)[] = [
  "marketingPosition",
  "fundraiserPosition",
  "psychologistPosition",
  "teacherPosition",
  "educationalPsychologistPosition",
  "speechTherapistPosition",
  "generalAssistantPosition",
];

const positionOptions = [
  { value: "ajudante-geral", label: "Ajudante Geral" },
  { value: "captacao", label: "Captação" },
  { value: "fonoaudiologo", label: "Fonoaudiólogo" },
  { value: "marketing-digital", label: "Marketing Digital" },
  { value: "professor-assistente", label: "Professor/Assistente" },
  { value: "psicologo-psicanalista", label: "Psicólogo/Psicanalista" },
  { value: "psicopedagogo", label: "Psicopedagogo" },
];

type FormTexts = {
  buttonLabel: string;
  emailLabel: string;
  emailPlaceholder: string;
  nameLabel: string;
  namePlaceholder: string;
  messageLabel: string;
  messageInputMaxLenght: string;
  messagePlaceholder: string;
  positionLabel: string;
  positionPlaceholder: string;
  subtitle: string;
  title: string;
};

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
    console.log("Dados:", data);
    alert("Formulário enviado!");
  };

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <ContactUsSectionTitle>{title}</ContactUsSectionTitle>
      <ContactUsSectionSubtitle>{subtitle}</ContactUsSectionSubtitle>
      <Field>
        <Label error={!!errors.name}>{nameLabel}</Label>
        <Input
          type="text"
          {...register("name")}
          error={!!errors.name}
          placeholder={namePlaceholder}
        />
        <ErrorMessage error={!!errors.name}>
          {errors.name?.message}
        </ErrorMessage>
      </Field>
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
      <Select
        errorMessage={errors.position?.message}
        label={positionLabel}
        options={positionOptions}
        placeholder={positionPlaceholder}
        {...register("position")}
      />
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
      <WrapperButton>
        <ButtonPrincipal variant="primary">{buttonLabel}</ButtonPrincipal>
      </WrapperButton>
    </FormStyled>
  );
};

export default function Volunteers() {
  const { text } = useTranslate();
  const { formSection, hero, positions, positionsSectionTitle } =
    text.volunteers;

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
