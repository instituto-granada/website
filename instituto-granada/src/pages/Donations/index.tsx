import PageStructure from "../../components/PageStructure";
import Hero from "../../components/Hero";
import { IconName, Icons, Images } from "../../assets/";
import { useTranslate } from "../../hooks/useTranslate";
import { useState } from "react";
import {
  AsidePanel,
  CardContentWrapper,
  CardText,
  CardTextContainer,
  CardTitle,
  ChavePix, 
  ChavePixSection, 
  ChaveWrapper, 
  DonationCard, 
  DonationIcon, 
  DonationIconCard, 
  DonationsSection, 
  DonationValue, 
  DonationValuesWrapper, 
  Form, 
  FormInput, 
  FormLabel, 
  Header, 
  Hint, 
  HowToDonateSection, 
  InputWrapper, 
  PartnerSection, 
  PartnerTextContainer, 
  PartnerTextsSubtitle, 
  PartnerTextTitle, 
  PixIcon, 
  QrCode, 
  Subtitle, 
  SuggestedValuesCard, 
  Text, 
  Title 
} from "./styles";
import ButtonPrincipal from "../../components/ButtonPrincipal";

const cardIcons = [
  Icons.ServiceLine,
  Icons.OpenArmLine,
  Icons.UserStarLine
];

export default function Donations() {

  const { text } = useTranslate();
  const {
    hero,
  } = text.donations;

  const [copied, setCopied] = useState(false);

  const handleCopyPix = async () => {
    await navigator.clipboard.writeText(text.donations.pixCard.chave.chavePix);
    setCopied(true);

    setTimeout(() => {
     setCopied(false);
   }, 1000);
  };

  return (
    <PageStructure>
      <Hero
        imageUrl={Images.backgroundDonation}
        title={hero.title}
        text={hero.text}
        emphasizeWordsIndex={[0, 1]}
      />
      <DonationsSection>
        <DonationCard>
          <Header>
            <Title> {text.donations.pixCard.title} </Title>
            <Subtitle> {text.donations.pixCard.text} </Subtitle>
          </Header>
          <QrCode
            src={Images.qrCodePix}
          />
          <ChavePixSection>
            <Title> {text.donations.pixCard.chave.subtitle} </Title>
            <ChaveWrapper>
              <ChavePix> {text.donations.pixCard.chave.chavePix} </ChavePix>
              <PixIcon
                src={copied ? Icons.Check : Icons.Copy}
                onClick={handleCopyPix}
              />
            </ChaveWrapper>
          </ChavePixSection>
          <HowToDonateSection>
            <Title> {text.donations.pixCard.howToDonate.text} </Title>
            <Text> {text.donations.pixCard.howToDonate.stepOne} </Text>
            <Text> {text.donations.pixCard.howToDonate.stepTwo} </Text>
            <Text> {text.donations.pixCard.howToDonate.stepThree} </Text>
          </HowToDonateSection>
        </DonationCard>
        <AsidePanel>
          <SuggestedValuesCard>
            <Header>
              <Title> {text.donations.suggestedValues.title} </Title>
              <Subtitle> {text.donations.suggestedValues.text} </Subtitle>
            </Header>
            <DonationValuesWrapper>
              {text.donations.suggestedValues.values.map((value) => (
                <DonationValue key={value}>{value}</DonationValue>
              ))}
            </DonationValuesWrapper>
            <Hint> {text.donations.suggestedValues.hint} </Hint>
          </SuggestedValuesCard>
          {text.donations.cards.map((card, index) =>
            <DonationIconCard>
              <CardContentWrapper>
                <DonationIcon
                  src={cardIcons[index]}  
                />
                <CardTextContainer>
                  <CardTitle> {card.title} </CardTitle>
                  <CardText> {card.text} </CardText>
                </CardTextContainer>
              </CardContentWrapper>
            </DonationIconCard>
          )}
        </AsidePanel>
      </DonationsSection>
      <PartnerSection>
        <PartnerTextContainer>
          <PartnerTextTitle> {text.donations.partners.title} </PartnerTextTitle>
          <PartnerTextsSubtitle> {text.donations.partners.subtitle} </PartnerTextsSubtitle>
        </PartnerTextContainer>
        <Form>
          {text.donations.partners.form.inputs.map((field, index) => (
            <InputWrapper>
              <FormLabel> {field.label} </FormLabel>
              <FormInput
                type={index === 1 ? "email" : "text"}
                placeholder={field.placeholder}
              />
            </InputWrapper>
          ))}
          <ButtonPrincipal> {text.donations.partners.form.buttonLabel} </ButtonPrincipal>
        </Form>
      </PartnerSection>
    </PageStructure>
  );
}
