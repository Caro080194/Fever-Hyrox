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
  transition: height 0.5s ease-in-out;

  @media (max-width: 1200px) {
    height: 700px;
  }

  @media (max-width: 768px) {
    height: 500px;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    height: 400px;
  }
`;

const HeroContent = styled.div`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: #fff;
  transition: bottom 0.5s ease-in-out;

  @media (max-width: 768px) {
    bottom: 10%;
  }

  @media (max-width: 480px) {
    bottom: 15%;
  }
`;

const HeroTitle = styled.h1`
  font-size: 56px;
  font-weight: bold;
  margin-bottom: 20px;
  transition: font-size 0.5s ease-in-out;

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  transition: font-size 0.5s ease-in-out;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;