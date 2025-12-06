import PageStructure from "../../components/PageStructure";
import Hero from "../../components/Hero";
import { IconName, Icons, Images } from "../../assets/";
import { useTranslate } from "../../hooks/useTranslate";
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
  Header, 
  Hint, 
  HowToDonateSection, 
  PixIcon, 
  QrCode, 
  Subtitle, 
  SuggestedValuesCard, 
  Text, 
  Title 
} from "./styles";

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
                src={Icons.Copy}
                onClick={() => {
                  navigator.clipboard
                  .writeText(text.donations.pixCard.chave.chavePix)
                }}
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
    </PageStructure>
  );
}
