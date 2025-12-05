import PageStructure from "../../components/PageStructure";
import Hero from "../../components/Hero";
import { IconName, Icons, Images } from "../../assets/";
import { useTranslate } from "../../hooks/useTranslate";
import {
  ChavePix, 
  ChavePixSection, 
  ChaveWrapper, 
  DonationCard, 
  DonationsSection, 
  Header, 
  HowToDonateSection, 
  PixIcon, 
  QrCode, 
  Subtitle, 
  Text, 
  Title 
} from "./styles";

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
            <Title> {text.donations.pixSection.title} </Title>
            <Subtitle> {text.donations.pixSection.text} </Subtitle>
          </Header>
          <QrCode
            src={Images.qrCodePix}
          />
          <ChavePixSection>
            <Title> {text.donations.pixSection.chave.subtitle} </Title>
            <ChaveWrapper>
              <ChavePix> {text.donations.pixSection.chave.chavePix} </ChavePix>
              <PixIcon
                src={Icons.Copy}
                onClick={() => {
                  navigator.clipboard
                  .writeText(text.donations.pixSection.chave.chavePix)
                }}
              />
            </ChaveWrapper>
          </ChavePixSection>
          <HowToDonateSection>
            <Title> {text.donations.pixSection.howToDonate.text} </Title>
            <Text> {text.donations.pixSection.howToDonate.stepOne} </Text>
            <Text> {text.donations.pixSection.howToDonate.stepTwo} </Text>
            <Text> {text.donations.pixSection.howToDonate.stepThree} </Text>
          </HowToDonateSection>
        </DonationCard>
      </DonationsSection>
    </PageStructure>
  );
}
