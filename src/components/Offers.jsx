import styled from "styled-components";

const Offers = () => {
  return (
    <OffersSectionContainer>
      <OfferCardTitle>Choose the best format for you</OfferCardTitle>
      <CardsGrid>
        <OfferCard>
          <CardTitle>Start Strong</CardTitle>
          <CardSubtitle>Hyrox Foundations</CardSubtitle>
          <CardDescription>
            New to HYROX? Learn the format, master the basics, and build
            confidence in a supportive, coach-led environment.
          </CardDescription>
          <CardButton>Join Foundations</CardButton>
        </OfferCard>

        <OfferCard>
          <CardTitle>Boost Your Engine</CardTitle>
          <CardSubtitle>Hyrox Conditioning</CardSubtitle>
          <CardDescription>
            Take your stamina and strength to the next level with high-intensity
            sessions that mimic race-day energy.
          </CardDescription>
          <CardButton>Join Conditioning</CardButton>
        </OfferCard>

        <OfferCard>
          <CardTitle>Train Like a Pro</CardTitle>
          <CardSubtitle>Competitive Prep</CardSubtitle>
          <CardDescription>
            Dial in your technique and pacing with advanced HYROX workouts
            tailored for race prep.
          </CardDescription>
          <CardButton>Join Competitive</CardButton>
        </OfferCard>

        <OfferCard>
          <CardTitle>No Strings Attached</CardTitle>
          <CardSubtitle>Flexible</CardSubtitle>
          <CardDescription>
            Drop-in classes, open gym hours, and flexible passes. Train on your
            terms, whenever you want.
          </CardDescription>
          <CardButton>Join Flexible</CardButton>
        </OfferCard>
      </CardsGrid>
    </OffersSectionContainer>
  );
};
export default Offers;

// Styled Components

const OffersSectionContainer = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
  background-color: #F2F2F2; // Off-white neutral
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(28, 28, 30, 0.2); // Slightly stronger shadow with Fever dark
  @media (max-width: 480px) {
    padding: 10px;
  }
  `;

const OfferCardTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  color: #FF3B30; // Fierce red

    @media (max-width: 480px) {
      font-size: 18px;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-gap: 10px;
    max-width: 300px;
    margin: 0 auto;
  }
`;

const OfferCard = styled.div`
  background-color: #FFFFFF; // clean white card
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(28, 28, 30, 0.1); // softer Fever shadow
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #1C1C1E; // Charcoal black for strength
`;

const CardSubtitle = styled.h3`
  font-size: 14px;
  color: #666666; // Still neutral, readable subtitle
  margin-bottom: 20px;
`;

const CardDescription = styled.p`
  font-size: 14px;
  color: #666666;
  margin-bottom: 20px;
`;

const CardButton = styled.button`
  background-color: #FF3B30; // Fierce red CTA
  color: #FFFFFF;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: 0.3s;

  &:hover {
    background-color: #FFD600; // Bright yellow on hover
    color: #1C1C1E; // Fever charcoal text on hover
  }
`;
