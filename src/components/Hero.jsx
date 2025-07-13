import styled from 'styled-components';
import heroImage from '../assets/hero-section.jpg';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>Hyrox has finally arrived in Crossfit Fever</HeroTitle>
        <HeroSubtitle>Looking for your next fitness challenge, check out our offers!</HeroSubtitle>
        <button className='button-sporty'>Book your free session</button>
      </HeroContent>
    </HeroContainer>
  );
}
export default Hero;

// Styled components

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  text-align: center;
  margin: 20% 0;
`;

const HeroContent = styled.div``;

const HeroTitle = styled.h1``;

const HeroSubtitle = styled.p``;

